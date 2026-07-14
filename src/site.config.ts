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
	defaultOgImage: "/avatar.webp",
	twitterHandle: "@txh0w",
	profile: {
		name: "Thom",
		email: "hello@thom.wtf",
		github: "https://github.com/txh0w",
		avatar: "/avatar.webp",
	},
};

export const socials: SocialLink[] = [
	{ name: "X", url: "https://x.com/txh0w", icon: "simple-icons:x" },
	{ name: "Instagram", url: "https://instagram.com/txh0w", icon: "ph:instagram-logo-duotone" },
	{ name: "Github", url: "https://github.com/txh0w", icon: "simple-icons:github" },
	{ name: "guns.lol", url: "https://guns.lol/txh0w", icon: "hugeicons:gun" },
	{ name: "Email", url: "mailto:hello@thom.wtf", icon: "si:mail-duotone" },
];

export const menuLinks: { path: string; title: string; icon: string }[] = [
	{
		path: "/",
		title: "Início",
		icon: "lucide:house",
	},
	{
		path: "/posts/",
		title: "Publicações",
		icon: "lucide:newspaper",
	},
	{
		path: "/about/",
		title: "Sobre",
		icon: "lucide:circle-user",
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
