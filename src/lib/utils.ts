/**
 * Get the asset path with the correct base path for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/New-portfolio' : '';
    return `${basePath}${path}`;
}
