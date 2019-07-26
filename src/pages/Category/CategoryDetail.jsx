import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {reqCategery} from '../../api'
import './CategoryDetail.styl'
export default class CategoryDetail extends Component {
  state={
    categorys:[]
  }
   //获取分类列表
 async getCategerys(){
  const result = await reqCategery()
  if(result.code===0){
   let  categorys = result.data
   categorys = categorys.map((c,index) => {
     return {bannerUrl:c.bannerUrl, name:c.name, subCateList:c.subCateList}
   });
   this.setState({categorys},()=>{
    new BScroll('.categoryListWrap',{
      scrollY:true
    })
   })
   
  }
 }

  componentDidMount(){
    this.getCategerys()
   

  }
 render() {
   const {categorys} = this.state
   const { index } = this.props.match.params
   const category = categorys[index]
  return (
  <div className="categoryListWrap">
     {category?
      (
       <div className="categoryContent">
        <div className="bigImg">
         <img src={category.bannerUrl} alt=""/>
        </div>
        <ul className="categoryList">
         {
          category.subCateList.map((subCate,index)=>(
           <li className="item" key={subCate.id}>
              <div className="smallImg">
                <img src={subCate.bannerUrl} alt=""/>
              </div>
              <p className="desc">{subCate.name}</p>
            </li>
          ))
         }
        </ul>
       </div>
      ):null
     }
   </div>
  )
 }
}
