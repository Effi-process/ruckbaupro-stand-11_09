/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations for million-euro revenue goals
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['react-icons', 'lodash'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-testid$'] } : false,
    styledComponents: true,
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asbestsanierung-cdn.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    unoptimized: false,
  },
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.ahrefs.com https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://asbestsanierung-cdn.b-cdn.net data:; media-src 'self'; connect-src 'self' https://analytics.ahrefs.com https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()'
          },
        ],
      },
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(favicon.ico|robots.txt|sitemap.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      // Force www subdomain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rueckbaupro.de',
          },
        ],
        destination: 'https://www.rueckbaupro.de/:path*',
        permanent: true,
      },
    ]
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Aggressive production client-side optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 50000,
        cacheGroups: {
          // Critical components that should be bundled together
          critical: {
            test: /[\\/](Header|Footer|Icon)[\\/]/,
            name: 'critical',
            priority: 30,
            chunks: 'all',
            minSize: 0,
          },
          // Calculator as separate chunk for lazy loading
          calculator: {
            test: /[\\/](PremiumCalculator|Calculator)[\\/]/,
            name: 'calculator',
            priority: 25,
            chunks: 'async',
          },
          // Heavy components for lazy loading
          heavy: {
            test: /[\\/](EnhancedHeroSection|ConversionOptimizer|AIChatbot)[\\/]/,
            name: 'heavy-components',
            priority: 20,
            chunks: 'async',
          },
          // React and core libraries
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'framework',
            priority: 40,
            chunks: 'all',
            enforce: true,
          },
          // Other vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
            maxSize: 100000,
          },
          // Common components
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            enforce: true,
            maxSize: 50000,
          },
        },
      };
      
      // Tree shaking optimizations
      config.optimization.usedExports = true;
      config.optimization.providedExports = true;
      config.optimization.sideEffects = false;
      
      // Enable aggressive module concatenation
      config.optimization.concatenateModules = true;
    }
    
    // Bundle analyzer in development
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    
    // Optimize bundle size
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    
    // Module resolution optimizations
    config.resolve.modules = ['node_modules'];
    config.resolve.symlinks = false;
    
    return config;
  },
  
  // CSRF Protection for API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
        has: [
          {
            type: 'header',
            key: 'content-type',
            value: 'application/json'
          }
        ]
      }
    ]
  },

  // Output optimization
  output: 'standalone',
  
  // Enable static optimization
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  
  // Compression
  compress: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Production source maps for debugging
  productionBrowserSourceMaps: false,
  
  // Static optimization
  generateBuildId: async () => {
    return 'asbest-premium-' + Date.now();
  },
}

module.exports = nextConfig