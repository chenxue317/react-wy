import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './Search.styl'
class Search extends Component {
 render() {
  // onClick={this.props.history.push('/search')}
  return (
   <div className="searchContainer">
     <div className="search">
       <i className="iconfont icon-search"></i>
       <input type="text" placeholder="请输入搜索内容" />
     </div>
    
   </div>
  )
 }
}
export default withRouter(Search)

