<template>
  <div class="type">
    <ul class="tab-bar" >
      <li class="tab-bar-item" :class="type==='-' && 'selected'" @click="selectedType('-')">支出 </li>
      <li class="tab-bar-item" :class="type==='+' && 'selected'" @click="selectedType('+')"> 收入</li>
    </ul>
    <router-link  to="/statistics">
      <button class="cancel">取消</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue{
  @Prop() readonly type!: string

  selectedType(type: string){
    if(type !=='-' && type!=='+'){
      throw new Error('type is unknown')
    }
    this.$emit('update:type',type)
  }

}
// export default {
//   name: "type",
//   data(){
//     return{
//       type:'-' //"-"表示支出，‘+’表示收入
//     }
//   },
//   methods:{
//     selectedType(type){
//       this.type=type
//     }
//   }
//
// }
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
      &.selected{
        border-bottom: 2px solid #333;
      }
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