
const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl( {
  output: 'standalone'
})

module.exports = nextConfig
