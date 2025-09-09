// Bundle analyzer configuration for revenue optimization
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
          generateStatsFile: true,
          statsFilename: `stats-${isServer ? 'server' : 'client'}.json`,
          reportFilename: `report-${isServer ? 'server' : 'client'}.html`
        })
      );
    }

    // Performance optimizations
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // Vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          // Critical components
          critical: {
            test: /[\\/](Header|Footer|Calculator)[\\/]/,
            name: 'critical',
            priority: 20,
            chunks: 'all',
          },
          // Common components
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };

    return config;
  },
};