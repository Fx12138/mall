<template>
  <div id="home">
    <navbar class="home-nav-bar"><div slot="center">这是首页</div></navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <TabControl class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>

    <!-- ul>li{列表$}*100 -->
    
  </div>

</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'

  import navbar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'

  import GoodsList from 'components/content/goods/GoodsList.vue'

  import {getHomeMultidata,getHomeGoods,getImg} from 'network/home.js'


  export default{
    name:'Home',
    components:{
      HomeSwiper,
      RecommendView,
      navbar,
      TabControl,
      GoodsList
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          4:{page:0,list:[]}, //创维
          5:{page:0,list:[]}, //海信
          8:{page:0,list:[]}  //夏普
        },
        currentType:4

      }
    },
    //vue的生命周期的创建阶段，一旦vue创建好立即加载
    created() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
      // getHomeGoods('pop',1).then(res => {
      //   console.log(res)
      // })
     this.getImg(4)
     this.getImg(5)
     this.getImg(8)
     // console.log(this.goods[4].list[1])

    },
    methods:{
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 4
            break;
          case 1:
            this.currentType = 5
            break;
          case 2:
            this.currentType = 8
            break;
        }
       },

      /**
       * 网络请求相关的方法
       */
      getImg(type){
        const page = this.goods[type].page + 1;
        getImg(type,page).then(res =>{
          // console.log(res)
          this.goods[type].list.push(...res.data.message.goods)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav-bar{
    background-color: #00193A;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: whitesmoke;
  }
</style>
