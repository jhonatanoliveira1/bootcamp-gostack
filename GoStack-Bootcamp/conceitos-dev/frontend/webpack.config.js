const path = require('path'); // utilizado o path para não dar problemas com o caminho

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //procura arquivos que termina com .js
        exclude: /node_modules/, //exclui a pasta node_modules
        use: {
          loader: 'babel-loader', //converte para babel
        }
      }
    ]
  },
}; 