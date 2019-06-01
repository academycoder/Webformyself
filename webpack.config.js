const path = require('path'); //Втроеный модуль nodejs, который мы получаем с помощью конструкции require. Данный модуль позволяет работать с путями, упрощает работу
const HTMLPLugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Название того файла, который должен получится
    path: path.resolve(__dirname, 'dist')// Путь, куда мы должны положить все исходные статические файлы, __dirname - это системная переменная, которая указывает ткущую папку, а второй параметр (дист) - куда нужно все это сложить.
  },
  plugins:[ 
    new HTMLPLugin({ // Плагин, позволяет компилировать файлы HTML с автоматическим добавлением ссылок на js файлы или css
      filename: 'index.html', // Название файла, которое мы получим на выходе в папку dist
      template: './src/index.html' //Указываем шаблон, который берем за основу
    }),
  ]
}