module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    "react-native-reanimated/plugin",
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // This has to be mirrored in tsconfig.json
          '@src': './src',
          '@components': './src/components',
          '@common': './src/common',
          '@config': './src/config',
          '@constant': './src/constant',
          '@container': './src/container',
          '@navigator': './src/navigator',
          '@redux': './src/redux',
          '@graphQL': './src/graphQL',
          '@type': './src/type',
        },
      },
    ],
  ],
};
