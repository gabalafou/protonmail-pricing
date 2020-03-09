console.debug('process.env.NODE_ENV =', process.env.NODE_ENV);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // On production (i.e., GitHub Pages), the site is served under /protonmail-pricing.
  // When developing, the site is served under /
  assetPrefix: isProd ? '/protonmail-pricing' : '',
};
