import React from 'react';


const ErrorElement = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-transparent">

            <img
                src='https://i.ibb.co.com/hFGjLBwZ/Screenshot-2026-04-14-at-12-25-41-AM.png'
                alt="404 Error"
                className="max-w-md w-full mb-6"
            />

            <h1 className="text-3xl md:text-4xl font-bold text-[#244D3F] mb-3">
                Oops! Page Not Found
            </h1>

            <p className="text-gray-600 mb-6">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2 bg-[J#244D3F] text-white rounded-lg hover:opacity-90 transition"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorElement;