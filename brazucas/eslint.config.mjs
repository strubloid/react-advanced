import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            "brace-style": ["error", "1tbs"],
            "no-multiple-empty-lines": ["warn", { max: 1, maxBOF: 0, maxEOF: 1 }],
            indent: ["warn", 4, { SwitchCase: 1 }],
            "no-trailing-spaces": "warn",
            "eol-last": ["warn", "always"],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
