// require('../config/ini')

const mongoose = require('mongoose')
const dbAddress = 'mongodb://localhost/db'

const initDB = () => {
  mongoose.connect( dbAddress, { useNewUrlParser: true })
  mongoose.connection.on( 'error', console.error.bind( console, 'connection error' ))
  mongoose.connection.once( 'open', () => { console.log( 'connected' )})
}
module.exports = initDB