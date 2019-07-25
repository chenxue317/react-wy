/* home路由组件 */
import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import HomeContent from '../../components/HomeContent/HomeContent'
export default class Home extends Component {
 render() {
  return (
   <div>
     <HomeHeader/>
     <HomeContent/>
   </div>
  )
 }
}
