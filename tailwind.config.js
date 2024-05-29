/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"bg-p": "#343e4c",
				"bg-s": "#0b131e",
			},
		},
	},
	plugins: [],
};

