/** Kebab-case slugs for local landing pages: /gutter-cleaning-{slug}/ */
export const AREA_SLUGS: readonly string[] = [
  'acocks-green',
  'aldridge',
  'allens-cross',
  'allesley',
  'alum-rock',
  'amblecote',
  'aston',
  'balsall-common',
  'balsall-heath',
  'bartley-green',
  'billesley',
  'bilston',
  'binley',
  'birchfield',
  'birmingham',
  'blackheath',
  'bloxwich',
  'boldmere',
  'bordesley-green',
  'bournbrook',
  'bournville',
  'brierley-hill',
  'bromsgrove',
  'brownhills',
  'browns-green',
  'bushbury',
  'california-birmingham',
  'canley',
  'cannock',
  'castle-bromwich',
  'castle-vale',
  'chad-valley',
  'chelmsley-wood',
  'chemical-heath',
  'cofton-hackett',
  'coseley',
  'cotteridge',
  'coventry',
  'cradley-heath',
  'darlaston',
  'digbeth',
  'dorridge',
  'derby',
  'droitwich-spa',
  'druids-heath',
  'dudley',
  'earlsdon',
  'edgbaston',
  'erdington',
  'evesham',
  'five-ways',
  'foleshill',
  'four-oaks',
  'fox-hollies',
  'frankley',
  'garretts-green',
  'gilbertstone',
  'glebe-farm',
  'gornal',
  'gravelly-hill',
  'great-barr',
  'halesowen',
  'hall-green',
  'hampton-in-arden',
  'hamstead',
  'handsworth',
  'handsworth-wood',
  'harborne',
  'hawkesley',
  'hay-mills',
  'highgate',
  'highters-heath',
  'hill-cross',
  'hockley',
  'hockley-heath',
  'hodge-hill',
  'hollywood-birmingham',
  'jewellery-quarter',
  'kidderminster',
  'king-edward',
  'kings-heath',
  'kings-norton',
  'kingstanding',
  'kingswinford',
  'kitts-green',
  'knowle',
  'ladywood',
  'lee-bank',
  'lichfield',
  'longbridge',
  'lozells',
  'lye',
  'malvern',
  'maney',
  'marston-green',
  'mere-green',
  'meriden',
  'minworth',
  'moor-green',
  'moseley',
  'nechells',
  'netherton',
  'new-oscott',
  'newtown',
  'northfield',
  'old-oscott',
  'oldbury',
  'olton',
  'oxley',
  'pelsall',
  'penn',
  'perry-barr',
  'perry-common',
  'pype-hayes',
  'queslett',
  'quinton',
  'radford',
  'redditch',
  'rednal',
  'roughley',
  'rowley-regis',
  'rubery',
  'rushall',
  'saltley',
  'sandwell',
  'sedgley',
  'selly-oak',
  'shard-end',
  'sheldon',
  'shelfield',
  'shenley-fields',
  'shenley-green',
  'shirley',
  'short-heath',
  'small-heath',
  'smethwick',
  'solihull',
  'sparkbrook',
  'sparkhill',
  'stechford',
  'stirchley',
  'stockland-green',
  'stoke',
  'stourbridge',
  'streetly',
  'sutton-coldfield',
  'tamworth',
  'tettenhall',
  'tile-hill',
  'tipton',
  'turves-green',
  'tyburn',
  'tyseley',
  'walmley',
  'walsall',
  'ward-end',
  'washwood-heath',
  'wednesbury',
  'wednesfield',
  'weoley-castle',
  'weoley-hill',
  'west-bromwich',
  'west-heath',
  'westmidlands',
  'willenhall',
  'winson-green',
  'witton',
  'wolverhampton',
  'worcester',
  'world-s-end',
  'wyken',
  'wylde-green',
  'yardley',
  'yardley-wood',
] as const;

/** Path segment folder name for static export: gutter-cleaning-{city}/ */
export function areaSegment(slug: string): string {
  return `gutter-cleaning-${slug}/`;
}

/** Public SEO URL: /gutter-cleaning-{city}/ (single path segment after domain). */
export function areaPath(slug: string): string {
  return `/${areaSegment(slug)}`;
}

/** Path segment for roof cleaning area pages: roof-cleaning-{city}/ */
export function roofAreaSegment(slug: string): string {
  return `roof-cleaning-${slug}/`;
}

/** Public SEO URL: /roof-cleaning-{city}/ */
export function roofAreaPath(slug: string): string {
  return `/${roofAreaSegment(slug)}`;
}

/** Prefix from the current page to the static-export site root (./ or ../). */
export function siteRootRelativePrefix(): string {
  if (typeof window === 'undefined') {
    return '/';
  }

  const { protocol, pathname, href } = window.location;

  let normalizedPath = pathname;
  try {
    normalizedPath = decodeURIComponent(pathname);
  } catch {
    // keep pathname
  }

  if (/\/index\.html?$/i.test(normalizedPath)) {
    normalizedPath = normalizedPath.replace(/index\.html?$/i, '');
  } else if (/\.html?$/i.test(normalizedPath)) {
    normalizedPath = normalizedPath.slice(0, normalizedPath.lastIndexOf('/') + 1);
  }

  if (!normalizedPath.endsWith('/')) {
    normalizedPath += '/';
  }

  if (protocol === 'file:') {
    const outMatch = normalizedPath.match(/\/out\/(.*)$/i);
    if (outMatch) {
      const depth = outMatch[1].split('/').filter(Boolean).length;
      return depth === 0 ? './' : '../'.repeat(depth);
    }

    const baseHref = href.split(/[?#]/)[0];
    const dir = baseHref.slice(0, baseHref.lastIndexOf('/') + 1);
    const outIdx = dir.toLowerCase().lastIndexOf('/out/');
    if (outIdx !== -1) {
      const afterOut = dir.slice(outIdx + 5);
      const depth = afterOut.split('/').filter(Boolean).length;
      return depth === 0 ? './' : '../'.repeat(depth);
    }

    return './';
  }

  const depth = normalizedPath.split('/').filter(Boolean).length;
  return depth === 0 ? '/' : '../'.repeat(depth);
}

/**
 * URL for window.location navigation — works on http(s) and file:// static export.
 * Absolute /gutter-cleaning-{slug}/ breaks when opening out/index.html directly.
 */
export function areaNavigationUrl(slug: string): string {
  return `${siteRootRelativePrefix()}${areaSegment(slug)}`;
}
