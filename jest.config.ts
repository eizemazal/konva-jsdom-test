export default {
    moduleFileExtensions: [
        "js",
        "ts",
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "**/test.ts",
    ],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
};
