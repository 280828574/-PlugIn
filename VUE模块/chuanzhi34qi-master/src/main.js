// 引入资源
import Vue from 'vue';




// 注册全局过滤器 开始
import Moment from 'moment';
Vue.filter('convertTime',(value)=>{   //{'abc'| convert   }
    //2015-04-16T03:50:28.000Z
    return Moment(value).format('YYYY-MM-DD');
});
//处理title太长的问题
Vue.filter('convertTitle',(value,limit)=>{
    //预防网络太慢，在按照默认值渲染以后产生的问题
    if(!value)return;
    //判断
    if(value.length > limit){
       return value.substr(0,limit) + '...'
    }
    //返回原数据
    return value;
})
// 注册全局过滤器 结束



// 注册全局组件 开始
import MyLi from './components/Commons/MyLi.vue';
import MyUl from './components/Commons/MyUl.vue';
import NavBar from './components/Commons/NavBar.vue';
import Comment from './components/Commons/Comment.vue';
import MySwipe from './components/Commons/MySwipe.vue';
Vue.component(MySwipe.name,MySwipe);
Vue.component(Comment.name,Comment);
Vue.component(NavBar.name,NavBar);
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
// 注册全局组件 结束


// 路由相关组件 开始
import App from './components/App.vue';

// import Home from './components/Home/Home.vue';
// import Member from './components/Member/Member.vue';
// import Shopcart from './components/Shopcart/Shopcart.vue';
// import Search from './components/Search/Search.vue';
// import NewsList from './components/News/NewsList.vue';
// import NewsDetail from './components/News/NewsDetail.vue';
// import PhotoList from './components/Photo/PhotoList.vue';
// import PhotoDetail from './components/Photo/PhotoDetail.vue';
// import GoodsList from './components/Goods/GoodsList.vue';
// import GoodsListTest from './components/Goods/GoodsList_test.vue';
// // import Comment from './components/Commons/Comment.vue';
// import GoodsDetail from './components/Goods/GoodsDetail.vue';
// import GoodsComment from './components/Goods/GoodsComment.vue';

//懒加载组件
const Home = r => require(['./components/Home/Home.vue'],r);
const Member = r => require(['./components/Member/Member.vue'],r);
const Shopcart = r => require(['./components/Shopcart/Shopcart.vue'],r);
const Search = r => require(['./components/Search/Search.vue'],r);
const NewsList = r => require(['./components/News/NewsList.vue'],r);
const NewsDetail = r => require(['./components/News/NewsDetail.vue'],r);
const PhotoList = r => require(['./components/Photo/PhotoList.vue'],r);
const PhotoDetail = r => require(['./components/Photo/PhotoDetail.vue'],r);
const GoodsList = r => require(['./components/Goods/GoodsList.vue'],r);
const GoodsListTest = r => require(['./components/Goods/GoodsList_test.vue'],r);
// const Comment = r => require(['./components/Commons/Comment.vue'],r);
const GoodsDetail = r => require(['./components/Goods/GoodsDetail.vue'],r);
const GoodsComment = r => require(['./components/Goods/GoodsComment.vue'],r);



// 路由相关组件 结束

//VuePreview 开始
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//VuePreview 结束

// VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    // 重定向 到首页
    { path:'/',redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home},//首页
    {name:'member',path:'/member',component:Member},//会员
    {name:'shopcart',path:'/shopcart',component:Shopcart},//购物车
    {name:'search',path:'/search',component:Search},//查找
    {name:'news.list',path:'/news/list',component:NewsList},//新闻列表
    {name:'news.detail',path:'/news/detail',component:NewsDetail},//新闻详情
    //如果写成 components 会爆错$createElement is undefined
    {name:'photo.list',path:'/photo/list/:categoryId',component:PhotoList},//图文分享
    {name:'photo.detail',path:'/photo/detail/:imgId',component:PhotoDetail},  //图文详情
    { name:'test',path:'/test',component:GoodsListTest},//测试路由
    { name:'goods.list',path:'/goods/list',component:GoodsList},//商品列表
    {name:'goods.detail',path:'/goods/detail/:goodsId',component:GoodsDetail},
    {name:'goods.detail.show',path:'/goods/show/info',component:NewsDetail},//商品图文介绍
    {name:'goods.comment',path:'/goods/comment',component:GoodsComment} //商品评论
]);
// VueRouter 结束

// MintUi 开始
import MintUi from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.use(MintUi);

import Header from 'mint-ui/lib/header';
import 'mint-ui/lib/header/style.css';
import Switch from 'mint-ui/lib/switch';
import 'mint-ui/lib/switch/style.css';
import Swipe from 'mint-ui/lib/swipe';
import 'mint-ui/lib/swipe/style.css';
import SwipeItem from 'mint-ui/lib/swipe-item';
import 'mint-ui/lib/swipe-item/style.css';
import Lazyload from 'mint-ui/lib/lazyload';
import 'mint-ui/lib/lazyload/style.css';
import Loadmore from 'mint-ui/lib/loadmore';
import 'mint-ui/lib/loadmore/style.css';
import Indicator from 'mint-ui/lib/indicator';
import 'mint-ui/lib/indicator/style.css';
import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';
import Toast from 'mint-ui/lib/toast';
import 'mint-ui/lib/toast/style.css';
import Tabbar from 'mint-ui/lib/tabbar';
import 'mint-ui/lib/tabbar/style.css';
import TabItem from 'mint-ui/lib/tab-item';
import 'mint-ui/lib/tab-item/style.css';
import Badge from 'mint-ui/lib/badge';
import 'mint-ui/lib/badge/style.css';

Vue.component(Badge.name,Badge);
Vue.component(Tabbar.name,Tabbar);
Vue.component(TabItem.name,TabItem);
Vue.component(Header.name, Header);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
Vue.prototype.$toast = Toast;   //this.$toast('xxx')

// MintUi 结束






// 考虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css';



// Axios 开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://127.0.0.1:8899/api/';
// Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
//拦截器中实现loadding图标
Axios.interceptors.request.use(config=>{
    MintUi.Indicator.open({
        text:'玩命加载中..',
        spinnerType:'triple-bounce'
    })
    return config;
})
Axios.interceptors.response.use( response =>{
    MintUi.Indicator.close();
    return response;
});

// Axios 结束


new Vue({
    el:'#app',
    render:c=>c(App),
    router
});