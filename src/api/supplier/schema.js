import mongoose from "mongoose"

const Schema = mongoose.Schema

const SupplierSchema = new Schema({
  name: String,
  email: String,
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
})

export default mongoose.model('Supplier', SupplierSchema)