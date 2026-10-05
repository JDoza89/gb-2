import { storyblokEditable } from '@storyblok/react/rsc';

export default function SpecRow({ blok }) {
	return (
		<div {...storyblokEditable(blok)} className="spec-row" role="row">
			<div className="spec-row__key" role="cell">
				{blok.key}
			</div>
			<div className="spec-row__value" role="cell">
				{blok.value}
			</div>
		</div>
	);
}
