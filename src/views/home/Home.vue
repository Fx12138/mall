<template>
  <div>
    <navbar class="home-nav-bar"><div slot="center">这是首页</div></navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>

</template>

<script>
  import navbar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'

  import {getHomeMultidata} from 'network/home.js'


  export default{
    name:'Home',
    components:{
      navbar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[]

      }
    },
    //vue的生命周期的创建阶段，一旦vue创建好立即加载
    created() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  }
</script>

<style>
  .home-nav-bar{
    background-color: #00193A;
  }
</style>
