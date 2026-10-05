'use client';

import { useMemo, useState } from 'react';
import { assetUrl, assetAlt } from '@/lib/assets';

export default function FinishPicker({ items = [], defaultFinish }) {
	const initial =
		items.find((i) => i.key === defaultFinish)?.key || items[0]?.key || '';
	const [active, setActive] = useState(initial);

	const selected = useMemo(
		() => items.find((i) => i.key === active) || items[0],
		[items, active],
	);

	const src = assetUrl(selected?.image);

	if (!items.length) return null;

	return (
		<div className="finish-picker">
			<ul className="finish-picker__swatches" role="list">
				{items.map((item) => {
					const isActive = item.key === selected?.key;
					return (
						<li key={item._uid}>
							<button
								type="button"
								className={`finish-picker__swatch${isActive ? ' is-active' : ''}`}
								aria-pressed={isActive}
								onClick={() => setActive(item.key)}
							>
								<span
									className={`finish-picker__dot finish-picker__dot--${item.key || 'brushed_steel'}`}
									aria-hidden="true"
								/>
								<span className="finish-picker__meta">
									<span className="finish-picker__name">{item.name || item.key}</span>
									{item.price ? (
										<span className="finish-picker__price">{item.price}</span>
									) : null}
								</span>
							</button>
							{isActive && item.care_note ? (
								<p className="caption finish-picker__care">{item.care_note}</p>
							) : null}
						</li>
					);
				})}
			</ul>
			<div className="finish-picker__stage">
				{src ? (
					<img
						key={src}
						src={src}
						alt={assetAlt(selected?.image, selected?.name || '')}
						width={900}
						height={900}
						className="finish-picker__img"
					/>
				) : (
					<div className="finish-picker__empty" aria-hidden="true" />
				)}
			</div>
		</div>
	);
}
