import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "tema-1": "var(--tema-1)",
                "tema-2": "var(--tema-2)",
                "tema-3": "var(--tema-3)",
                "tema-4": "var(--tema-4)",
                "tema-5": "var(--tema-5)",
            },
            screens: {
                sm: "300px",
                md: "768",
                lg: "1024px",
            },
        },
    },

    plugins: [forms],
};
