const { defaults } = require("jest-config");
module.exports = {
	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes

	roots: ["<rootDir>/src"],

	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		// "^.+\\.svg$": "<rootDir>/svgTransform.js",
		// "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
		// 	"<rootDir>/fileTransformer.js",
		"^.+\\.svg$": "jest-svg-transformer",
	},

	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: [
		// "@testing-library/react/cleanup-after-each",
		"@testing-library/jest-dom/extend-expect",
	],

	// Test spec file resolution pattern
	// Matches parent folder `__tests__` and filename
	// should contain `test` or `spec`.
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

	// Module file extensions for importing
	moduleFileExtensions: [
		...defaults.moduleFileExtensions,
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node",
	],
};
const config = {
	verbose: true,
};

module.exports = config;
