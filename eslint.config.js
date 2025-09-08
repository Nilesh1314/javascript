// eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        rules: {
        // Add your custom rules here
        "no-unused-vars": "warn",
        "no-undef": "error",
        eqeqeq: "error",
        },
    },
];
