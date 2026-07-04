import JetBrainsMono from "@/assets/fonts/jetbrainsmono-regular.ttf";
import NewsreaderItalic from "@/assets/fonts/newsreader-italic.ttf";
import NewsreaderRegular from "@/assets/fonts/newsreader-regular.ttf";
import NewsreaderSemiBold from "@/assets/fonts/newsreader-semibold.ttf";
import { OgImage } from "@/components/og/OgImage";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site-config";
import { formatBylineDate, formatEyebrowDate } from "@/utils/date";
import { ImageResponse } from "@vercel/og";
import type { APIContext, InferGetStaticPropsType } from "astro";
import { render } from "astro:content";

const SEP = " · ";

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { pubDate, title, tags, readingTime } = context.props as Props;

	const date = new Date(pubDate);
	const authorName = siteConfig.profile?.name ?? siteConfig.author;
	const bylineParts = [
		authorName ? `By ${authorName}` : null,
		formatBylineDate(date),
		readingTime || null,
	].filter(Boolean) as string[];

	const cleanTags = (tags ?? []).map((t) => t.trim()).filter(Boolean);
	const host = context.site ? new URL(context.site).host : siteConfig.title;

	try {
		return new ImageResponse(
			// biome-ignore lint/suspicious/noExplicitAny: shape esperado pelo @vercel/og, sem tipos oficiais de JSX
			OgImage({
				eyebrow: `Posts${SEP}${formatEyebrowDate(date)}`,
				title,
				byline: bylineParts.join(SEP),
				tagsLine: cleanTags.join(SEP),
				host,
			}) as any,
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "Newsreader",
						data: Buffer.from(NewsreaderRegular),
						style: "normal",
						weight: 400,
					},
					{
						name: "Newsreader",
						data: Buffer.from(NewsreaderSemiBold),
						style: "normal",
						weight: 600,
					},
					{
						name: "Newsreader",
						data: Buffer.from(NewsreaderItalic),
						style: "italic",
						weight: 400,
					},
					{
						name: "JetBrains Mono",
						data: Buffer.from(JetBrainsMono),
						style: "normal",
						weight: 400,
					},
				],
				headers: {
					"Cache-Control": "public, max-age=31536000, immutable",
				},
			},
		);
	} catch (error) {
		console.error(`Failed to generate OG image for "${title}":`, error);
		return new Response("Failed to generate OG image", { status: 500 });
	}
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	const filtered = posts.filter(({ data }) => !data.ogImage);

	const items = await Promise.all(
		filtered.map(async (post) => {
			const { remarkPluginFrontmatter } = await render(post);
			const readingTime = (remarkPluginFrontmatter as { minutesRead?: string })?.minutesRead ?? "";

			return {
				params: { slug: `posts/${post.id}` },
				props: {
					pubDate: (post.data.updatedDate ?? post.data.publishDate).toISOString(),
					title: post.data.title,
					tags: post.data.tags ?? [],
					readingTime,
				},
			};
		}),
	);

	return items;
}
