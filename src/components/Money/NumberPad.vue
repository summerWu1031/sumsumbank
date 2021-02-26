<template>
  <div class="numberPad">
    <div  class="panel">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="inputContent">+</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="inputContent">-</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="inputContent" class="ok">{{finish}}</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove" class="deleted">
        <Icon name="取消"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Type extends Vue{
  output ='0';
  finish = '完成';
  inputContent(e: MouseEvent){
    const input = e.target as HTMLButtonElement;
    const inputContent =input.textContent as string;
    if(this.output.length>16){return;}
    if(this.output==='0'){
      if('0123456789'.indexOf(inputContent)>=0){
        this.output=inputContent;
      }else {
        this.output='0'+inputContent;
      }
      return
    }

    if (this.output.indexOf('.') >= 0 && inputContent === '.') {
      return;
    }

    this.output+=inputContent;

    if('+'.indexOf(inputContent)>=0){
      this.finish='=';
      console.log(this.output);
      }
    if('='.indexOf(inputContent)>=0){
      console.log('x');
      this.output=this.output.slice(0,-1);
      console.log(this.output);

      const old = this.output.split('+');
      console.log(old);
      let num = 0;
      for(let i=0; i<old.length; i++){
        num+=parseInt(old[i]);

      }
      console.log('num:'+num);
      return num;
    }

  }

  remove(){
    if(this.output.length===1){
      this.output='0'
    }else {
      this.output=this.output.slice(0,-1);
    }
  }


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
  .panel{
    height: 46px;
    background: #f5f5f5;
    padding: 6px 12px;
    font-size: 24px;
    line-height: 35px;
    font-family: Consolas,monospace;
    text-align: right;
    @extend %innerShadow;
  }
}
</style>