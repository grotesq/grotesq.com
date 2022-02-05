const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  target: "serverless",
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                      attrs: 'fill'
                      }
                  }
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    // 절대경로
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});