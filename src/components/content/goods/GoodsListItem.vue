<template>
  <div class="goods-item">

    <img src="http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000945019608_1_800x800.jpg" />
    <!-- <img src="goodsItem.goods_small_logo" /> -->
    <div class="goods-info">
      <p>{{goodsItem.goods_name}}</p>
      <span class="price">价格：{{goodsItem.goods_price}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created(){
      console.log(this.goodsItem.goods_small_logo)
    }

  }
</script>

<style>
  .goods-item {
      padding-bottom: 40px;
      /* padding-right: 30px;
      padding-left: 30px; */
      position: relative;
      width: 48%;
    }
    .goods-item img {
      width: 100%;
      border-radius: 5px;
      border:1px solid var(--color-tint);
    }
    .goods-info {
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      left: 0px;
      right: 0px;
      overflow: hidden;
      text-align: center;
    }
    .goods-info p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .goods-info .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .goods-info .collect {
      position: relative;
    }
    .goods-info .collect::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      /* background: url("~assets/images/common/collect.svg") 0 0/14px 14px; */
    }
</style>
