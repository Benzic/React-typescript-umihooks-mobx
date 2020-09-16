
const { POSTCSS_MODES, whenProd } = require("@craco/craco");
const CracoAliasPlugin = require("craco-alias");
const CracoAntDesignPlugin = require("craco-antd");
// 打包信息配置
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// webpack 进度条
const WebpackBar = require('webpackbar');
// 开启gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 压缩js
const TerserPlugin = require('terser-webpack-plugin');
// 分析打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const threadLoader = require('thread-loader');

const path = require("path");
const resolve = dir => path.join(__dirname, '..', dir);

const jsWorkerPool = {
  workers: 2,
  poolTimeout: 2000
};

threadLoader.warmup(jsWorkerPool, ['babel-loader']);

// 打包取消sourceMap
process.env.GENERATE_SOURCEMAP = "false";

// 覆盖默认配置
module.exports = {
  webpack: smp.wrap({
    configure: {
      /*在这里添加任何webpack配置选项: https://webpack.js.org/configuration */
      module: {
        rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'thread-loader',
              options: jsWorkerPool
            },
            'babel-loader?cacheDirectory'
          ]
        }]
      },
      resolve: {
        modules: [ // 指定以下目录寻找第三方模块，避免webpack往父级目录递归搜索
          resolve('src'),
          resolve('node_modules'),
        ],
        alias: {
          "@": resolve("src") // 缓存src目录为@符号，避免重复寻址
        }
      },
      optimization: {
        // 开发环境不压缩
        minimize: process.env.REACT_APP_ENV !== 'development' ? true : false,
        splitChunks: {
          chunks: 'all', // initial、async和all
          minSize: 30000, // 形成一个新代码块最小的体积
          maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
          maxInitialRequests: 3, // 最大初始化请求数
          automaticNameDelimiter: '~', // 打包分割符
          name: true,
          cacheGroups: {
            vendors: { // 基本框架
              chunks: 'all',
              test: /(react|react-dom|react-dom-router|babel-polyfill|mobx)/,
              priority: 100,
              name: 'vendors',
            },
            'async-commons': { // 其余异步加载包
              chunks: 'async',
              minChunks: 2,
              name: 'async-commons',
              priority: 90,
            },
            commons: { // 其余同步加载包
              chunks: 'all',
              minChunks: 2,
              name: 'commons',
              priority: 80,
            }
          }
        }
      },
    },
    plugins: [
      // webpack进度条
      new WebpackBar({ color: 'green', profile: true }),
      // 打包时，启动插件
      ...whenProd(() => [
        // 压缩js 同时删除console debug等
        new TerserPlugin({
          parallel: true, // 多线程
          terserOptions: {
            ie8: true,
            // 删除注释
            output: {
              comments: false
            },
            //删除console 和 debugger  删除警告
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          }
        }),
        // 开启gzip
        new CompressionWebpackPlugin({
          // 是否删除源文件，默认: false
          deleteOriginalAssets: false
        }),
        // 打包分析
        new BundleAnalyzerPlugin()
      ], [])
    ]
  }),
  style: {
    // 自适应方案
    postcss: {
      mode: POSTCSS_MODES.file
    }
  },
  plugins: [
    // antd 按需加载 less等配置
    {
      plugin: CracoAntDesignPlugin,
      options: {
        //  自定义主题
        customizeThemeLessPath: path.join(__dirname, "src/assets/styles/global.less")
      }
    },
    // 插件方式，设置别名  
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json"
      }
    },
  ],
  devServer: {
    proxy: {
      '/': {
        target: 'www.test.com', // 开发路由代理
        ws: false, // websocket
        changeOrigin: true, //是否跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {}
      }
    }
  }
};