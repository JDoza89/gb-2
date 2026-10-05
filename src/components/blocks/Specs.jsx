import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Specs({ blok }) {
	return (
		<section
			{...storyblokEditable(blok)}
			className="section specs"
			data-section="specs"
			aria-labelledby={blok.title ? 'specs-title' : undefined}
		>
			<div className="shell specs__grid">
				<div>
					{blok.title ? (
						<h2 className="h2" id="specs-title">
							{blok.title}
						</h2>
					) : null}
					<div className="specs__table" role="table" aria-label={blok.title || 'Specs'}>
						{(blok.rows || []).map((row) => (
							<StoryblokServerComponent blok={row} key={row._uid} />
						))}
					</div>
				</div>
				<div>
					{blok.care_title ? <h2 className="h2">{blok.care_title}</h2> : null}
					<div
						className="specs__table"
						role="table"
						aria-label={blok.care_title || 'Care and warranty'}
					>
						{(blok.care_rows || []).map((row) => (
							<StoryblokServerComponent blok={row} key={row._uid} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
