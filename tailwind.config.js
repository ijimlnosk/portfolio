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
            },
            animation: {
                loading: "loading 2s linear",
                blink: "blink 0.7s steps(1) infinite",
            },
        },
    },
    plugins: [],
}
