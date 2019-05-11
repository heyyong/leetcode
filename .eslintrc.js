module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "google",
        "prettier"
    ],
    "plugins": ["prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "prettier/prettier": "error",
        "quotes": ["error", "double"],
        "indent": ["error", 2],
        "require-jsdoc": 0,
        "max-len": ["error", 120],
        "no-unused-vars": 0
    }
};