<template>
  <layout >
    <Tabs :data-source="typeList" :value.sync="type"/>
    <div class="main">
      <router-link to="/newlabel" class="detail">
        <span class="add">追加新的标签</span>
        <span > > </span>
      </router-link>
      <ol v-if="this.type==='-'" >
        <li v-for="tag in payment" :key="tag.id" class="detail">
          <div class="iconWrapper">
            <Icon :name="tag.icon" class="icon-item"/>
            <span>{{ tag.name }}</span>
          </div>
          <div :to='`/labels/edit/${tag.id}`'>
            <Icon name="deleted" @click="remove(tag.id)"/>

          </div>
        </li>
      </ol>
      <ol v-else >
        <li v-for="tag in income" :key="tag.id" class="detail">
          <div class="iconWrapper">
            <Icon :name="tag.icon" class="icon-item"/>
            <span>{{ tag.name }}</span>
          </div>
          <div :to='`/labels/edit/${tag.id}`'>
            <Icon name="deleted" @click="remove(tag.id)" />

          </div>
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
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constance/typeList';

@Component({
  components: {Tabs},
  computed:{
    payment(){
      return this.$store.state.paymentTag
    },
    income(){
      return this.$store.state.incomeTag
    },
  }

})
export default class Labels extends Vue{
 typeList = typeList
  get record(){
    return  this.$store.state.record
  }
 type = this.record.type

  beforeCreate(){
    this.$store.commit('fetchTag')
  }
  selectedType(type: string){
    this.type=type
  }


  remove(tagId: string){
    this.$store.commit('removeTag',{id:tagId,type: this.type})
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

      > .icon-item {
        padding: 5px;
        margin-right: 10px;
        width: 35px;
        height: 35px;
        background-color:  #F2F2F2;
        border-radius:50% 50% 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;

      }
    }

    .add {
      padding-left: 5px;
    }
  }
}

</style>