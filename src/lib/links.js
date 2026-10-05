export function resolveLink(link) {
	if (!link) return undefined;
	if (link.linktype === 'url' || link.linktype === 'asset') {
		return link.url || link.cached_url || undefined;
	}
	if (link.linktype === 'story') {
		const slug = link.cached_url || link.story?.full_slug;
		return slug ? `/${slug}`.replace(/\/+/g, '/') : undefined;
	}
	if (link.linktype === 'email') {
		return link.email ? `mailto:${link.email}` : undefined;
	}
	return link.cached_url || link.url || undefined;
}
