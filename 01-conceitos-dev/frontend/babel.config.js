module.exports = {
  presets: [
    '@babel/preset-env', //Converte o código do JavaScript "moderno" para um antigo, baseado no ambienta da nossa aplicação.
    '@babel/preset-react' //Adiciona as funcioladidas do React na conversão para que o brower entenda.
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};