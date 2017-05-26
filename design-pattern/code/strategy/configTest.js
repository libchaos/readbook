const Config = require('./config')
const strategies = require('./strategies')

const jsonConf = new Config(strategies.json)

jsonConf.read('sampels/conf.json')
jsonConf.set('book.nodejs', 'design patterns')
jsonConf.save('sampels/conf_mod.json')

const iniConfig = new Config(strategies.ini)

iniConfig.read('sampels/conf.ini')
iniConfig.set('book.nodejs', 'design patterns')
iniConfig.save('sampels/conf_mod.ini')