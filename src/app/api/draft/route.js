import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get('slug') || 'en';
	const draft = await draftMode();
	draft.enable();
	redirect(`/${slug.replace(/^\//, '')}`);
}
