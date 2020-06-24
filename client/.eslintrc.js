module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "airbnb/base",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // "prettier/prettier": "error",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/extensions": [".js",".jsx",".ts",".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts",".tsx"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".js",".jsx",".ts",".tsx"]
            }
        }
    },
};
