import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Benefits({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="section benefits"
			data-section="benefits"
			aria-labelledby={blok.title ? 'benefits-title' : undefined}
		>
			<div className="shell">
				{blok.title ? (
					<h2 className="h2" id="benefits-title">
						{blok.title}
					</h2>
				) : null}
				<div className="benefits__list">
					{(blok.items || []).map((item, index) => (
						<div
							key={item._uid}
							className={`benefits__row${index === 1 ? ' benefits__row--stagger' : ''}`}
						>
							<StoryblokServerComponent blok={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
