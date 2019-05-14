import mongoose from "mongoose"
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  email: String,

})

mongoose.model('Product', ProductSchema)