import mongoose from 'mongoose'

const User = mongoose.model('User')

// saveUser
export const saveUser = async (ctx) => {
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
export const fetchUser = async (ctx) => {
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


// export const fetchStudentDetail = async (ctx, next) => {
//   const students = await Student.find({}).populate({
//     path: 'info',
//     select: 'hobby height weight'
//   }).exec()

//   if (students.length) {
//     ctx.body = {
//       success: true,
//       data: students
//     }
//   } else {
//     ctx.body = {
//       success: false
//     }
//   }
// }