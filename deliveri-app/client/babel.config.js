
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./app",
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".json",
          ],
        },
      ],
      ['inline-dotenv']
    ],
  };
};

