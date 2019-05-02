import mongoose from 'mongoose'
import config from '../config/index.js'

require('../users/userSchema.js')
require('../products/productSchema.js')
require('../suppliers/supllierSchema.js')

const database = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath, {useMongoClient: true}) // 2nd params added

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('connected to mongodb', config.dbPath)
  })
}

database()