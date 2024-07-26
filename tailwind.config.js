const { transform } = require("sucrase");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#C40C0C",
				secondary: "#64748b",
				dark: "#0f172a",
			},
			screens: {
				"2xl": "1320px",
			},
			animation: {
				"loop-scroll": "loop-scroll 35s linear infinite",
			},
			keyframes: {
				"loop-scroll": {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(-100%)" },
				},
			}, 
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
