// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  name:  String,
  email: String,
  
  info: {
    type: ObjectId,
    ref: 'user'
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

UserSchema.pre('save', (next) => {
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})

mongoose.model('User', UserSchema)