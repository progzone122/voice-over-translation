export default {
  resolve: {
    extensions: [".js"],
  },
  performance: {
    hints: "error",
    maxEntrypointSize: 2000 * 10 ** 3,
    maxAssetSize: 2000 * 10 ** 3,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
