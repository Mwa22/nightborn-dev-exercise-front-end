module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: "#F7F7F7",
				blue: "#3E6BEC",
				orange: "#DBA97C",
				green: "#52D8B0",
			},
			boxShadow: {
				t1: "0px 4px 10px rgba(0, 0, 0, 0.04)",
				t2: "0px 0px 13.6667px rgba(0, 0, 0, 0.06)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
