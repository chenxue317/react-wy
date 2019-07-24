/* 底部导航组件 */

import React, { Component } from 'react'
import './css/index.stylus'
export default class FooterNav extends Component {
 render() {
  return (
  <div className="Container" v-if="$route.meta.isShowFooter">
   <nav className="nav">
     <a href="#1">
      <span>
       <i className="iconfont icon-shouye"></i>
      </span>
      <span className="text">首页</span>
     </a>
     <a href="#1">
      <span>
       <i className="iconfont icon-fenlei"></i>
      </span>
      <span className="text">分类</span>
     </a>
     <a href="#1">
      <span>
       <i className="iconfont icon-tupian"></i>
      </span>
      <span className="text">识物</span>
     </a>
     <a href="#1">
      <span>
       <i className="iconfont icon-gouwuche"></i>
      </span>
      <span className="text">购物车</span>
     </a>
     <a href="#1">
      <span>
       <i className="iconfont icon-geren"></i>
      </span>
      <span className="text">个人</span>
     </a>
   </nav>

  </div>

  )
 }
}
