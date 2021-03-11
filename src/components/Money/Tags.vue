<template>
  <div class="tags">
    <ul class="current" v-if="this.type==='-'">
      <li v-for="tag in this.payment" :key="tag.id" @click="toggle(tag)" >
        <div class="icon-item" :class="{selected:selectedTag.indexOf(tag)>=0}">
         <Icon  :name="tag.icon"/>
        </div>
        <span>{{tag.name}}</span>
      </li>
      <li >
        <router-link to="/newlabel" class="icon-item">
          <Icon name="新增"/>
        </router-link>
        <span>新增</span>
      </li>
    </ul>
    <ul class="current" v-else>
      <li v-for="tag in income" :key="tag.id" @click="toggle(tag)" >
        <div class="icon-item" :class="{selected:selectedTag.indexOf(tag)>=0}">
          <Icon  :name="tag.icon"/>
        </div>
        <span>{{tag.name}}</span>
      </li>
      <li >
        <router-link to="/newlabel" class="icon-item">
          <Icon name="新增"/>
        </router-link>
        <span>新增</span>
      </li>
    </ul>
  </div>
</template>

<script >
import store from "@/store/index2";


export default {
  name: 'Tags',
  props:['selected','type'],

  data(){
    return{
      selectedTag:this.selected,
      payment: store.payment,
      income: store.income
    }
  },
  methods: {
    toggle(tag) {
      const index = this.selectedTag.indexOf(tag);
      if (this.selectedTag.length === 0) {
        this.selectedTag.push(tag)
      } else {
        this.selectedTag.splice(index, 1);
        this.selectedTag.push(tag)
      }
      this.$emit('update:tags', this.selectedTag)
    },
  }
};
</script>

<style lang="scss" scoped>
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
        font-size: 24px;
        &.selected{
          background-color: #FED330;
        }
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
</style>