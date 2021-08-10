module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    [
      // '@babel/plugin-syntax-class-properties',
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};
