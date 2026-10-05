import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Reviews({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="section reviews"
			data-section="reviews"
			aria-labelledby={blok.title ? 'reviews-title' : undefined}
		>
			<div className="shell">
				{blok.title ? (
					<h2 className="h2" id="reviews-title">
						{blok.title}
					</h2>
				) : null}
				<div className="reviews__grid">
					{(blok.items || []).map((item, index) => (
						<div
							key={item._uid}
							className={`reviews__col${index === 1 ? ' reviews__col--tall' : ''}`}
						>
							<StoryblokServerComponent blok={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
