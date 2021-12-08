const colors = require('tailwindcss/colors');
module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: '#025962',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber
		},
		minWidth: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/5': '60%',
			'3/4': '75%',
			full: '100%'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
