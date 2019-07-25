import React, { Component } from 'react'
import './LimitedShops.styl'
import {reqLimitShop} from '../../../api'
export default class LimitedShops extends Component {
 state={
  hour:'00',
  minute:'00',
  second:'00',
  limitShopObj:{}
 }

 async getLimitShop(){
  const result = await reqLimitShop()
  if(result.code===0){
   const limitShopObj = result.data
   this.setState({limitShopObj})
  }
 }

 componentDidMount(){
  //获取限时购列表
  this.getLimitShop()
 }

 render() {
  const {hour, minute, second, limitShopObj} = this.state
  return (
   <div className="limitWrap">
    <div className="title">
     <div className="t-left">
      <h1>限时购</h1>
      <div className="durTime">
       <span className="hours">{hour}</span>
       <span className="col">:</span>
       <span className="minutes">{minute}</span>
       <span className="col">:</span>
       <span className="seconds">{second}</span>
      </div>
     </div>
     <div className="t-right">
      <span className="more">更多</span>
      <span className="iconfont icon-arrow"></span>
     </div>
    </div>
    <ul className="contentLimit">
      {  limitShopObj.itemList?
       (limitShopObj.itemList.map(shop=>(
        <li className="item" key={shop.itemId}>
         <a href="#1">
          <div className="imgWrap">
           <img src={shop.picUrl} alt=""/>
          </div>
          <div className="price">
           <span className="currentPrice">
            ￥{shop.activityPrice}
           </span>
           <span className="oldPrice">
            ￥{shop.originPrice}
           </span>
          </div>

         </a>
        </li>
       ))):null
      }
    </ul>
  </div>
  )
 }
}
