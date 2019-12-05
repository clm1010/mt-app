import Router from 'koa-router'
// import Province from '../dbs/models/province'
import axios from './utils/axios'

const router = new Router({ prefix: '/geo' })

const sign = 'abcd'

/** 获取地理位置 */
router.get('/getPosition', async (ctx) => {
  const {
    status,
    data: { province, city }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

/** 获取菜单 */
router.get('/menu', async (ctx) => {
  const {
    status,
    data: { menu }
  } = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

/** 省份 */
router.get('/province', async (ctx) => {
  // const province = await Province.find()
  // ctx.body = {
  //   province: province.map((item) => {
  //     return { id: item.id, name: item.value[0] }
  //   })
  // }
  const {
    status,
    data: { province }
  } = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      province
    }
    console.log(ctx.body)
  } else {
    ctx.body = {
      province: []
    }
  }
})

export default router
