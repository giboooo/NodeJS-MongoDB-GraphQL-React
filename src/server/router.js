import Router from 'koa-router'
const router = new Router()

import User from '../api/user/schema'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
//import auth from './auth'

// get
router.get('/', async (ctx) => await ctx.render('index'))
router.get('/admin', async (ctx) => await ctx.render('admin'))
router.get('/cart', async (ctx) => await ctx.render('cart'))
router.get('/menu', async (ctx) => await ctx.render('menu'))
router.get('/search', async (ctx) => await ctx.render('search'))
router.get('/admin2', async (ctx) => {
  await ctx.render('admin2')
  //auth()
})
router.get('/login', async (ctx) => await ctx.render('login'))
router.get('/register', async (ctx) => await ctx.render('register'))

// register
router.post('/register', async (ctx) => {

  const { name, email, password, password2 } = ctx.request.body
  
  // check if email exist
  const user = await User.findOne({ email })
  
  if (user) {
    ctx.body = 'email exist please sign in'
    ctx.redirect('/login')
    
  } else {
    // check required fields
    if (!name || !email || !password || !password2) { 
      ctx.throw(400, 'please fill all the fields')
    }
    
    // check password length
    if (password.length < 6) {
      ctx.throw(400, 'Password should be at least 6 characters')
    }
    
    // check passwords match
    if (password !== password2) {
      ctx.throw(400, 'Passwords do not match')
    }
    ctx.redirect('/register')
  }
  
  // hash password
  const newUser = new User({
    name,
    email,
    password
  })

  bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
    if (err) throw err

    // set password to hashed
    newUser.password = hash
    newUser.save()
    ctx.redirect('/admin2')             
  }))  
    
})


//login
router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body

  // check if email exist
  const user = await User.findOne({ email })
  if (!user) return ctx.throw(400, 'email does not exist')

  // compare password
  const validPwd = await bcrypt.compare(password, user.password)
  if (!validPwd) return ctx.throw(400, 'wrong password or email')
   
  // create token
  const token = jwt.sign({ id: user.id } ,'secretKey')
  
  // set cookies
  ctx.cookies.set('auth-token', token)
  
  ctx.cookies.set('userId' ,user.id)
  ctx.state.user = user

  console.log('gibo', ctx.state.user)
  

  ctx.redirect('/admin2')
})

export default router