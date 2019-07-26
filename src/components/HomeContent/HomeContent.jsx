import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"

import './HomeContent.styl'
import yi from './imgs/yi.png'
import LimitedShops from './LimitedShops/LimitedShops'
import NewProducts from './NewProducts/NewProducts'
import {reqNewProducts, reqLimitShop, reqPolicy, reqShoppingGuide, reqPersonalShop} from '../../api'

export default class HomeContent extends Component {
 state={
  newProducts:{},
  policy:[],
  shopGuide:[],
  PersonalItem:[]
 }
 //获取新品
 async getNewProducts(){
  const result = await reqNewProducts()
  if(result.code===0){
   const newProducts = result.data
   this.setState({newProducts})
  }
 }
 //服务策略
 async getPolicy(){
  const result = await reqPolicy()
  if(result.code===0){
   const policy = result.data
   this.setState({policy})
  }
 }

 //获取商品导航
 async getShopGuide(){
  const result = await reqShoppingGuide()
  if(result.code===0){
   const shopGuide = result.data
   this.setState({shopGuide})
  }
 }

 async getPersonalShop(){
  const result = await reqPersonalShop()
  if(result.code===0){
   const personalShop = result.data
   let smallArr = []
   let bigArr = []
   personalShop.forEach(shop => {
     smallArr.push(shop)
     if(smallArr.length===3){
       bigArr.push(smallArr)
       smallArr=[]
     }
   });
   this.setState({PersonalItem:bigArr},()=>{
    new Swiper(this.refs.plivateSwiper,{
     loop: true,
     //autoplay:true,
     pagination: {
       el: '.plivate-pagination'
     }
    },
    )
   })
  }
 }

 
 componentDidMount(){
  //放送请求获取新品以及限时购
  this.getNewProducts()
  this.getPolicy()
  this.getShopGuide()
  this.getPersonalShop()
  const bigSwiper = new Swiper(this.refs.bigSwiper,{
   loop: true,
   //autoplay:true,
   pagination: {
     el: '.swiper-pagination'
   }
   },
  )
 }

 render() {
  const {newProducts, policy, shopGuide, PersonalItem}  = this.state
  return (
   <div className="content">
    <div className="swiper-container bigSwiper" ref="bigSwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/dc972eece406987cbdd29f8849055d45.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3b6044678c7d6ec12a1733657aa294ae.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/820d46ff89b81f8344aaabd5b054dc83.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
        <div className="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/820d46ff89b81f8344aaabd5b054dc83.jpg?imageView&quality=75&thumbnail=750x0" alt=""/>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
    <ul className="tag">
     {
       policy.map((p,index)=>(
        <li className="item" key={index}>
          <i style= {{backgroundImage:`url(${p.icon})`}}></i>
          <span>{p.desc}</span>
        </li> 
       ))
     }
    </ul>
    <NewProducts newProducts={newProducts.kingKongList}/>
    <div className="advert">
      <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt=""/>
    </div>
    <div className="shopingGui">
     {
      shopGuide.map((shop,index)=>(
       <div className="shopItem" key={index}>
         <a href="#1">
           <p className="title">{shop.styleItem.title}</p>
           <p className="text">{shop.styleItem.desc}</p>
           <div className="pics">
             {
               shop.styleItem.picUrlList.map((pic,index)=>(
                <div className="picItem" key={index}>
                  <img src={pic} alt=""/>
                </div>
               ))
             }
             
             
           </div>
         </a>
       </div> 
      ))
     }
    </div>
    <div className="plivateMade">
      <h2 className="title">私人定制</h2>
      <div className="swiper-container plivate-swiper" ref="plivateSwiper">
        <div className="swiper-wrapper">
         {
          PersonalItem.map((pI,index)=>(
           <div className="swiper-slide" key={index}>
            <ul className="goodsList">
             {
              pI.map((item,index)=>(
               <li className="item" key={index}>
                 <a href="#1">
                   <div className="imgContainer">
                     <img src={item.listPicUrl} alt=""/>
                   </div>
                   <div className="dsc">
                     <span>{item.name}</span>
                     <span className="price">￥{item.retailPrice}</span>
                   </div>
                 </a>
               </li>
              ))
             }
            </ul>
          </div>
          ))
         }
        </div>
        <div className="swiper-pagination plivate-pagination"></div>
      </div>
    </div>
    <LimitedShops/>
 </div>

  )
 }
}
