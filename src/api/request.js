import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'

const instance = axios.create()

instance.interceptors.request.use(
  config => {
    console.log('请求拦截:', config)
    return config
  },
  err => {
    // err为错误对象，但是在我的项目中，除非网络问题才会出现
    return Promise.reject(err)
  }
)
