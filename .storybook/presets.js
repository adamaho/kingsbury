const path = require("path");

module.exports = [
  '@storybook/addon-docs/preset',
  {
    name: "@storybook/preset-typescript",
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
      },
      include: [
        path.resolve(__dirname, "../src"),
        path.resolve(__dirname, "./components")
      ]
    }
  }
];
