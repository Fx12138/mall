<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "components/content/goods/GoodsListItem.vue"
  export default {
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goods{
    display: flex;
    /* flex-wrap为换行 */
    flex-wrap: wrap;
    /* 均等分 */
    justify-content: space-around;
  }
</style>
