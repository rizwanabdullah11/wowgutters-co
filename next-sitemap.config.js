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
      'west-midlands',
      'moseley',
      'harborne',
      'edgbaston',
      'kings-heath',
      'erdington',
      'selly-oak',
      'northfield',
      'acocks-green',
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
      '/services/gutter-cleaning',
      '/services/roof-cleaning'
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
