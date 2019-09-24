export default {
  // 当前地址
  dbs: 'mongodb://127.0.0.1:27017/student',
  // redis
  redis: {
    // 只读host
    get host() {
      return '127.0.0.1'
    },
    // 只读port
    get port() {
      return 6379
    }
  },
  // smtp
  smtp: {
    // 只读host
    get host() {
      return 'smtp.qq.com'
      // return 'smtp.163.com'
    },
    get user() {
      return '102782438@qq.com'
      // return 'limin_chu@163.com'
    },
    get pass() {
      // return 'clm1010'
      return 'wfictqtrltbncadg'
    },
    /** 邮箱验证码 */
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase()
      }
    },
    /** 过期时间 */
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
