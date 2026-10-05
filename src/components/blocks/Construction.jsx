import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { assetUrl, assetAlt } from '@/lib/assets';

export default function Construction({ blok }) {
	const src = assetUrl(blok.diagram);

	return (
		<section
			{...storyblokEditable(blok)}
			className="section construction"
			data-section="construction"
			aria-labelledby={blok.title ? 'construction-title' : undefined}
		>
			<div className="shell">
				<hr className="hairline" />
				<div className="construction__grid">
					<div className="construction__copy">
						{blok.title ? (
							<h2 className="h2" id="construction-title">
								{blok.title}
							</h2>
						) : null}
						{blok.body ? <p className="construction__body">{blok.body}</p> : null}
						{(blok.layer_labels || []).length > 0 ? (
							<ul className="construction__layers">
								{(blok.layer_labels || []).map((item) => (
									<li key={item._uid}>
										<StoryblokServerComponent blok={item} />
									</li>
								))}
							</ul>
						) : null}
					</div>
					<div className="construction__media">
						{src ? (
							<img
								src={src}
								alt={assetAlt(blok.diagram, '')}
								width={800}
								height={600}
							/>
						) : (
							<div className="construction__placeholder" aria-hidden="true" />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
