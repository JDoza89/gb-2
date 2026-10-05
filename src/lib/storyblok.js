import 'server-only';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { components } from '@/components/storyblok-components';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components,
	apiOptions: {
		region: process.env.STORYBLOK_REGION || 'us',
	},
});
