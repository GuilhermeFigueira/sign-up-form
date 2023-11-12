import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				tomato: "hsl(4, 100%, 67%)",
				grey: {
					default: "hsl(231, 7%, 60%)",
					charcoal: "hsl(235, 18%, 26%)",
					slate: " hsl(234, 29%, 20%)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
