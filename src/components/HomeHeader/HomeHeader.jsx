import React, { Component} from 'react'
import BScroll from 'better-scroll'
import './HomeHeader.styl'
export default class HomeHeader extends Component {
 state={
  icon:'\ue60c 搜索好物，共21756款好物',
  currentIndex:0,
  isShowDetail:false,
  openOrClose:'close',
  catergorys:["推荐",
  "居家生活",
  "服饰鞋包",
  "美食酒水",
  "个护清洁",
  "母婴亲子",
  "运动旅行",
  "数码家电",
  "全球特色"]
 }
 showDetail=()=>{
  const {openOrClose} = this.state
  if(openOrClose==='close'){
   console.log(1)
   this.setState({
    openOrClose:'open',
    isShowDetail:true
   })
  }else{
   this.setState({
    openOrClose:'close',
    isShowDetail:false
   })
  }
 
 }
 closeDetail=()=>{
  this.setState({
    openOrClose:'close',
    isShowDetail:false
   })
 }


 componentDidMount(){
  this.bs = new BScroll(this.refs.navContainer, {
    probeType: 3,
    scrollX:true,
    click:true,
    
  })
 }
 render() {
  //
  const {catergorys,currentIndex,icon,openOrClose,isShowDetail} = this.state
  return (
   <div>
    <div className="homeHeader">
      <span className="wy"></span>
      <input type="text" placeholder={icon} className="search iconfont"/>
      <div className="login">登录</div>
    </div>
    <div className="navContainer" ref="navContainer">
      <ul className={!isShowDetail?"headerNav":' disappear'}>
        {
         catergorys.map((category,index)=>(
          <li key={index} className={'navItem '+(currentIndex===index?'active':'')} onClick={()=>(this.setState({currentIndex:index}))}>
           <a href="#1">{category}</a>
          </li>
         ))
        }
      </ul> 
      <h1 className={isShowDetail?"allCategory":'disappear'}>全部频道</h1>
      <div className="toggle" onClick={this.showDetail}>
        <div className={"icon "+openOrClose}>
          <span className="iconfont icon-arrowdown"></span>
        </div>
      </div>  
      
    </div>
    <div className={isShowDetail?"detailList":'disappear'}>
      {
       catergorys.map((category,index)=>(
         <a href="#1" key={index} className={index===currentIndex?'active':''}>{category}</a>
       ))
      }
    </div>
    <div className={isShowDetail?"mask":'disappear'} onClick={ this.closeDetail}></div>
   </div>
  )
 }
}
