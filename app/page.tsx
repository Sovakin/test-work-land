import React from 'react';
import Form from './components/form';

const Home = () => {
    return (
        <main className="font-sans flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 min-h-screen bg-gray-50">
            <section className="text-center mb-16 md:mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                    Получите бесплатную консультацию
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.
                </p>
            </section>
            <section className="w-full max-w-md mb-16 md:mb-20">
                <Form />
            </section>
            <section className="w-full max-w-4xl mb-16 md:mb-20">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Почему выбирают нас?
                </h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <div className="p-4 mb-4 bg-blue-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Быстрый отклик
                        </h3>
                        <p className="text-gray-500">
                            Мы свяжемся с вами в течение 15 минут.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <div className="p-4 mb-4 bg-green-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Квалифицированные специалисты
                        </h3>
                        <p className="text-gray-500">
                            Наши специалисты имеют большой опыт работы.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <div className="p-4 mb-4 bg-yellow-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-yellow-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0v9a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-9m18 0A2.25 2.25 0 0019.5 5.25H4.5A2.25 2.25 0 003 7.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Индивидуальный подход
                        </h3>
                        <p className="text-gray-500">
                            Мы учитываем все особенности вашей ситуации.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="w-full text-center text-gray-500 py-6 border-t border-gray-200">
                © {new Date().getFullYear()}. Все права защищены.
            </footer>
        </main>
    );
};

export default Home;