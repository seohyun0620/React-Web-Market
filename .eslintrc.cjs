module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks", "jsx-a11y"],
  rules: {
    "jsx-a11y/anchor-has-content": [
      "warn",
      {
        components: ["Link"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "warn",
    "react/prop-types": "off",
    "react/button-has-type": "warn",
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: false,
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        multiline: "last",
      },
    ],
    "no-unused-vars":"warn",
    "import/no-unresolved": "off",
  },
}
