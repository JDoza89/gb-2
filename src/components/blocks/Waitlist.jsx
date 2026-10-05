import { storyblokEditable } from '@storyblok/react/rsc';
import { assetUrl, assetAlt } from '@/lib/assets';
import WaitlistForm from '@/components/blocks/WaitlistForm';

export default function Waitlist({ blok }) {
	const src = assetUrl(blok.background);

	return (
		<section
			{...storyblokEditable(blok)}
			className="section waitlist"
			id="waitlist"
			data-section="waitlist"
			aria-labelledby={blok.title ? 'waitlist-title' : undefined}
		>
			{src ? (
				<img
					className="waitlist__bg"
					src={src}
					alt=""
					aria-hidden="true"
					width={1280}
					height={720}
				/>
			) : null}
			<div className="waitlist__scrim" aria-hidden="true" />
			<div className="shell waitlist__inner">
				{blok.title ? (
					<h2 className="h2" id="waitlist-title">
						{blok.title}
					</h2>
				) : null}
				{blok.intro ? <p className="waitlist__intro">{blok.intro}</p> : null}
				<WaitlistForm
					emailPlaceholder={blok.email_placeholder || 'you@email.com'}
					ctaLabel={blok.cta_label || 'Join waitlist'}
					finePrint={blok.fine_print}
					successMessage={blok.success_message || "You're on the list."}
				/>
			</div>
		</section>
	);
}
