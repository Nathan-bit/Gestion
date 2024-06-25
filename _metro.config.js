// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-dotenv')
    },
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
    }
  };
})();
