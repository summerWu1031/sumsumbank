<template>
  <div class="tags">
    <ul class="current">
      <li>
        <div class="icon-item">
          <Icon name="餐饮"/>
        </div>
        <span>餐饮</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="娱乐"/>
        </div>
        <span>娱乐</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="交通"/>
        </div>
        <span>交通</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="fruit"/>
        </div>
        <span>水果</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="零食"/>
        </div>
        <span>零食</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="购物"/>
        </div>
        <span>购物</span>
      </li>
      <li>
        <div class="icon-item">
          <Icon name="新增"/>
        </div>
        <span>新增</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
.tags{
  flex-grow: 1;
  overflow: auto;
  >.current {
    //border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    >li {
      display: flex;
      flex-direction: column;
      width: 25%;
      padding: 12px 0;
      align-items: center;
      >.icon-item{
        width: 48px;
        height: 48px;
        padding: 4px;
        margin-bottom: 4px;
        background-color:  #F2F2F2;
        border-radius:50% 50% 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        >.icon{
          width: 40px;
          height: 40px;
          vertical-align: -.15em;
          overflow: hidden;
          fill: currentColor;
        }
      }
      >span{
        font-size: 12px;
        padding: 4px;
      }
    }
  }
}
</style>