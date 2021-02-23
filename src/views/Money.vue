<template>
  <layout content-class="tagsGrow" >
    <div class="type">
      <ul class="tab-bar" >
        <li class="tab-bar-item selected">支出 </li>
        <li class="tab-bar-item" > 收入</li>
      </ul>
      <button class="cancel">取消</button>
    </div>
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
    <label class="notes" >
      <div class="notes-icon">
        <Icon name="备注"/>
      </div>
      <span class="name">备注：</span>
      <input type="text" class="beizhu" placeholder="在这里输入备注">
    </label>
    <div  class="panel">0</div>
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
  </layout>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue'
export default {
  name:'Money',
  components: {Icon},
  component(id: string): VueConstructor { Icon
  }
};
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
.notes{
  border-top: 1px solid #f5f5f5;
  padding: 4px 8px;
  font-size: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  >.notes-icon{
    margin-right: 2px;
    >.icon{
      width: 2em;
      height: 2em;
      vertical-align: -0.35em;
      overflow: hidden;
      fill: currentColor;
    }
  }
  .name{
    white-space: nowrap;
    font-size: 14px;
  }
  .beizhu{
    flex-grow: 1;
    margin-left: 8px;
    height: 32px;
    border: none;
    background: #fff;
  }

}
.panel{
  background: #f5f5f5;
  padding: 6px 12px;
  font-size: 24px;
  line-height: 24px;
  font-family: Consolas,monospace;
  text-align: right;
  @extend %innerShadow;
}
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