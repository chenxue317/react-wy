import ajax from './ajax'
//请求限时购
export const reqLimitShop = ()=> ajax('/limitShop')
//请求服务
export const reqPolicy = () => ajax('/policy')
//请求新品
export const reqNewProducts = () => ajax('/newProducts')
//获取分类列表
export const reqCategery = () => ajax('/category')
//获取shoppingGuide(商品导航)
export const reqShoppingGuide = () => ajax('/shoppingGuide')
//获取私人定制
export const reqPersonalShop = () => ajax('/personalShop')

//发现甄选
export const reqTopic = ({ page,size}) =>ajax(`/you/topic/v1/find/recAuto.json?page=${page}&size=${size}`)

//发现甄选mock
//export const reqTopic = () => ajax('/topic')
//获取热词
export const reqHotSearch = () =>ajax('/you/xhr/search/init.json')

//搜索关键字
export const reqKeyWord = (keywordPrefix) => ajax('/you//xhr/search/searchAutoComplete.json?keywordPrefix='+keywordPrefix)

