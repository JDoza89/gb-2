import { draftMode } from 'next/headers';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import { isLocale } from '@/lib/locales';
import { notFound } from 'next/navigation';

const DEFAULT_STORY = 'blok-clad';

export async function generateMetadata({ params }) {
	const { lang, slug } = await params;
	const fullSlug = (slug && slug.length ? slug.join('/') : DEFAULT_STORY);
	try {
		const story = await fetchStory(fullSlug, lang);
		const content = story?.content || {};
		return {
			title: content.seo_title || 'Blok Clad',
			description: content.seo_description || undefined,
			openGraph: content.og_image?.filename
				? { images: [content.og_image.filename] }
				: undefined,
		};
	} catch {
		return { title: 'Blok Clad' };
	}
}

async function fetchStory(storySlug, lang) {
	const { isEnabled } = await draftMode();
	const version =
		isEnabled || process.env.NODE_ENV !== 'production'
			? 'draft'
			: process.env.STORYBLOK_VERSION || 'published';

	const storyblokApi = getStoryblokApi();
	const sbParams = {
		version,
		...(lang && lang !== 'en' ? { language: lang } : {}),
	};
	const { data } = await storyblokApi.get(`cdn/stories/${storySlug}`, sbParams);
	return data.story;
}

export default async function LocalePage({ params }) {
	const { lang, slug } = await params;
	if (!isLocale(lang)) notFound();

	const fullSlug = slug && slug.length ? slug.join('/') : DEFAULT_STORY;

	try {
		const story = await fetchStory(fullSlug, lang);
		if (!story) notFound();
		return <StoryblokStory story={story} />;
	} catch (error) {
		console.error('Storyblok fetch failed', fullSlug, lang, error);
		notFound();
	}
}
