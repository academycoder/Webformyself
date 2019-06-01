import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'
import './css/index.css'// Импортирую css файлы
import './less/index.less'// Импортирую less файлы
import './scss/index.scss'// Импортирую scss файлы

console.log('Config key: ', config.key)

const service = new AppService('Hello WOrld!')
service.log()