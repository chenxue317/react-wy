import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import FooterNav from './components/FooterNav/FooterNav'
import './App.styl'

import Home from './pages/Home/Home.jsx'
import Category from './pages/Category/Category.jsx'
import Topic from './pages/Topic/Topic.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Profile from './pages/Profile/Profile.jsx';

export default class App extends Component {

  render() {
    return (
      <div className="wrap">
          <Switch>
            <Route path="/cart" component={Cart}/>
            <Route path="/category" component={Category}/>
            <Route path="/topic" component={Topic}/>
            
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Home}/>
          </Switch>
          <FooterNav />
      </div>
    )
  }
}
