import { storyblokEditable } from '@storyblok/react/rsc';
import { assetUrl, assetAlt } from '@/lib/assets';

function monogram(name = '') {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (!parts.length) return '?';
	if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
	return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ReviewItem({ blok }) {
	const src = assetUrl(blok.portrait);
	const rating = Number(blok.rating) || 0;

	return (
		<article {...storyblokEditable(blok)} className="review-item">
			<div className="review-item__head">
				{src ? (
					<img
						className="review-item__avatar"
						src={src}
						alt={assetAlt(blok.portrait, blok.name || '')}
						width={48}
						height={48}
					/>
				) : (
					<span className="review-item__mono" aria-hidden="true">
						{monogram(blok.name)}
					</span>
				)}
				<div>
					{blok.name ? <p className="review-item__name">{blok.name}</p> : null}
					{blok.city ? <p className="caption">{blok.city}</p> : null}
				</div>
			</div>
			{rating > 0 ? (
				<p className="review-item__stars" aria-label={`${rating} out of 5 stars`}>
					{'★'.repeat(Math.min(5, Math.round(rating)))}
					<span className="review-item__stars-empty">
						{'★'.repeat(Math.max(0, 5 - Math.round(rating)))}
					</span>
				</p>
			) : null}
			{blok.quote ? <p className="review-item__quote">{blok.quote}</p> : null}
		</article>
	);
}
