'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleSwitch({ locales = [] }) {
	const pathname = usePathname() || '/en';
	const parts = pathname.split('/').filter(Boolean);
	const current = parts[0];
	const rest = parts.slice(1).join('/');

	return (
		<nav className="locale-switch" aria-label="Language">
			{locales.map((locale, index) => {
				const href = rest ? `/${locale}/${rest}` : `/${locale}`;
				const active = locale === current;
				return (
					<span key={locale}>
						{index > 0 ? <span aria-hidden="true"> | </span> : null}
						<Link
							href={href}
							hrefLang={locale}
							aria-current={active ? 'page' : undefined}
							className={active ? 'is-active' : undefined}
						>
							{locale}
						</Link>
					</span>
				);
			})}
		</nav>
	);
}
