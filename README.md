#day01
## 1、移动端适配
* yarn add lib-flexible postcss-pxtorem
* npm eject 暴露所有的配置文件
* 在webpack.config.js中配置以下信息
```
require('postcss-pxtorem')({
  rootValue: 75,
  propWhiteList: [],
  minPixelValue:2,
})
```
## 2、在react中使用stylus
```
// 注意: 根据已有的sass的配置修改, 并添加在相应的位置

	const stylusRegex = /\.(stylus|styl)$/;
	const stylusModuleRegex = /\.module\.(stylus|styl)$/;

	{
      test: stylusRegex,
      exclude: stylusModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'stylus-loader'
      ),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
    },

	{
      test: stylusModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        },
        'stylus-loader'
      ),
    },
```

## 3、路由的使用
* 下载react-router  yarn add react-router-dom@4---下载第四版的router
* 1）将a标签改为NavLink/Link标签，href改为to
  * NavLink同Link的区别
    * navlink可以设置切换时的样式，link不可以，设置方法如下
     ```
     <NavLink className="list-group-item" activeClassName='activeClass' to='/home'>Home</NavLink>
     ```
* 2）在App.js中渲染组件的时候包裹一层路由器
```
import {BrowserRouter, HashRouter} from 'react-router-dom'
    ReactDOM.render(
        (
            <BrowserRouter>
            <App />
            </BrowserRouter>
            /*<HashRouter>
            <App />
            </HashRouter>*/
        ),document.getElementById('root')
    )

```
* 3）注册路由
 * 加switch的作用：只要查找到对应的路径，就不会继续向下查找，否则会一直向下查找，这样提高了效率
```
<Switch>
  <Route path='/about' component={About} />
  <Route path='/home' component={Home} />
  <Redirect to='/about' />
</Switch>
```
* 4)路由使用
activeClassName="on"设置切换时的样式
exact==严格匹配
其余默认模糊匹配
```
<NavLink to="/"className="navItem" activeClassName="on" exact>
<span>
  <i className="iconfont icon-shouye"></i>
</span>
<span className="text">首页</span>
</NavLink>
```


## swiper在react中的使用
* 下载安装
* 引入样式  import "swiper/dist/css/swiper.css"
* 在componentDidMount中new Swiper（）

## style标签属性值需要为{{}}
## setState()
1). setState()更新状态是异步还是同步的?
    a. 执行setState()的位置?
        在react控制的回调函数中: 生命周期勾子 / react事件监听回调
        非react控制的异步回调函数中: 定时器回调 / 原生事件监听回调 / promise回调 /...
    b. 异步 OR 同步?
        react相关回调中: 异步
        其它异步回调中: 同步

2). 关于异步的setState()
    a. 多次调用, 如何处理?
        setState({}): 合并更新一次状态, 只调用一次render()更新界面 ---状态更新和界面更新都合并了
        setState(fn): 更新多次状态, 但只调用一次render()更新界面  ---状态更新没有合并, 但界面更新合并了
    b. 如何得到异步更新后的状态数据?
        在setState()的callback回调函数中