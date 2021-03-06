import axios from 'axios'

const instance = axios.create({
  // 判断环境变量
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
    3000}`,
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout: 2000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },

  // // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json' // default
})

export default instance
