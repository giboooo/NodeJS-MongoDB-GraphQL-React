import jwt from 'jsonwebtoken'

export default function (ctx) {

  console.log('gibo1', ctx.cookies.get('auth-token'))
  
  const token = ctx.cookies.get('auth-token')
  if (!token) return ctx.throw(401, 'acess Denied')
  
  const verified = jwt.verify(token, 'secretKey')
     
  
  if (verified) {
    console.log('gibo2', verified)
  
    return ctx.state.user = verified
    
  } else { 
    return ctx.throw(400,'Invalid Token')
  }
}