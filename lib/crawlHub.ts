import { AREA_SLUGS, areaPath } from '@/lib/areaSlugs';
import { getAreaData } from '@/lib/getAreaData';

/** Central HTML hub — every area page should link here (≤3 clicks from homepage). */
export const SERVICE_AREAS_HUB = '/service-areas/';
export const ROOF_SERVICE_AREAS_HUB = '/roof-cleaning-service-areas/';

export function areaLinkLabel(slug: string): string {
  return getAreaData(slug)?.name ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/** Major cities shown in footer + homepage strip (matches footer list). */
export const FOOTER_HUB_SLUGS = [
  'birmingham',
  'coventry',
  'wolverhampton',
  'dudley',
  'sandwell',
  'solihull',
  'walsall',
  'worcester',
  'redditch',
  'bromsgrove',
  'kidderminster',
  'malvern',
  'evesham',
  'droitwich-spa',
] as const;

/** Extra Birmingham neighbourhoods on homepage (in addition to hub). */
export const HOMEPAGE_BIRMINGHAM_SLUGS = [
  'sutton-coldfield',
  'moseley',
  'kings-heath',
  'harborne',
  'edgbaston',
  'erdington',
  'hall-green',
  'northfield',
  'yardley',
  'small-heath',
  'sparkhill',
  'handsworth',
  'perry-barr',
  'kingstanding',
  'selly-oak',
  'stechford',
  'shirley',
  'acocks-green',
  'bartley-green',
  'kings-norton',
  'quinton',
  'boldmere',
  'castle-bromwich',
  'marston-green',
] as const;

export const HOMEPAGE_AREA_LINKS = [
  ...FOOTER_HUB_SLUGS,
  ...HOMEPAGE_BIRMINGHAM_SLUGS,
]
  .filter((slug, i, arr) => arr.indexOf(slug) === i && AREA_SLUGS.includes(slug))
  .map((slug) => ({ slug, href: areaPath(slug), label: areaLinkLabel(slug) }));

/** Extra suburbs linked from homepage + top service pages (PageRank to deep URLs). */
export const AUTHORITY_PAGE_EXTRA_SLUGS = [
  'aston',
  'saltley',
  'sparkbrook',
  'handsworth',
  'winson-green',
  'bordesley-green',
  'nechells',
  'digbeth',
  'washwood-heath',
  'hockley',
  'lozells',
  'ladywood',
  'jewellery-quarter',
  'edgbaston',
  'harborne',
  'cotteridge',
  'kings-norton',
  'longbridge',
  'northfield',
  'rubery',
  'streetly',
  'four-oaks',
  'walmley',
  'castle-vale',
  'great-barr',
  'west-bromwich',
  'smethwick',
  'oldbury',
  'wednesbury',
  'willenhall',
  'bilston',
  'tettenhall',
  'penn',
  'finham',
  'tile-hill',
  'cannock',
  'lichfield',
  'tamworth',
  'stourbridge',
  'halesowen',
] as const;

/** Links on homepage, /services/, /pricing/, and service detail pages. */
export const TOP_SERVICE_PAGE_AREA_LINKS = [
  ...FOOTER_HUB_SLUGS,
  ...HOMEPAGE_BIRMINGHAM_SLUGS,
  ...AUTHORITY_PAGE_EXTRA_SLUGS,
]
  .filter((slug, i, arr) => arr.indexOf(slug) === i && AREA_SLUGS.includes(slug))
  .map((slug) => ({ slug, href: areaPath(slug), label: areaLinkLabel(slug) }));
