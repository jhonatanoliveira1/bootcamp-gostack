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
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, //pega o css interpretado e injeta dentro do html
          { loader: 'css-loader' }, //ler e interpreta arquivos css 
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
}; 