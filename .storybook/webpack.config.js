/**
 * Custom Webpack modifications
 *
 * {@link https://github.com/necolas/react-native-web/blob/5395a3e8bcd90800436da887753ecf951b458db4/docs/storybook/.storybook/webpack.config.js}
 */
const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType) => {
  const DEV = configType === 'DEVELOPMENT';

  storybookBaseConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.__REACT_NATIVE_DEBUG_ENABLED__': DEV
    })
  );

  storybookBaseConfig.resolve.alias = {
    'react-native': 'react-native-web'
  };

  return storybookBaseConfig;
};

