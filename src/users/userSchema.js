const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    firstName: String,
    lastName: String
  },
  email: String,
  pwd: String,
  role: Number,
  siretNum: Number,
  address: String,
  payMethod :{
    name: String,
    cardNum: Number,
    expDate: Date
  },
  history: [{
    productId : Number,
    purchaseDate : Date,
    comments: {
      evaluations: Number,
      opinion: String
    }
  }]
})

module.exports = UserSchema