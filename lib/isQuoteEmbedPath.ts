/** True when rendering the minimal /quote/embed/ route (shown inside StaticQuoteDialog iframe). */
export function isQuoteEmbedPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname === '/quote/embed' ||
    pathname === '/quote/embed/' ||
    pathname.startsWith('/quote/embed/')
  );
}
