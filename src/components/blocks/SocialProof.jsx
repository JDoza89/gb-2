import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function SocialProof({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="panel-band section social-proof"
			data-section="social_proof"
			aria-label="Social proof"
		>
			<div className="shell social-proof__row">
				{blok.rating_label ? (
					<p className="social-proof__rating">
						<span className="social-proof__stars" aria-hidden="true">
							★★★★★
						</span>
						{blok.rating_label}
					</p>
				) : null}
				<div className="social-proof__chips">
					{(blok.quotes || []).map((item) => (
						<StoryblokServerComponent blok={item} key={item._uid} />
					))}
				</div>
			</div>
		</section>
	);
}
