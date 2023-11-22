module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 	
    '@babel/preset-react',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
    
    plugins: [
    'react-native-reanimated/plugin',
    ],
  }
}