import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactNative from 'eslint-plugin-react-native'
import importPlugin from 'eslint-plugin-import'

import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	js.configs.recommended,

	...tseslint.configs.recommended,

	{
		files: ['**/*.{ts,tsx,js,jsx}'],

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},

		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-native': reactNative,
			import: importPlugin
		},

		settings: {
			react: {
				version: 'detect'
			}
		},

		rules: {
			'no-duplicate-imports': 'error',
			'import/no-duplicates': 'error',

			'react/react-in-jsx-scope': 'off',

			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn'
		}
	},

	eslintConfigPrettier
]