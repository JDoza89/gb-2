import { storyblokEditable } from '@storyblok/react/rsc';

const ICONS = {
	heat: (
		<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
			<path
				d="M16 4c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	cooktop: (
		<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
			<rect
				x="4"
				y="8"
				width="24"
				height="16"
				rx="1"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<circle cx="11" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
			<circle cx="21" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	),
	rim: (
		<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
			<path
				d="M6 22c4-8 16-8 20 0"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path d="M10 10h12" fill="none" stroke="currentColor" strokeWidth="1.5" />
			<path d="M16 10v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	),
};

export default function BenefitItem({ blok }) {
	const icon = ICONS[blok.icon] || ICONS.heat;

	return (
		<article {...storyblokEditable(blok)} className="benefit-item">
			<div className="benefit-item__icon">{icon}</div>
			<div>
				{blok.title ? <h3 className="benefit-item__title">{blok.title}</h3> : null}
				{blok.body ? <p className="benefit-item__body">{blok.body}</p> : null}
			</div>
		</article>
	);
}
