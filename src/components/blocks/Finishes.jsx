import { storyblokEditable } from '@storyblok/react/rsc';
import FinishPicker from '@/components/blocks/FinishPicker';

export default function Finishes({ blok }) {
	const items = blok.items || [];

	return (
		<section
			{...storyblokEditable(blok)}
			className="section finishes"
			data-section="finishes"
			aria-labelledby={blok.title ? 'finishes-title' : undefined}
		>
			<div className="shell">
				{blok.title ? (
					<h2 className="h2" id="finishes-title">
						{blok.title}
					</h2>
				) : null}
				<FinishPicker
					items={items}
					defaultFinish={blok.default_finish || 'brushed_steel'}
				/>
				{blok.footnote ? <p className="caption finishes__note">{blok.footnote}</p> : null}
			</div>
		</section>
	);
}
