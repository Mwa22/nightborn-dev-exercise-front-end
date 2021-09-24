module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: "#F7F7F7",
				blue: "#3E6BEC",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
