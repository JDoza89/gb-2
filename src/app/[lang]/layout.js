import { notFound } from 'next/navigation';
import { isLocale, LOCALES } from '@/lib/locales';

export function generateStaticParams() {
	return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
	const { lang } = await params;
	if (!isLocale(lang)) notFound();
	return children;
}
