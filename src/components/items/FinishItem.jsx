import { storyblokEditable } from '@storyblok/react/rsc';

/** Registered for Visual Editor; Finishes uses FinishPicker for interactive UI. */
export default function FinishItem({ blok }) {
	return (
		<div {...storyblokEditable(blok)} className="finish-item-fallback">
			<strong>{blok.name || blok.key}</strong>
			{blok.price ? <span> · {blok.price}</span> : null}
		</div>
	);
}
