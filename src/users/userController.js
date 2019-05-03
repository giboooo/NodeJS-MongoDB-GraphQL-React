// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const User = mongoose.model('User')

// saveUser 
// export 
const saveUser = async (ctx) => {
  const opts = ctx.request.body

  const user = new User(opts)
  const saveUser = await user.save()

  if (saveUser) {
    ctx.body = {
      success: true,
      data: saveUser
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// fetchUser
// export 
const fetchUser = async (ctx) => {
  const users = await User.find({})

  if(users.length){
    ctx.body = {
      success: true,
      data: users
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

module.exports = {saveUser, fetchUser}