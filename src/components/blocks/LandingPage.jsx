import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function LandingPage({ blok }) {
	return (
		<main {...storyblokEditable(blok)}>
			{(blok.body || []).map((nested) => (
				<StoryblokServerComponent blok={nested} key={nested._uid} />
			))}
		</main>
	);
}
