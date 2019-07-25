import Mock from 'mockjs';
import homeData from './datas/homeData.json';
import categoryData from './datas/category.json'
import topicData from './datas/topic.json'
Mock.mock('/limitShop', {code: 0, data: homeData.flashSaleModule});
Mock.mock('/policy', {code: 0, data: homeData.policyDescList});
Mock.mock('/category', {code: 0, data: categoryData.categoryL1List});
Mock.mock('/newProducts', {code: 0, data: homeData.kingKongModule});
Mock.mock('/shoppingGuide', {code: 0, data: homeData.sceneLightShoppingGuideModule});
Mock.mock('/personalShop', {code: 0, data: homeData.personalShop});
Mock.mock('/topic',{code:0,data:topicData.data})


