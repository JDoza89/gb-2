'use client';

import { useState } from 'react';

export default function WaitlistForm({
	emailPlaceholder,
	ctaLabel,
	finePrint,
	successMessage,
}) {
	const [email, setEmail] = useState('');
	const [done, setDone] = useState(false);

	function onSubmit(event) {
		event.preventDefault();
		if (!email.trim()) return;
		setDone(true);
	}

	if (done) {
		return (
			<p className="waitlist-form__success" role="status">
				{successMessage}
			</p>
		);
	}

	return (
		<form className="waitlist-form" onSubmit={onSubmit} noValidate>
			<label className="sr-only" htmlFor="waitlist-email">
				Email
			</label>
			<div className="waitlist-form__row">
				<input
					id="waitlist-email"
					name="email"
					type="email"
					autoComplete="email"
					required
					placeholder={emailPlaceholder}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className="btn" type="submit">
					{ctaLabel}
				</button>
			</div>
			{finePrint ? <p className="caption waitlist-form__fine">{finePrint}</p> : null}
		</form>
	);
}
