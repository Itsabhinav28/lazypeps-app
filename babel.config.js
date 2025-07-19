module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            "@assets": "./src/assets",
            "@features": "./src/features",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@service": "./src/service",
            "@state": "./src/state",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
