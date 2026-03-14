/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://estalara.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/api/*',
    '/admin/*',
    '/dashboard/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  transform: async (config, path) => {
    if (path === '/') return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() }
    if (path === '/book-demo') return { loc: path, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() }
    if (path.match(/^\/(uk|us|pl|es|ae)\//)) return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() }
    if (path === '/knowledge' || path === '/knowledge/research' || path === '/knowledge/insights') return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() }
    if (path.startsWith('/knowledge/')) return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() }
    if (path.startsWith('/legal/')) return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/book-demo'),
    await config.transform(config, '/knowledge'),
    await config.transform(config, '/knowledge/research'),
    await config.transform(config, '/knowledge/insights'),
    await config.transform(config, '/knowledge/insights/live-presentations'),
    await config.transform(config, '/knowledge/insights/buyer-behavior'),
    await config.transform(config, '/knowledge/insights/digital-trust'),
    await config.transform(config, '/knowledge/insights/global-selling'),
    await config.transform(config, '/knowledge/insights/buyer-behavior/the-47-minute-window-when-buyer-interest-converts-to-intent'),
    await config.transform(config, '/uk/estate-agency-software'),
    await config.transform(config, '/us/real-estate-agency-software'),
    await config.transform(config, '/pl/dla-biur-nieruchomosci'),
    await config.transform(config, '/es/para-inmobiliarias'),
    await config.transform(config, '/ae/real-estate-agency-software-dubai'),
    await config.transform(config, '/legal/privacy-policy'),
    await config.transform(config, '/legal/terms-and-conditions'),
    await config.transform(config, '/legal/cookies-policy'),
    await config.transform(config, '/legal/platform-disclaimer'),
  ],
}
module.exports = config
