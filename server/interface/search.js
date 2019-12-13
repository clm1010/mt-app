import Router from 'koa-router'
import axios from './utils/axios'
const router = new Router({ prefix: '/search' })
const sign = 'abcd'

/** 热门搜索提示 */
router.get('/top', async (ctx) => {
  const {
    status,
    data: { top }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ? top : []
  }
})

/** 热门搜索 */
router.get('/hotPlace', async (ctx) => {
  const city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  const {
    status,
    data: { result }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      city,
      sign
    }
  })
  ctx.body = {
    result: status === 200 ? result : []
  }
})

export default router
