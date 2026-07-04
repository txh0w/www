const railFormatter = new Intl.DateTimeFormat("pt-BR", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const stampFormatter = new Intl.DateTimeFormat("pt-BR", {
	month: "long",
	year: "numeric",
});

const bylineFormatter = new Intl.DateTimeFormat("pt-BR", {
	day: "numeric",
	month: "long",
	year: "numeric",
});

const eyebrowFormatter = new Intl.DateTimeFormat("pt-BR", {
	month: "long",
	year: "numeric",
});

/** Short rail date: `5 Mar 2026`. */
export function formatRailDate(date: Date): string {
	return railFormatter.format(date);
}

/** Featured-card stamp: `March 2026`. */
export function formatStampDate(date: Date): string {
	return stampFormatter.format(date);
}

/** Article byline date: `5 March 2026`. */
export function formatBylineDate(date: Date): string {
	return bylineFormatter.format(date);
}

/** Article eyebrow date: `March 2026`. */
export function formatEyebrowDate(date: Date): string {
	return eyebrowFormatter.format(date);
}
