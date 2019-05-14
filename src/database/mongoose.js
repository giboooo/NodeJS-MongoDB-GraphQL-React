import mongoose from "mongoose"
import config from "../config/index"

require('../products/productSchema.js')
require('../suppliers/supllierSchema.js')
require('../users/userSchema.js')

const database = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath, {useNewUrlParser: true})

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