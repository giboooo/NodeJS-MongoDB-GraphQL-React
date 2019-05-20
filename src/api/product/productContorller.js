import mongoose from 'mongoose'

const Product = mongoose.model('Product')

// saveProduct 
export const saveProduct = async (ctx) => {
  const opts = ctx.request.body

  const product = new Product(opts)
  const saveProduct = await product.save()

  if (saveProduct) {
    ctx.body = {
      success: true,
      data: saveProduct
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// fetchProduct
export const fetchProduct = async (ctx) => {
  const products = await Product.find({})

  if(products.length){
    ctx.body = {
      success: true,
      data: products
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}