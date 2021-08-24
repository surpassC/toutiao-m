import Axios from 'axios'

const axios = new Axios({
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  timeout: 5000
})

axios.interceptors.request.use((config) => {
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default axios
