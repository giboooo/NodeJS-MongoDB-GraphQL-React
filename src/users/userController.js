const User = require('./userSchema')


// create
exports.createUser = async (ctx) => {
  const result = await User.create({
    name: ctx.request.body.name,
    email : ctx.request.body.email
  })
  if (!result) {
    throw new Error('user creation failed')
  } else {
    ctx.body = {message: 'user created', data: result}
  }
}

// read
exports.getUsers = async (ctx) => {
  const users = await User.find({})
  if (!users) {
    throw new Error("error retrieving data")
  } else {
    ctx.body = users
  }
} 

// update
exports.updateUser = async (ctx) => {
  const searchByName = {name: ctx.request.ody.name}
  const update = {name: ctx.request.body.newName, email: ctx.request.body.newEmail}
  const result = await User.findOneAndUpdate(searchByName, update)
  if (!result) {
    throw new Error('User not updated')
  } else {
    console.log(result)
    ctx.body = {message: 'user updated', data: result}
  }
}

// delete
exports.deleteUser = async (ctx) => {
  const result = await User.findOneAndRemove({name: ctx.request.body.name})
  if (!result) {
    throw new Error('User not deleted')
  } else {
    ctx.status = 200
    ctx.body = {message: 'user deleted'}
  }
}