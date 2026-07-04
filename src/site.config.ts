import type { SiteConfig, SocialLink } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Thom",
	siteUrl: "https://thom.wtf",
	date: {
		locale: "pt-BR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description: "um site onde eu escrevo coisas que passam na minha mente",
	lang: "pt-BR",
	ogLocale: "pt_BR",
	sortPostsByUpdatedDate: false,
	title: "thom's space",
	hideThemeCredit: false,
	// Handle do X/Twitter usado em twitter:site (ex: "@seublog"). Deixe undefined se não tiver.
	twitterHandle: "@xth0w",
	profile: {
		name: "Thom",
		email: "hello@thom.wtf",
		github: "https://github.com/xth0w",
		avatar: "/avatar.png",
	},
};

export const socials: SocialLink[] = [
	{ name: "Twitter", url: "https://x.com/xth0w", icon: "simple-icons:x" },
	{ name: "Instagram", url: "https://instagram.com/xth0w", icon: "simple-icons:instagram" },
	{ name: "Reddit", url: "https://reddit.com/user/xth0w", icon: "simple-icons:reddit" },
	{ name: "guns.lol", url: "https://guns.lol/xth0w", icon: "lucide:link" },
	{ name: "Email", url: "mailto:hello@thom.wtf", icon: "lucide:mail" },
];

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
