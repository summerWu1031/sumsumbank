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
      <button @click="ok" class="ok">{{finish}}</button>
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
  // @Prop()  value!: number
  output ='0'
  finish = '完成';
  xxx: string[]=[];
  inputContent(e: MouseEvent){
    const input = e.target as HTMLButtonElement;
    const inputContent =input.textContent as string;
    this.xxx.push(inputContent)

    if(this.xxx[this.xxx.length-1]===this.xxx[this.xxx.length-2] &&
        (this.xxx[this.xxx.length-1]==='+' || this.xxx[this.xxx.length-1]==='-' || this.xxx[this.xxx.length-1]==='.') ){
      console.log('x');
      console.log(this.xxx[this.xxx.length-1]);
      console.log(this.xxx[this.xxx.length-2]);
      return;
    }
    if((this.xxx[this.xxx.length-1]==='+' || this.xxx[this.xxx.length-1]==='-' || this.xxx[this.xxx.length-1]==='.') &&
        (this.xxx[this.xxx.length-2]==='+' || this.xxx[this.xxx.length-2]==='-' || this.xxx[this.xxx.length-2]==='.')){
      console.log('x');
      return;
    }
    if(this.output.length>16){return;}
    if(this.output==='0'){
      if('0123456789'.indexOf(inputContent)>=0){
        this.output=inputContent;
      }else if(inputContent === '+' || inputContent === '-'){
        return;
      }else {
        this.output='0'+inputContent;
      }
      return
    }

    // if (this.output.indexOf('.') >= 0 && inputContent === '.') {
    //   return;
    // }

    if('+'.indexOf(inputContent)>=0) {
      this.finish = '=';
    }


    if('-'.indexOf(inputContent)>=0){
      this.finish='=';
    }

    this.output+=inputContent;

  }

  ok(e: MouseEvent){

      // console.log(this.output);

      const add =this.output.split(/-\d*/)
      const add1 =add.toString().split(/,\.\d*/)
      const add2 =add1.filter(item=>!(item===''))
      const add3 =add2.toString().split('+')
      //   console.log('add1:'+ add);
      //   console.log(add1);
      //   console.log(add2);
      // console.log(add3);
      let addTotal = 0;
      for(let i=0; i<add3.length; i++){
        addTotal+=parseFloat(add3[i]);
      }
      // console.log(addTotal);

      const minus = this.output.split(/\+\d*/).toString()
      const minus2 = minus.split(/,\.\d*/).toString()
      const minus3 =minus2.split('-')
      const minus4 =minus3.toString().split(',')
      const minus5 =minus4.filter(item=>!(item===''))
      const minus6 =minus5.slice(1)
      // console.log('min:'+minus);
      // console.log(minus2);
      // console.log(minus3);
      // console.log(minus4);
      // console.log(minus5);
      // console.log(minus6);

      let minusTotal = 0;
      for(let i=0; i<minus6.length; i++){
        minusTotal+=parseFloat(minus6[i]);
      }
      // console.log(minusTotal);

      const amount =this.output=(addTotal-minusTotal).toString()



      if(this.finish==='='){
        this.output=amount
        this.finish='完成'
      }else if(!(this.output==='0')){
        this.output='0'
        this.$emit('update:value',amount)
        this.$emit('submit',amount)
        this.$emit('button')
      }else {
        alert('请输入数值')
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