import React, { Component } from 'react'

import './NewProducts.styl'

export default class NewProducts extends Component {
 render() {
  const {newProducts} = this.props
  return (
   <ul className="categorys">
    {
     newProducts?(
      newProducts.map((p,index) =>
       (<li className="item" key={index}>
        <a href="#1">
         <img src={p.picUrl} alt=""/>
         <span>{p.text}</span>
        </a>
       </li>)
      )
     
    ):null
    }
    

     
   </ul>
  )
 }
}
