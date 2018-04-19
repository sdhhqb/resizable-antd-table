var webpack = require("webpack");
var path = require("path");

var config = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'resizable-antd-table.js',
    library: 'ResizableAntdTable',
    libraryTarget: 'umd',
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'antd': {
      root: 'antd',
      commonjs2: 'antd',
      commonjs: 'antd',
      amd: 'antd',
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  mode: 'production',


  plugins: [

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ],
};

var env = process.env.NODE_ENV;
console.log("node env: \x1b[32m" + env + "\x1b[0m");

module.exports = config;