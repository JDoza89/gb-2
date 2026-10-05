import { storyblokEditable } from '@storyblok/react/rsc';
import { resolveLink } from '@/lib/links';

export default function TeaserBar({ blok }) {
	const href = resolveLink(blok.cta_link) || '#waitlist';
	if (!blok.message && !blok.cta_label) return null;

	return (
		<div
			{...storyblokEditable(blok)}
			className="panel-band teaser-bar"
			data-section="teaser_bar"
		>
			<div className="shell teaser-bar__inner">
				{blok.message ? <p className="teaser-bar__msg">{blok.message}</p> : null}
				{blok.cta_label ? (
					<a className="btn-text" href={href}>
						{blok.cta_label}
					</a>
				) : null}
			</div>
		</div>
	);
}
