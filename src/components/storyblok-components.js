import LandingPage from '@/components/blocks/LandingPage';
import TeaserBar from '@/components/blocks/TeaserBar';
import Hero from '@/components/blocks/Hero';
import SocialProof from '@/components/blocks/SocialProof';
import Construction from '@/components/blocks/Construction';
import Benefits from '@/components/blocks/Benefits';
import Inbox from '@/components/blocks/Inbox';
import Finishes from '@/components/blocks/Finishes';
import Reviews from '@/components/blocks/Reviews';
import Specs from '@/components/blocks/Specs';
import Waitlist from '@/components/blocks/Waitlist';
import SiteFooter from '@/components/blocks/SiteFooter';
import QuoteChip from '@/components/items/QuoteChip';
import BenefitItem from '@/components/items/BenefitItem';
import InboxItem from '@/components/items/InboxItem';
import FinishItem from '@/components/items/FinishItem';
import ReviewItem from '@/components/items/ReviewItem';
import SpecRow from '@/components/items/SpecRow';
import LinkItem from '@/components/items/LinkItem';
import LayerLabel from '@/components/items/LayerLabel';

/** Pure Storyblok component map — no storyblokInit side effects. */
export const components = {
	landing_page: LandingPage,
	teaser_bar: TeaserBar,
	hero: Hero,
	social_proof: SocialProof,
	construction: Construction,
	benefits: Benefits,
	inbox: Inbox,
	finishes: Finishes,
	reviews: Reviews,
	specs: Specs,
	waitlist: Waitlist,
	site_footer: SiteFooter,
	quote_chip: QuoteChip,
	benefit_item: BenefitItem,
	inbox_item: InboxItem,
	finish_item: FinishItem,
	review_item: ReviewItem,
	spec_row: SpecRow,
	link_item: LinkItem,
	layer_label: LayerLabel,
};
