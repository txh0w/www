import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
		"!./src/pages/og-image/[...slug].png.ts",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [],
	theme: {
		extend: {
			colors: {
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				bg: "hsl(var(--theme-bg) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				text: "hsl(var(--theme-text) / <alpha-value>)",
				"text-muted": "hsl(var(--theme-text-muted) / <alpha-value>)",
				paper: "var(--paper)",
				hairline: "var(--hairline)",
				faint: "var(--faint)",
				"accent-soft": "var(--accent-soft)",
			},
			fontFamily: {
				sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
				serif: ['"Newsreader Variable"', "Iowan Old Style", ...defaultTheme.fontFamily.serif],
				mono: ['"JetBrains Mono Variable"', ...defaultTheme.fontFamily.mono],
			},
			maxWidth: {
				reading: "64ch",
			},
		},
	},
} satisfies Config;
