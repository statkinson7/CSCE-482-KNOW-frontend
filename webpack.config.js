// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  // Enable sourcemaps for debugging webpack's output
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },

  output: {
      filename: 'main.js',
      path: __dirname + '/static',
      // NOTE: Change this if you want to change the function
      library: 'render',
      libraryTarget: 'umd',
      // This makes referencing the library name perform the default export of index.tsx,
      // which is renderKnowledgePanel
      libraryExport: 'default',
      umdNamedDefine: true,
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  // When importing a module whose path matches one of the following, just assume a corresponding
  // global variable exists and use that instead. This is important b/c it allows us to avoid
  // bundling all of our dependencies, which allows browsers to cache those libraries between builds
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
