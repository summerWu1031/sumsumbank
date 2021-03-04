<template>
  <layout >
    <div class="header">
      <div class="type">
        <ul class="tab-bar" >
          <li class="tab-bar-item" :class="type==='-' && 'selected'" @click="selectedType('-')">支出 </li>
          <li class="tab-bar-item" :class="type==='+' && 'selected'" @click="selectedType('+')"> 收入</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="detail">
        <span class="add">追加新的标签</span>
        <span @click="createTag"> > </span>
      </div>
      <ol>
        <li v-for="tag in tags" :key="tag.id" class="detail">
          <div class="iconWrapper">
            <Icon :name="tag.name"/>
            <span>{{ tag.name }}</span>
          </div>
          <router-link :to='`/labels/edit/${tag.id}`'>
            <Icon name="deleted" @click="remove"/>
          </router-link>
        </li>
      </ol>
    </div>


    <template v-slot:footer >
      <Nav />
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch()
@Component
export default class Labels extends Vue{
  tags = tagListModel.data

  createTag(){
    const name = window.prompt('请输入标签名')
    if(name){
      const message = tagListModel.create(name)
      if (message === 'duplicated'){
        window.alert('标签名重复了')
      }else if(message==='success'){
        window.alert('添加成功')
      }
    }
  }

  remove(){
    tagListModel.remove(this.tag.id)
  }
}
</script>

<style lang="scss" scoped>
.type {
  background-color: #FED330;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;

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
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;

  .detail {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d3d3d3;
    min-height: 45px;
    align-items: center;

    .iconWrapper {
      display: flex;
      //border: 1px solid red;
      justify-content: space-between;
      align-items: center;

      > .icon {
        padding: 5px;
        margin-right: 5px;
        width: 35px;
        height: 35px;
      }
    }

    .add {
      padding-left: 5px;
    }
  }
}

</style>