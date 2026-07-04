import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Seu Nome",
	siteUrl: "https://example.com",
	date: {
		locale: "pt-BR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"Um starter minimalista em Astro para blog pessoal, com MDX, RSS, SEO e foco na leitura.",
	lang: "pt-BR",
	ogLocale: "pt_BR",
	sortPostsByUpdatedDate: false,
	title: "Blog Astro",
	hideThemeCredit: false,
	// Handle do X/Twitter usado em twitter:site (ex: "@seublog"). Deixe undefined se não tiver.
	twitterHandle: undefined,
	profile: {
		name: "John Doe",
		email: "john@example.com",
		github: "https://github.com/example",
		linkedin: "https://www.linkedin.com/in/example/",
		jobTitle: "Software Engineer",
		employer: "Example Inc.",
		employerUrl: "https://example.com",
		alumni: "Example University",
		avatar: "/avatar.png",
	},
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Início",
	},
	{
		path: "/posts/",
		title: "Publicações",
	},
	{
		path: "/about/",
		title: "Sobre",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: "#1a1715",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: "#1a1715",
			editorTabBarBackground: "#15120e",
			frameBoxShadowCssValue: "none",
			terminalBackground: "#1a1715",
			terminalTitlebarBackground: "#15120e",
		},
		uiLineHeight: "inherit",
	},
	themes: ["min-dark"],
	useThemedScrollbars: false,
};
