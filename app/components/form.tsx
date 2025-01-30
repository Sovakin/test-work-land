'use client';
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
    });
    const router = useRouter();

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', phone: '' };

        if (!name.trim()) {
            newErrors.name = 'Пожалуйста, введите имя.';
            isValid = false;
        }
        if (!phone.trim()) {
            newErrors.phone = 'Пожалуйста, введите номер телефона.';
            isValid = false;
        } else if (!/^\d+$/.test(phone.trim())) {
            newErrors.phone = 'Неверный формат телефона.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    useEffect(() => {
        if (errors.name || errors.phone) {
            const timeoutId = setTimeout(() => {
                setErrors({ name: '', phone: '' });
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, [errors]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return;

        if (!validateForm()) {
            return;
        }

        const hasSubmitted = Cookies.get('formSubmitted');
        if (hasSubmitted) {
            setGlobalError('Вы уже отправили заявку.');
            return;
        }

        setLoading(true);
        setGlobalError('');

        try {
            const response = await axios.post(
                'https://order.drcash.sh/v1/order',
                {
                    stream_code: 'vv4uf',
                    client: {
                        phone: phone,
                        name: name,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer RLPUUOQAMIKSAB2PSGUECA',
                    },
                }
            );

            if (response.status === 200) {
                Cookies.set('formSubmitted', 'true', { expires: 1 });
                router.push('/done');
            } else {
                setGlobalError('Ошибка при отправке заявки.');
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const axiosError = err as AxiosError;
                setGlobalError(`Ошибка при отправке заявки: ${axiosError.message}`);
            } else if (err instanceof Error) {
                setGlobalError(`Ошибка при отправке заявки: ${err.message}`);
            } else {
                setGlobalError('Неизвестная ошибка при отправке заявки.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleFocus = (fieldName: string) => {
        setErrors(prevState => ({ ...prevState, [fieldName]: '' }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 md:p-8 transition-all duration-300"
        >
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Имя:
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => handleFocus('name')}
                    className={`w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow duration-200 ${
                        errors.name
                            ? 'border-red-500 ring-2 ring-red-200'
                            : 'border-gray-300'
                    }`}
                    placeholder="Введите ваше имя"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
            </div>
            <div className="mb-4">
                <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Номер телефона:
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => handleFocus('phone')}
                    className={`w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-shadow duration-200 ${
                        errors.phone
                            ? 'border-red-500 ring-2 ring-red-200'
                            : 'border-gray-300'
                    }`}
                    placeholder="Введите номер телефона"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
            </div>
            {globalError && (
                <div
                    className="text-red-500 mb-4 bg-red-100 p-3 rounded-md transition-opacity duration-300"
                >
                    {globalError}
                </div>
            )}
            <button
                type="submit"
                className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
            >
                {loading ? 'Отправка...' : 'Отправить'}
            </button>
        </form>
    );
};

export default Form;