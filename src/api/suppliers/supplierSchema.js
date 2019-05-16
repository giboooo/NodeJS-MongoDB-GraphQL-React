import mongoose from "mongoose"

const Schema = mongoose.Schema

const SupplierSchema = new Schema({
  name: String,
  email: String,
})

export default mongoose.model('Supplier', SupplierSchema)