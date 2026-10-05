import { storyblokEditable } from '@storyblok/react/rsc';
import { assetUrl, assetAlt } from '@/lib/assets';
import { resolveLink } from '@/lib/links';

export default function Hero({ blok }) {
	const src = assetUrl(blok.image);
	const ctaHref = resolveLink(blok.cta_link) || '#waitlist';
	const secondaryHref = resolveLink(blok.secondary_link) || '#inbox';

	return (
		<section
			{...storyblokEditable(blok)}
			className="hero"
			data-section="hero"
			aria-label="Hero"
		>
			{src ? (
				<img
					className="hero__image"
					src={src}
					alt={assetAlt(blok.image, '')}
					width={1280}
					height={720}
					fetchPriority="high"
				/>
			) : (
				<div className="hero__image hero__image--empty" aria-hidden="true" />
			)}
			<div className="hero__veil" aria-hidden="true" />
			<div className="shell hero__copy">
				{blok.headline ? <h1 className="h1 hero__fade">{blok.headline}</h1> : null}
				{blok.subcopy ? <p className="hero__sub hero__fade">{blok.subcopy}</p> : null}
				<div className="hero__actions hero__fade">
					{blok.cta_label ? (
						<a className="btn" href={ctaHref}>
							{blok.cta_label}
						</a>
					) : null}
					{blok.secondary_label ? (
						<a className="btn-text" href={secondaryHref}>
							{blok.secondary_label}
						</a>
					) : null}
				</div>
				{blok.price_whisper ? (
					<p className="caption hero__whisper hero__fade">{blok.price_whisper}</p>
				) : null}
				{blok.trust_line ? (
					<p className="caption hero__trust hero__fade">{blok.trust_line}</p>
				) : null}
			</div>
		</section>
	);
}
