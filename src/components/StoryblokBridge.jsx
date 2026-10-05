'use client';

import { useEffect } from 'react';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { components } from '@/components/storyblok-components';

let initialized = false;

export default function StoryblokBridge({ children }) {
	useEffect(() => {
		if (initialized) return;
		initialized = true;
		storyblokInit({
			accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
			use: [apiPlugin],
			components,
			bridge: true,
			apiOptions: {
				region: process.env.STORYBLOK_REGION || 'us',
			},
		});
	}, []);

	return children;
}
