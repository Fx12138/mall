<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'tabbarItem',
    props:{
      path:String
    },
    data(){
      return{
        /* isActive:false */
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    height: 20px;
    width: 20px;
  }
  .active{
    color: red;
  }
</style>
