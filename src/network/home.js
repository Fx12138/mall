import axios from 'axios'
//此处封装所有首页的请求
import {request} from './request.js'
import {newrequest} from './newrequest.js'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    // url:'/test/getBanners'

  })
}

// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }



function formatterDateTime() {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear() +
    "" // "年"
    +
    (month >= 10 ? month : "0" + month) +
    "" // "月"
    +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "" +
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    "" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
  return datetime;
}


// export function getImg(type, page) {
//   axios({
//     //带参数的请求
//     //方法一：
//     /* url:'http://123.207.32.32:8000/home/data?type=sell&page=1', */
//     url: 'https://route.showapi.com/852-2',
//     //方法二：针对get请求得参数拼接
//     params: {
//       type,
//       page,
//       showapi_appid:432791,
//       showapi_timestamp:formatterDateTime(),
//       showapi_sign:'7624e53dc1054647994bcbdcbed55417'
//     },
//     /* headers: {
//       "showapi_timestamp": formatterDateTime(),
//       "showapi_appid": 432791, //这里需要改成自己的appid
//       "showapi_sign": '7624e53dc1054647994bcbdcbed55417', //这里需要改成自己的应用的密钥secret
//     }, */
//     method: 'get'
//   }).then(res => {
//     console.log(res)
//   }).catch(err => {
//     console.log(err)
//   })
// }

export function getImg(cid, pagenum) {
  return newrequest({
    url: '/goods/search',
    params: {
      cid,
      pagenum
    }
  })
}
