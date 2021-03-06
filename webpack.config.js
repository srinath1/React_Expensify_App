const path = require('path');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin')

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSxtract=new ExtractTextWebpackPlugin('styles.css')

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use:CSSxtract.extract({
            use:[
                {
loader:'css-loader',
options:{
  sourceMap:true
}

                },
              {

                loader:'sass-loader',
                options:{
                  sourceMap:true
                }
              }
            ]
        })
      }]
    },
    plugins:[
      CSSxtract

    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
