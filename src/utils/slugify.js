export function slugify(text) {
    return String(text)
        .toLowerCase()
        .replace(/&amp;/g, 'and')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export default slugify;
