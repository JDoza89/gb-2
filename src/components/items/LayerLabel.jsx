import { storyblokEditable } from '@storyblok/react/rsc';

export default function LayerLabel({ blok }) {
	if (!blok.label) return null;
	return (
		<span {...storyblokEditable(blok)} className="layer-label">
			{blok.label}
		</span>
	);
}
