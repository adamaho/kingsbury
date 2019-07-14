const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../.storybook")
    ],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          reportFiles: ["../src"]
        }
      },
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config ;
};