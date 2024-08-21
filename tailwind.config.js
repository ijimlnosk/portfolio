/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                loading: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                blink: {
                    "0%": { borderColor: "transparent" },
                    "50%": { borderColor: "white" },
                },
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
            },
            animation: {
                loading: "loading 2s linear",
                blink: "blink 0.7s steps(1) infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
}
