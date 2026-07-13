export interface SocialLink {
	/** Display name / aria-label. */
	name: string;
	/** Full URL (e.g. "https://x.com/user" or "mailto:user@example.com"). */
	url: string;
	/** Iconify icon name, e.g. "simple-icons:x". */
	icon: string;
}

export interface ProfileConfig {
	/** Author display name; used in bylines, schema, OG images. */
	name: string;
	/** Contact email shown in About-page socials. Omit to hide. */
	email?: string;
	/** Profile URL on GitHub. Leave empty to hide. */
	github?: string;
	/** Twitter / X profile URL. Leave empty to hide. */
	twitter?: string;
	/** Instagram profile URL. Leave empty to hide. */
	instagram?: string;
	/** Reddit profile URL. Leave empty to hide. */
	reddit?: string;
	/** guns.lol profile URL. Leave empty to hide. */
	guns?: string;
	alumni?: string;
	/** Absolute avatar/photo URL used in schema markup. */
	avatar?: string;
}

export interface SiteConfig {
	/** Site-wide display name; fallback for profile.name. */
	author: string;
	/** Canonical site URL, used to build absolute URLs (OG, canonical, RSS). */
	siteUrl: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
	description: string;
	lang: string;
	ogLocale: string;
	sortPostsByUpdatedDate: boolean;
	title: string;
	/** Personal info for About page, schema, byline. */
	profile?: ProfileConfig;
	/** Default OG image path (e.g. "/default-og.png"). Used as fallback when no page-specific ogImage is set. */
	defaultOgImage?: string;
	/** X/Twitter handle for twitter:site meta tag, e.g. "@seublog". Omit to skip the tag. */
	twitterHandle?: string;
	hideThemeCredit?: boolean;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
	noindex?: boolean;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
