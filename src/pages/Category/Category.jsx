import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import BScroll from 'better-scroll'

import Search from './Search.jsx'
import CategoryDetail from './CategoryDetail.jsx'
import {reqCategery} from '../../api'
import './Category.styl'
export default class Category extends Component {
  state={
    categorys:[],
    currentIndex:0,
  }
  //获取分类列表
 async getCategerys(){
  const result = await reqCategery()
  if(result.code===0){
   let  categorys = result.data
   categorys = categorys.map((c,index) => {
     return {bannerUrl:c.bannerUrl, name:c.name, subCateList:c.subCateList}
   });
   this.setState({categorys})
 
  }
 }

 toggleCategory(index){
  this.setState({currentIndex:index})
  this.props.history.push(`/category/cateList/${index}`)
 }


 componentDidMount(){
   this.getCategerys()
   this.props.history.push(`/category/cateList/0`)
   new BScroll('.categoryWrap',{
    scrollY:true,
    click:true
  })
 }

 render() {
   let categorys = this.state.categorys || []
   const {currentIndex} = this.state
  return (
    <div className="cContainer">
      <Search/>
      <div className="category">
        <div className="categoryWrap">
            <ul className="categorys">
              {
                categorys.map((category,index)=>(
                  <li key={index} className={index===currentIndex?'active':''}
                  onClick={()=>this.toggleCategory(index)}>
                    <a href="javascript:;">
                      {category.name}
                    </a>
                  </li>
                ))
              }
            </ul>
        </div>
        <Route path="/category/cateList/:index" component={CategoryDetail}/>
        </div>
      </div>
  )
 }
}
