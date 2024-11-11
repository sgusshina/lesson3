const prettier = require("eslint-plugin-prettier");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [...compat.extends("eslint:recommended", "prettier"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 2024,
        sourceType: "commonjs",
    },

    rules: {
        "no-alert": "warn",
        "max-params": ["warn", 3],
        "max-lines": ["warn", 3],
        camelcase: "error",
        eqeqeq: ["error", "always"],
    },
}];