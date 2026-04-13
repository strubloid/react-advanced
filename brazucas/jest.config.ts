import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    },
    transformIgnorePatterns: ["/node_modules/(?!(styled-components)/)"],
    moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/app/components/$1",
        "^@/(.*)$": "<rootDir>/$1",
    },
};

export default config;
