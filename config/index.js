require('dotenv').load()

const fs = require('fs')
const path = require('path')

const ENV = process.env.NODE_ENV || 'development'

const envConfig = require(path.join(__dirname, 'environements', ENV))
const dbConfig = loadDbConfig()

// module.exports
const config = Object.assign({
  [ENV]: true,
  env: ENV,
  db: dbConfig
}, envConfig)


function loadDbConfig() {
  // server connexion
  if(process.env.DATABASE_URL){
    return process.env.DATABASE_URL
  }
  
  // database connexion
  if(fs.existsSync(path.join(__dirname, './database.js'))) {
    return require('./database')[ENV]
  }
}

module.exports = config


/**
 * https://www.npmjs.com/package/dotenv
 */