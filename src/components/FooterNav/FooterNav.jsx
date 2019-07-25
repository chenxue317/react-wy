/* 底部导航组件 */

import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import './css/index.styl'
export default class FooterNav extends Component {
 render() {
  return (
  <div className="Container" v-if="$route.meta.isShowFooter">
   <nav className="nav">
     <NavLink to="/" className="navItem">
      <span>
       <i className="iconfont icon-shouye"></i>
      </span>
      <span className="text">首页</span>
     </NavLink>
     <NavLink to="/category" className="navItem">
      <span>
       <i className="iconfont icon-fenlei"></i>
      </span>
      <span className="text">分类</span>
     </NavLink>
     <NavLink to="/topic" className="navItem">
      <span>
       <i className="iconfont icon-tupian"></i>
      </span>
      <span className="text">识物</span>
     </NavLink>
     <NavLink to="/cart" className="navItem">
      <span>
       <i className="iconfont icon-gouwuche"></i>
      </span>
      <span className="text">购物车</span>
     </NavLink>
     <NavLink to="/profile" className="navItem">
      <span>
       <i className="iconfont icon-geren"></i>
      </span>
      <span className="text">个人</span>
     </NavLink>
   </nav>

  </div>

  )
 }
}
