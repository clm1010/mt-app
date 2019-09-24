import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const where = {
      username
    }
    const result = await UserModel.findOne(where)
    if (result != null) {
      if (result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误！')
      }
    } else {
      return done(null, false, '用户不存在！')
    }
  })
)
// 每次用户进来通过session
// 序列化
passport.serializeUser((user, done) => {
  done(null, user)
})

// 反序列化
passport.deserializeUser((user, done) => {
  return done(null, user)
})

export default passport