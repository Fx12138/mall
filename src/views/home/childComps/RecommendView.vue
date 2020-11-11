<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.linl">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 15px;

    padding: 10px 0 5px;/* 分别代表距上面的距离，距左右的距离，距下面的距离 */
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 65px;
    width: 65px;
  }
</style>
