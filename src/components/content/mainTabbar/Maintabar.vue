<template>
  <div>
    <tabbar>
      <tabbarItem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/加入房间.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/搜索房间.svg"/>
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/表情.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/搜索房间.svg"/>
        <div slot="item-text">表情</div>
      </tabbarItem>
      <tabbarItem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/商店.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/搜索房间.svg"/>
        <div slot="item-text">商店</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/编辑资料.png"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/搜索房间.svg"/>
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from '../../common/tabbar/Tabbar.vue'
  import tabbarItem from '../../common/tabbar/TabbarItem.vue'

  export default{
    name:'Maintabbar',
    components:{
      tabbar,tabbarItem
    }
  }
</script>

<style>
</style>
