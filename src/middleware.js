import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isLocale } from '@/lib/locales';

export function middleware(request) {
	const { pathname } = request.nextUrl;

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	if (pathname === '/') {
		const url = request.nextUrl.clone();
		url.pathname = `/${DEFAULT_LOCALE}`;
		return NextResponse.redirect(url);
	}

	const maybeLang = pathname.split('/').filter(Boolean)[0];
	if (!isLocale(maybeLang)) {
		const url = request.nextUrl.clone();
		url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
		return NextResponse.redirect(url);
	}

	const response = NextResponse.next();
	response.headers.set('x-locale', maybeLang);
	return response;
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
