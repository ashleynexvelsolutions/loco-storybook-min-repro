const path = require("path");

module.exports = {
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  babel: async (options) => {
    return options;
  },
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
  ],
  core: {
    builder: "webpack5",
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  layout: "fullscreen",
  webpackFinal: async (config) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    rules.push({
      test: /\.svg$/,
      use: [
        "@svgr/webpack",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
    });
    config.resolve.mainFields = ["browser", "module", "main"];
    config.resolve.fallback = {
      fs: false,
      assert: false,
      buffer: false,
      child_process: false,
      console: false,
      constants: false,
      crypto: false,
      domain: false,
      events: false,
      http: false,
      https: false,
      os: false,
      path: false,
      punycode: false,
      process: false,
      querystring: false,
      stream: false,
      string_decoder: false,
      sys: false,
      timers: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    };
    return config;
  },
  framework: "@storybook/react",
};
