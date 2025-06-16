/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

    theme: {
        extend: {
            keyframes: {
                drift: {
                    '0%': { transform: 'translate(-50%, -50%) translate(0px, 0px)' },
                    '25%': { transform: 'translate(-50%, -50%) translate(15px, -10px)' },
                    '50%': { transform: 'translate(-50%, -50%) translate(0px, 15px)' },
                    '75%': { transform: 'translate(-50%, -50%) translate(-15px, -10px)' },
                    '100%': { transform: 'translate(-50%, -50%) translate(0px, 0px)' },
                },
            },
            animation: {
                drift: 'drift 20s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
