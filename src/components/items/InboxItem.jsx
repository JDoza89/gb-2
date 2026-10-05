import { storyblokEditable } from '@storyblok/react/rsc';

export default function InboxItem({ blok }) {
	if (!blok.label) return null;
	return (
		<span {...storyblokEditable(blok)}>
			{blok.label}
		</span>
	);
}
