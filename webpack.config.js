const path = require('path');

module.exports = {
  // モードの設定
  mode: 'development',

  // エントリーポイントの設定
  entry: `./dev/js/index.js`,

  // ファイルの出力設定
  output: {
    // 出力するファイル名
    filename: "index.js",

    //  出力先のパス
    path: path.join(__dirname, 'docs/src/js')
  },
  //  JSファイル圧縮
  optimization: {
    minimize: true
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    open: true,
    watchFiles: ["docs/*.html"],
    hot: true,
  }
};