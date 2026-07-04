type Node = {
	type: string;
	props: {
		children?: Node | Node[] | string | (Node | string)[];
		style?: Record<string, string | number>;
		tw?: string;
	};
};

/** Helper para criar elementos no formato esperado pelo @vercel/og, sem precisar de JSX. */
function h(
	type: string,
	props: { tw?: string; style?: Record<string, string | number> } = {},
	...children: (Node | string | false | null | undefined)[]
): Node {
	const flatChildren = children.filter(Boolean) as (Node | string)[];
	return {
		type,
		props: {
			...props,
			children: flatChildren.length === 1 ? flatChildren[0] : flatChildren,
		},
	};
}

const COLORS = {
	bg: "#1a1715",
	accent: "#c89761",
	title: "#fbf6ec",
	byline: "#a89c8a",
	host: "#6b5e4f",
	border: "#2c2723",
} as const;

const titleClass = (title: string) =>
	title.length > 90
		? "text-4xl leading-tight mb-10"
		: title.length > 70
			? "text-5xl leading-tight mb-10"
			: title.length > 50
				? "text-6xl leading-tight mb-10"
				: "text-7xl leading-tight mb-10";

export function OgImage(props: {
	eyebrow: string;
	title: string;
	byline: string;
	tagsLine: string;
	host: string;
}): Node {
	return h(
		"div",
		{
			tw: "flex flex-col w-full h-full px-20 py-16 relative",
			style: { backgroundColor: COLORS.bg, fontFamily: "Newsreader" },
		},
		h("div", {
			tw: "flex absolute",
			style: { top: 0, left: 0, right: 0, height: 6, backgroundColor: COLORS.accent },
		}),
		h(
			"div",
			{ tw: "flex items-center mb-10" },
			h("div", {
				tw: "flex mr-4",
				style: {
					width: 8,
					height: 8,
					borderRadius: 9999,
					backgroundColor: COLORS.accent,
				},
			}),
			h(
				"p",
				{
					tw: "text-2xl tracking-widest uppercase",
					style: { fontFamily: "JetBrains Mono", color: COLORS.accent },
				},
				props.eyebrow,
			),
		),
		h(
			"h1",
			{
				tw: titleClass(props.title),
				style: {
					color: COLORS.title,
					fontWeight: 600,
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: 3,
					overflow: "hidden",
				},
			},
			props.title,
		),
		props.byline &&
			h(
				"p",
				{
					tw: "text-2xl mb-4",
					style: { fontFamily: "JetBrains Mono", color: COLORS.byline },
				},
				props.byline,
			),
		props.tagsLine &&
			h(
				"p",
				{
					tw: "text-xl tracking-wider uppercase",
					style: { fontFamily: "JetBrains Mono", color: COLORS.accent },
				},
				props.tagsLine,
			),
		h("div", { tw: "flex flex-1" }),
		h(
			"div",
			{
				tw: "flex items-center justify-between w-full pt-6",
				style: { borderTop: `1px solid ${COLORS.border}` },
			},
			h(
				"p",
				{
					tw: "text-lg tracking-wide",
					style: { fontFamily: "JetBrains Mono", color: COLORS.host },
				},
				props.host,
			),
		),
	);
}
