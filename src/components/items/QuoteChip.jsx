import { storyblokEditable } from '@storyblok/react/rsc';

export default function QuoteChip({ blok }) {
	return (
		<figure {...storyblokEditable(blok)} className="quote-chip">
			<blockquote className="quote-chip__text">
				{blok.quote || ''}
			</blockquote>
			<figcaption className="caption">
				{[blok.name, blok.city].filter(Boolean).join(' · ')}
			</figcaption>
		</figure>
	);
}
