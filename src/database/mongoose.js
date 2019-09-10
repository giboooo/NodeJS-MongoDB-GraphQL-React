import mongoose from "mongoose"
import config from "../config/index"

import '../api/product/schema'
import '../api/supplier/schema'
import '../api/user/schema'

export default function (){
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath, {useNewUrlParser: true})

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  
  mongoose.connection.on('error', err => {
    console.log('mongodb error', err)
  })

  mongoose.connection.on('open', async () => {
    console.log('connected to mongodb', config.dbPath)
  })
}