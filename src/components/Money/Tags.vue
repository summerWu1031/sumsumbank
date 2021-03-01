<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)" >
        <div class="icon-item" :class="{selected:selectedTag.indexOf(tag)>=0}">
         <Icon  :name="tag"/>
        </div>
        <span>{{tag}}</span>
      </li>
      <li @click="create" >
        <div class="icon-item">
          <Icon name="新增"/>
        </div>
        <span>新增</span>
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  name: 'Tags',
  props:['dataSource'],
  data(){
    return{
      selectedTag:[],
      newTags:[]
    }
  },
  methods:{
    toggle(tag) {
      const index = this.selectedTag.indexOf(tag);
      if(this.selectedTag.length===0){
        this.selectedTag.push(tag)
      }else {
        this.selectedTag.splice(index, 1);
        this.selectedTag.push(tag)
      }
      this.$emit('update:tags',this.selectedTag)
    },
    create(){
      const name = window.prompt('请输入标签名');
      if(!name){
        window.alert('标签名不能为空')
      }else if(this.dataSource){
        this.$emit('update:dataSource',[...this.dataSource,name])
      }
    }
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