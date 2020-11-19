<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" >
      <span :class="{active:index === activeItem}" @click="activeClick(index)">{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      titles:{
        type:Array,
        default(){
          return{

          }
        }
      }
    },
    data(){
      return{
        activeItem:0
      }
    },
    methods:{
      activeClick(index){
        this.activeItem = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    font-size: 16px;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: red;
    border-bottom: 3px solid red;
    padding: 5px;
  }
</style>
