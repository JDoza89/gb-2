export function assetUrl(asset) {
	if (!asset?.filename) return undefined;
	return asset.filename.startsWith('//')
		? `https:${asset.filename}`
		: asset.filename;
}

export function assetAlt(asset, fallback = '') {
	return asset?.alt || asset?.title || fallback;
}
