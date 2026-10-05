export const LOCALES = ['en', 'es', 'ja'];
export const DEFAULT_LOCALE = 'en';

export function isLocale(value) {
	return LOCALES.includes(value);
}
