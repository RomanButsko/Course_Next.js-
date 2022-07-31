/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
	images: {
		domains: ['http://www.w3.org/2000/svg']
	},
webpack(config, options) {
  config.module.rules.push({
    loader: '@svgr/webpack',
    issuer: /\.[jt]sx?$/,
    options: {
      prettier: false,
      svgo: true,
      svgoConfig: {
        plugins: [{
          name: 'preset-default',
          params: {
            override: {
              removeViewBox: false
            }
          }
        }]
      },
      titleProp: true,
    },
    test: /\.svg$/,
  });

  return config;
}
};


module.exports = nextConfig;
