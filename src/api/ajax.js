/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
*/
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置不显示右上角的旋转进度条, 只显示水平进度条
NProgress.configure({ showSpinner: false }) 

const service = axios.create({
  baseURL: "http://gmall-h5-api.atguigu.cn/api", // 基础路径
  timeout: 15000   // 连接请求超时时间
})

service.interceptors.request.use((config) => {
  // 显示请求中的水平进度条
  NProgress.start()

  // 必须返回配置对象
  console.log('----------------')
  console.log(config)
  return config //后面就会根据返回的config，使用xhr对象发Ajax请求
})

service.interceptors.response.use((response) => {
  // 隐藏进度条
  NProgress.done()
  // 返回响应体数据,成功返回的数据不再是response，而直接是响应体数据response.data
  console.log('2222222222222222')
  console.log(response)
  return response.data
}, (error) => {
  // 隐藏进度条
  NProgress.done()

  // 统一处理一下错误
  alert( `请求出错: ${error.message||'未知错误'}`)

  // 后面可以选择不处理或处理
//   或者throw error
  return Promise.reject(error)
})

export default service