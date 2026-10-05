import { storyblokEditable } from '@storyblok/react/rsc';
import { resolveLink } from '@/lib/links';

export default function LinkItem({ blok }) {
	const href = resolveLink(blok.link) || '#';
	if (!blok.label) return null;
	return (
		<a {...storyblokEditable(blok)} href={href} className="link-item">
			{blok.label}
		</a>
	);
}
