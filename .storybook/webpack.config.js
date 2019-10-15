const path = require("path");

module.exports = ({ config, mode }) => {
  console.log(__dirname);
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, "../src")
    ],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          reportFiles: ["../src"]
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config ;
};