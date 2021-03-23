module.exports = {
	parser: "@babel/eslint-parser",
	env: {
		browser: true,
		es6: true,
		amd: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
		allowImportExportEverywhere: true,
		requireConfigFile: false,
	},
	plugins: ["svelte3"],
	extends: ["eslint:recommended"],
	overrides: [
		{
			files: ["**/*.svelte"],
			processor: "svelte3/svelte3",
		},
	],
	globals: {
		log: true,
	},
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-tabs": "off",
		"import/prefer-default-export": "off",
		"object-curly-newline": "off",
		log: "off",
	},
};
