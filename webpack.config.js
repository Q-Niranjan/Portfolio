module.exports = {
  // ... existing config ...
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
