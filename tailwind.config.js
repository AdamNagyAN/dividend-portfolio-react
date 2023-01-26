/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			white: colors.white,
			black: colors.black,
			inherit: colors.inherit,
			gray: {
				50: colors.gray['50'],
				100: colors.gray['100'],
				light: colors.gray['200'],
				DEFAULT: colors.gray['600'],
				dark: colors.gray['800'],
			},
			indigo: {
				light: colors.indigo['200'],
				DEFAULT: colors.indigo['600'],
				dark: colors.indigo['800'],
			},
			red: {
				light: colors.red['200'],
				DEFAULT: colors.red['600'],
				dark: colors.red['800'],
			},
			green: {
				DEFAULT: colors.green['600'],
			},
		},
		extend: {},
	},
	plugins: [typography],
};
