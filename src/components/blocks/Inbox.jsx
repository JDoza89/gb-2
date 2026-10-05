import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { assetUrl, assetAlt } from '@/lib/assets';

export default function Inbox({ blok }) {
	const src = assetUrl(blok.flatlay);

	return (
		<section
			{...storyblokEditable(blok)}
			className="section inbox"
			id="inbox"
			data-section="inbox"
			aria-labelledby={blok.title ? 'inbox-title' : undefined}
		>
			<div className="shell">
				{blok.title ? (
					<h2 className="h2" id="inbox-title">
						{blok.title}
					</h2>
				) : null}
				{blok.intro ? <p className="inbox__intro">{blok.intro}</p> : null}
			</div>
			{src ? (
				<div className="inbox__flatlay shell">
					<img
						src={src}
						alt={assetAlt(blok.flatlay, '')}
						width={1280}
						height={720}
					/>
				</div>
			) : null}
			<div className="shell">
				{(blok.items || []).length > 0 ? (
					<ul className="inbox__list">
						{(blok.items || []).map((item) => (
							<li key={item._uid}>
								<StoryblokServerComponent blok={item} />
							</li>
						))}
					</ul>
				) : null}
				{blok.pack_note ? <p className="caption inbox__note">{blok.pack_note}</p> : null}
			</div>
		</section>
	);
}
