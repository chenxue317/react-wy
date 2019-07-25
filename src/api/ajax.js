import axios from 'axios'
//返回一个promise
//const ajax  = ( url, method ='GET', data={}, params={} )=>{

 /*  axios.interceptors.request.use((config)=>{
    if(config.url)
  }) */
  //设置响应拦截器，统一处理请求失败问题

  axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 利用无状态啊的Promise阻断链
    alert(error.message)
    return new Promise(()=>{})
  }); 
 /*  return new Promise(( resolve, reject )=>{
   if( method ==='GET'){
    axios.get(url,{params}).then(response=>{
     resolve(response.data)
    })
    
   }else if(method ==='POST'){
    axios.post(url,data).then(response=>{
     resolve(response)
    })
   
   }
  })
 
}
 */
export default axios