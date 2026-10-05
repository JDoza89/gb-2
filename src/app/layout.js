import { headers } from 'next/headers';
import './globals.css';
import StoryblokBridge from '@/components/StoryblokBridge';

export const metadata = {
	title: 'Blok Clad',
	description: 'Tri-ply stainless cookware',
};

export default async function RootLayout({ children }) {
	const h = await headers();
	const lang = h.get('x-locale') || 'en';

	return (
		<html lang={lang} suppressHydrationWarning>
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<StoryblokBridge>{children}</StoryblokBridge>
			</body>
		</html>
	);
}
