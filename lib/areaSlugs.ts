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
  'bearwood',
  'bell-green',
  'bentley',
  'bickenhill',
  'billesley',
  'bilston',
  'binley',
  'birchfield',
  'birmingham',
  'blackheath',
  'bloxwich',
  'boldmere',
  'bordesley',
  'bordesley-green',
  'bournbrook',
  'bournville',
  'brierley-hill',
  'bromford',
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
  'cheylesmore',
  'cofton-hackett',
  'compton',
  'coseley',
  'cotteridge',
  'coundon',
  'coventry',
  'cradley-heath',
  'cranmore',
  'darlaston',
  'derby',
  'dickens-heath',
  'digbeth',
  'dorridge',
  'droitwich-spa',
  'druids-heath',
  'duddeston',
  'dudley',
  'earlsdon',
  'edgbaston',
  'elmdon',
  'erdington',
  'ettingshall',
  'evesham',
  'fallings-park',
  'finchfield',
  'five-ways',
  'foleshill',
  'fordbridge',
  'four-oaks',
  'fox-hollies',
  'frankley',
  'garretts-green',
  'gilbertstone',
  'glebe-farm',
  'gornal',
  'gravelly-hill',
  'great-barr',
  'great-bridge',
  'green-lane',
  'halesowen',
  'hall-green',
  'hampton-in-arden',
  'hamstead',
  'handsworth',
  'handsworth-wood',
  'harborne',
  'hawkesley',
  'hay-mills',
  'heath-town',
  'highgate',
  'highters-heath',
  'hill-cross',
  'hillfield',
  'hockley',
  'hockley-heath',
  'hodge-hill',
  'holbrooks',
  'hollywood-birmingham',
  'jewellery-quarter',
  'keresley',
  'kidderminster',
  'king-edward',
  'kings-heath',
  'kings-norton',
  'kingshurst',
  'kingstanding',
  'kingswinford',
  'kitts-green',
  'knowle',
  'ladywood',
  'lea-hall',
  'lee-bank',
  'lichfield',
  'longbridge',
  'longford',
  'low-hill',
  'lozells',
  'lye',
  'malvern',
  'maney',
  'marston-green',
  'maypole',
  'mere-green',
  'meriden',
  'merry-hill-wolverhampton',
  'minworth',
  'monkspath',
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
  'oscott',
  'oxley',
  'parkfield',
  'pelsall',
  'penn',
  'pensnett',
  'perry-barr',
  'perry-common',
  'pleck',
  'pype-hayes',
  'quarry-bank',
  'queslett',
  'quinton',
  'radford',
  'redditch',
  'rednal',
  'rotton-park',
  'roughley',
  'rowley-regis',
  'rubery',
  'rushall',
  'saltley',
  'sandwell',
  'sedgley',
  'selly-oak',
  'selly-park',
  'shard-end',
  'sheldon',
  'shelfield',
  'shenley-fields',
  'shenley-green',
  'shirley',
  'short-heath',
  'silhill',
  'small-heath',
  'smethwick',
  'smiths-wood',
  'solihull',
  'solihull-lodge',
  'south-yardley',
  'sparkbrook',
  'sparkhill',
  'stechford',
  'stirchley',
  'stockland-green',
  'stoke',
  'stourbridge',
  'streetly',
  'summerfield',
  'sutton-coldfield',
  'tamworth',
  'tettenhall',
  'tidbury-green',
  'tile-cross',
  'tile-hill',
  'tipton',
  'tividale',
  'turves-green',
  'tyburn',
  'tyseley',
  'vauxhall',
  'walmley',
  'walsall',
  'walsgrave',
  'ward-end',
  'warley',
  'warstock',
  'washwood-heath',
  'wednesbury',
  'wednesfield',
  'weoley-castle',
  'weoley-hill',
  'west-bromwich',
  'west-heath',
  'westmidlands',
  'whitmore-reans',
  'willenhall',
  'winson-green',
  'witton',
  'wollaston',
  'wolverhampton',
  'worcester',
  'wordsley',
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

/** Path segment for gutter repair area pages: gutter-repair-{city}/ */
export function repairAreaSegment(slug: string): string {
  return `gutter-repair-${slug}/`;
}

/** Public SEO URL: /gutter-repair-{city}/ */
export function repairAreaPath(slug: string): string {
  return `/${repairAreaSegment(slug)}`;
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
