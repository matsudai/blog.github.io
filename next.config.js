let nextConfig = {
  // refs: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Note: we provide webpack above so you should not `require` it
  //   // Perform customizations to webpack config
  //   config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
  //   // Important: return the modified config
  //   return config;
  // },

  // // tsx、mdxファイルからページ生成する。
  // pageExtensions: ['tsx', 'mdx']
  exportTrailingSlash: true
};

// mdxの推奨設定を読み込む。
const withMDX = require('@next/mdx')();

// 他の設定とマージする。
nextConfig = withMDX(nextConfig);

module.exports = nextConfig;
