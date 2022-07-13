const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@middleware-apollo-client": path.resolve(
        __dirname,
        "../src/libs/middleware-apollo-client/index.ts"
      ),
      "@data-pokemon": path.resolve(
        __dirname,
        "../src/libs/data-pokemon/index.ts"
      ),
      "@page-search-pokemon": path.resolve(
        __dirname,
        "../src/libs/page-search-pokemon/index.ts"
      ),
    };
    return config;
  },
};
