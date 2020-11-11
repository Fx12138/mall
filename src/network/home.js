//此处封装所有首页的请求
import {request} from './request.js'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata',
    
  })
}
