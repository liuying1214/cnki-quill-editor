const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const svgRules = {
  test: /\.svg$/,
  include: [path.resolve(__dirname, 'src/quill/assets/icons')],
  use: [
    {
      loader: 'html-loader',
      options: {
        minimize: true,
      },
    },
  ],
}
const stylRules = {
  test: /\.styl$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
};
const cssRules = {
  test: /\.css$/,
  use: ['style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: 'global',
      }
    }
  ]
};
const tsRules = {
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          declaration: false,
          module: 'es6',
          sourceMap: true,
          target: 'es6',
        },
        transpileOnly: true,
      },
    },
  ],
};


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 开启开发服务器
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    port: 3000, // 端口号
    quiet: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' })
  ],
  resolve: {
    alias: {
      '@parchment': path.resolve(
        __dirname,
        'src/parchment/parchment',
      ),
    },
    extensions: ['.js', '.styl', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [],
        loader: 'babel-loader'
      },
      stylRules,
      svgRules,
      tsRules,
      cssRules

    ]
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       priority: -10,
    //       test: /[\\/]node_modules[\\/]/
    //     }
    //   },

    //   chunks: 'async',
    //   minChunks: 1,
    //   minSize: 30000,
    //   name: true
    // }
  }
}
