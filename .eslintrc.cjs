/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	overrides: [
		{
			files: [
				'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
				'cypress/support/**/*.{js,ts,jsx,tsx}'
			],
			'extends': [
				'plugin:cypress/recommended'
			]
		}
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'linebreak-style': 0,
		'vue/html-indent': ['error', 'tab'], // enforce tabs in template
		indent: ['error', 'tab'], // enforce tabs in script and js files
		semi: 2,
		'n/no-callback-literal': 0,
	},
};
