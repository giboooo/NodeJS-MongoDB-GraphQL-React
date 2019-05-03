// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ProductSchema = new Schema({
  name:  String,
  price: Number,
  
  info: {
    type: ObjectId,
    ref: 'product'
  },
  
  meta: {
    createdAt:{
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

ProductSchema.pre('save', (next) => {
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})

mongoose.model('Product', ProductSchema)