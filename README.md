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

