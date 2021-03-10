<template>
  <layout>
    <div class="layoutWrapper">
      <div class="type">
        <ul class="tab-bar" >
          <li class="tab-bar-item" :class="type==='-' && 'selected'" @click="selectedType('-')">支出 </li>
          <li class="tab-bar-item" :class="type==='+' && 'selected'" @click="selectedType('+')"> 收入</li>
        </ul>
        <div>
          <button class="cancel" @click="goback">取消</button>
        </div>
      </div>

      <main>
       <Notes field-name="标签：" placeholder="请输入标签名" :value="value" @update:xxx="onUpdateNotes"/>
        <div class="tags">
          <span>图标:</span>
          <ul class="current" v-if="this.type==='-'">
            <li v-for="tag in paymentIcon" :key="tag" @click="selected(tag)" >
              <div class="icon-item" :class="{selected:selectedTag.indexOf(tag)>=0}" >
                <Icon  :name="tag"/>
              </div>
            </li>
          </ul>
          <ul class="current" v-else>
            <li v-for="tag in incomeIcon" :key="tag" @click="selected(tag)" >
              <div class="icon-item" :class="{selected:selectedTag.indexOf(tag)>=0}" >
                <Icon  :name="tag"/>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <div class="buttonWrapper">
        <button @click="createTag">
          <span>确 认</span>
        </button>
      </div>
    </div>

    <template v-slot:footer >
      <Nav />
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/components/Money/Notes.vue';
import Type from '@/components/Money/Type.vue';



@Component({
  components: {Type, Notes}
})
export default class NewLabel extends Vue {
  paymentIcon: string[] = ['租房', '礼物', '狗','猫','衣服','化妆品','酒水','药品','水电']
  incomeIcon: string[]=['红包','理财','兼职','工资','钱包','收入']
  selectedTag: string[]=[]

  value = ''
  type='-';
  selected(tag: string) {
    const index = this.selectedTag.indexOf(tag);
    if (this.selectedTag.length === 0) {
      this.selectedTag.push(tag)
    } else {
      this.selectedTag.splice(index, 1);
      this.selectedTag.push(tag)
    }
  }
  onUpdateNotes(value: string){
    this.value=value
  }
  createTag(){
      const name =this.value
      const icon = this.selectedTag[0]
      if(name&&icon){
        const message = window.createTag(name,icon,this.type)
        if (message === 'duplicated'){
          window.alert('标签名已存在')
        }else if(message==='success'){
          window.alert('添加成功')
        }
      }else {
        window.alert('请输入标签名和选择标签图案')
      }
    }
  selectedType(type: string){
    this.type=type
  }
  goback(){
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.layoutWrapper{
  display: flex;
  flex-direction: column;
}
.type {
  background-color: #FED330;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  .cancel {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 14px;
    background-color: inherit;
    border: none;
    padding: 16px 16px 8px 16px;
  }
  > .tab-bar {
    display: flex;
    align-items: center;

    > .tab-bar-item {
      padding: 16px 16px 8px 16px;
      font-size: 22px;

      &.selected {
        border-bottom: 2px solid #333;
      }
    }

  }
}
.tags {
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  box-shadow: 0 3px 3px $color-shadow;;
  flex-grow: 1;
  span{
    font-size: 14px;
    padding-bottom: 5px;
  }
  .current {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > li {
      display: flex;
      flex-direction: row;
      width: 25%;
      padding: 12px 0;
      justify-content: center;

      > .icon-item {
        width: 48px;
        height: 48px;
        padding: 4px;
        margin-bottom: 4px;
        background-color: #F2F2F2;
        border-radius: 50% 50% 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;

        &.selected {
          background-color: #FED330;
        }

        > .icon {
          width: 40px;
          height: 40px;
          vertical-align: -.15em;
          overflow: hidden;
          fill: currentColor;
        }
      }
    }
  }
}
.buttonWrapper{
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  button{
    height: 40px;
    cursor: pointer;
    width: 80%;
    background: #ff898d;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    color: #fff;
    font-weight: 700;
    border-radius: 20px;
    >span{
      padding: 0 15px;
      font-size: 14px;
    }
  }
}







</style>