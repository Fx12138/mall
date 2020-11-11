import axios from 'axios'

export function request(config){

  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2、axios拦截器
  //一、拦截请求，两个参数都是函数，一个是请求成功，一个是请求失败
  //请求成功,success得到的是请求的config，失败时得到的则是错误信息
  instance.interceptors.request.use(success =>{
    //拦截器一般做什么
    //1、比如config中一些信息不满足服务器的要求
    //2、比如每次进行网络请求时希望显示一个网络图标，就是那个转圈的正在加载中
    //3、某些请求必须携带一些东西，比如登录需要token

    //请求成功,success得到的是请求的config
    console.log(success)
    return success

    },err => {
    //请求失败
    console.log(err)

    })

  //二、响应拦截,两个参数都是函数，一个是响应成功，一个是响应失败
  //响应成功第一个函数得到的是请求的res，失败时得到的则是错误信息
  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  },err => {
    console.log(err)
  })

  // 3.发送真正的网络请求，因为instance返回的就是一个Promise
  return instance(config)

}
