<template>
  <div class="type">
    <ul class="tab-bar" >
      <li class="tab-bar-item selected">支出 </li>
      <li class="tab-bar-item" > 收入</li>
    </ul>
    <button class="cancel">取消</button>
  </div>
</template>

<script lang="ts">
export default {
name: "type"
}
</script>

<style lang="scss" scoped>
.type{
  background-color: #FED330;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  >.tab-bar{
    display: flex;
    align-items: center;
    >.tab-bar-item{
      padding: 16px 16px 8px 16px;
      font-size: 22px;
    }
    .selected{
      border-bottom: 2px solid #333;
    }
  }
  .cancel{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 14px;
    background-color: inherit;
    border: none;
    padding: 16px 16px 8px 16px;
  }
}
</style>