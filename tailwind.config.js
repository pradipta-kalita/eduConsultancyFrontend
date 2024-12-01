/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Satoshi', 'sans-serif'],
            },
            colors: {
                'primary-light': '#f97316',
                'primary-dark' : '#ea580c',
                'footer-color': '#2B3340',
            }
        },
    },
    plugins: [],
};

