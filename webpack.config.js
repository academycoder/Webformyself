const path = require('path'); //Втроеный модуль nodejs, который мы получаем с помощью конструкции require. Данный модуль позволяет работать с путями, упрощает работу
const HTMLPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // Для сжатия CSS стилей
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Название того файла, который должен получится
    path: path.resolve(__dirname, 'dist')// Путь, куда мы должны положить все исходные статические файлы, __dirname - это системная переменная, которая указывает ткущую папку, а второй параметр (дист) - куда нужно все это сложить.
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}), // Для сжатия CSS стилей
      new UglifyJsPlugin() // для сжатия JS
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Указываем публичный путь до нашего финального проекта
    port: 4200
  },
  plugins:[ 
    new HTMLPLugin({ // Плагин, позволяет компилировать файлы HTML с автоматическим добавлением ссылок на js файлы или css
      filename: 'index.html', // Название файла, которое мы получим на выходе в папку dist
      template: './src/index.html' //Указываем шаблон, который берем за основу
    }),
    new MiniCssExtractPlugin({ // Берет мой CSS файл и компилирует его в отдельный файл style css
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Указываем расширение файла, на который будет влиять loader
        use: [MiniCssExtractPlugin.loader,'css-loader'] // Обязательно указываем первым style вначале, т.к вебпак считывает справа-налево, т.е. сначала он займется css, а потом style
      },
      {
        test: /\.less$/, // Указываем расширение файла, на который будет влиять loader
        use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader'] // Обязательно указываем первым style вначале, т.к вебпак считывает справа-налево, т.е. сначала он займется css, а потом style
      },
      { 
        test: /\.js$/,       //  Это настройка для babel. Она звучит так: берем файлы с раширение JS, не трогаем те, что в node modules и используем для работы babel-loader
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  }
}