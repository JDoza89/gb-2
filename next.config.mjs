/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
		STORYBLOK_REGION: process.env.STORYBLOK_REGION,
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'a.storyblok.com' },
			{ protocol: 'https', hostname: 'a-us.storyblok.com' },
		],
	},
};

export default nextConfig;
