import mongoose from "mongoose"

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  price: Number,
  supplierId: String,
})

export default mongoose.model('Product', ProductSchema)