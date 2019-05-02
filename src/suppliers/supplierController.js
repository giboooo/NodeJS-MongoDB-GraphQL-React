import mongoose from 'mongoose'

const Supplier = mongoose.model('Supplier')

// saveSupplier 
export const saveSupplier = async (ctx) => {
  const opts = ctx.request.body

  const supplier = new Supplier(opts)
  const saveSupplier = await supplier.save()

  if (saveSupplier) {
    ctx.body = {
      success: true,
      data: saveSupplier
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// fetchSupplier
export const fetchSupplier = async (ctx) => {
  const suppliers = await Supplier.find({})

  if(suppliers.length){
    ctx.body = {
      success: true,
      data: supplier
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}