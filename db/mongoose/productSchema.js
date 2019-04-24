const mongoose = require('mongose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  clientId: Number,
  name: String,
  category: String,
  subCategory: String,
  Title: String,
  description: {
    summaryDescript: String,
    detailDescript: String,
  },
  price:{
    actualprice: Number,
    discount: Number,
  },
  validDate:{
    beginDate: Date,
    endDate: Date
  },
  history: [{
    userId: Number,
    purchaseDate: Date,
  }],
  comments: {
    evaluations: Number,
    opinion: String
  }
})