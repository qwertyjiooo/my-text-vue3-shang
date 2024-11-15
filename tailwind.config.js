/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#4F46E5',
                'secondary': '#6B46C1',
                'tertiary': '#8B5CF6',
                'quaternary': '#A855F7',
                'quinary': '#D1B2FF',
                'senary': '#F3F4F6',
                'septenary': '#111827',
                'octonary': '#1F2937',
                'nonary': '#374151',
                'denary': '#4B5563',
            }
        },
    },
    plugins: [],
}