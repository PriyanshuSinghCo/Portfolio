/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-color': '#0a0a0a',
                'text-color': '#e0e0e0',
                'primary-color': '#00d2ff',
                'secondary-color': '#3a7bd5',
                'accent-color': '#9d50bb',
                'card-bg': 'rgba(255, 255, 255, 0.05)',
                'card-border': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
