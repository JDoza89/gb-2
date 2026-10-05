import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { LOCALES } from '@/lib/locales';
import LocaleSwitch from '@/components/blocks/LocaleSwitch';

export default function SiteFooter({ blok }) {
	return (
		<footer
			{...storyblokEditable(blok)}
			className="site-footer"
			data-section="site_footer"
		>
			<div className="shell site-footer__inner">
				<p className="site-footer__mark">{blok.wordmark || 'Blok'}</p>
				<LocaleSwitch locales={LOCALES} />
				<nav className="site-footer__legal" aria-label="Legal">
					{(blok.legal_links || []).map((item) => (
						<StoryblokServerComponent blok={item} key={item._uid} />
					))}
				</nav>
			</div>
		</footer>
	);
}
