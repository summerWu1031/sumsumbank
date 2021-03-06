<template>
  <layout>
    <div class="layoutWrapper">
      <header>
        <Icon name="回退" @click="goback"/>
        <div>支出新标签</div>
      </header>
      <main>
       <Notes field-name="标签：" placeholder="请输入标签名" :value="value" @update:xxx="onUpdateNotes"/>
        <div class="tags">
          <span>图标:</span>
          <ul class="current">
            <li v-for="tag in fixIcon" :key="tag" @click="seleted(tag)" >
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
import tagListModel from '@/models/tagListModel';

tagListModel.fetch()

@Component({
  components: {Notes}
})
export default class NewLabel extends Vue {
  fixIcon: string[] = ['租房', '礼物', '狗','猫','衣服','化妆品','酒水','药品','水电']
  selectedTag: string[]=[]
  tags = tagListModel.data
  value = ''

  seleted(tag: string) {
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
        const message = tagListModel.create(name,icon)
        if (message === 'duplicated'){
          window.alert('标签名已存在')
        }else if(message==='success'){
          window.alert('添加成功')
        }
      }else {
        window.alert('请输入标签名和选择标签图案')
      }
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
header{
  height: 50px;
  background: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: larger;
  position: relative;
  >.icon{
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    left: 5px;
    margin-top: -16px;
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
}
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




</style>