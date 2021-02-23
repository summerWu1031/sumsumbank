<template>
  <div class="numberPad">
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">完成</button>
      <button>.</button>
      <button>0</button>
      <button class="deleted">
        <Icon name="取消"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
name: "NumberPad"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .buttons{
    @extend %clearfix;
    >button{
      width: 25%;
      height: 7.9vh;
      border: none;
      font-size: 16px;
      background: transparent;
      float: left;
      &.ok{
        height: 7.9*2vh;
        float: right;
      }
      $bg:#f2f2f2;
      &:nth-child(1){
        background-color: $bg;
      }
      &:nth-child(2),&:nth-child(5){
        background-color: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background-color: darken($bg,4*2%);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
        background-color: darken($bg,4*3%);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(14){
        background-color: darken($bg,4*4%);
      }
      &:nth-child(15){
        background-color: darken($bg,4*5%);
      }
      &:nth-child(12){
        background-color: darken($bg,4*6%);
      }
    }

  }
}
</style>