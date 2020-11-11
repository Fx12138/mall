<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot> </div>
    <div class="center"><slot name="center"></slot> </div>
    <div class="right"><slot name="right"></slot> </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    /* 这是为导航下增加过度的横杠*/
    box-shadow: 0 1px 1px rgba(100,100,.1);
  }
  .left,.right{
    width: 60px;
    background-color: #000000;
  }
  .center{
    flex: 1;
  }
</style>
