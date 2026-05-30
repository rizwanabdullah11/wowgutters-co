/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wowgutters.co.uk',
  generateRobotsTxt: false,
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    const ACTIVE = [
      'birmingham',
      'solihull',
      'wolverhampton',
      'coventry',
      'walsall',
      'dudley',
      'sandwell',
      'west-bromwich',
      'worcester',
      'worcestershire',
      'bromsgrove',
      'redditch',
      'kidderminster',
      'malvern',
      'evesham',
      'droitwich-spa',
      'stourbridge',
      'halesowen',
      'sutton-coldfield',
      'tamworth',
      'lichfield',
      'cannock',
      'westmidlands',
      'moseley',
      'harborne',
      'edgbaston',
      'kings-heath',
      'erdington',
      'selly-oak',
      'acocks-green',
      'perry-barr',
      'perry-common',
      'queslett',
      'quinton',
      'rednal',
      'rubery',
      'nechells',
      'new-oscott',
      'northfield',
      'hawkesley',
      'hay-mills',
      'highgate',
      'highters-heath',
      'hockley',
      'hodge-hill',
      'hollywood-birmingham',
      'jewellery-quarter',
      'five-ways',
      'four-oaks',
      'frankley',
      'garretts-green',
      'gravelly-hill',
      'great-barr',
      'hall-green',
      'balsall-heath',
      'bartley-green',
      'billesley',
      'birchfield',
      'boldmere',
      'bordesley-green',
      'bournbrook',
      'bournville',
      'browns-green',
      'california-birmingham',
      'castle-vale',
      'cotteridge',
      'digbeth',
      'druids-heath',
      'allens-cross',
      'alum-rock',
      'castle-bromwich',
      'chad-valley',
      'chemical-heath',
      'cofton-hackett',
      'fox-hollies',
      'gilbertstone',
      'glebe-farm',
      'hamstead',
      'hill-cross',
      'king-edward',
      'maney',
      'marston-green',
      'moor-green',
      'newtown',
      'old-oscott',
      'pype-hayes',
      'roughley',
      'short-heath',
      'stockland-green',
      'tyburn',
      'walmley',
      'weoley-hill',
      'world-s-end',
    ]

    // Exclude non-active location pages
    const isLocPage = path.includes('/gutter-cleaning-') ||
                      path.includes('/roof-cleaning-')
    
    if (isLocPage) {
      const isActive = ACTIVE.some(a => path.includes(a))
      if (!isActive) return null
    }

    // Exclude old ghost pages and duplicate URLs from sitemap
    const excludePaths = [
      '/contact-us',
      '/about-us',
      '/gutters-cleaning',
      '/hot-wash',
      '/conservatory-cleaning',
      '/commercial',
      '/help/inspect',
      '/help/unblock',
      '/help/repair',
      '/help/clean',
    ]
    
    if (excludePaths.some(excluded => path === excluded || path === excluded + '/')) {
      return null
    }

    // Priority overrides
    const high = [
      '/',
      '/gutter-cleaning-birmingham',
      '/help/unblock',
      '/help/clean'
    ]

    return {
      loc: path,
      changefreq: high.includes(path) ? 'weekly' : 'monthly',
      priority: high.includes(path) ? 1.0 :
                path.includes('/services/') ? 0.8 :
                path.includes('/gutter-cleaning-') ? 0.8 : 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}
