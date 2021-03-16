<template>
  <div class="tabWrapper" :class="{[classPrefix+'-tabWrapper']: classPrefix}">
    <ul class="tab" :class="{[classPrefix+'-tab']: classPrefix}" >
      <li v-for="item in dataSource " :key="item.value"
          class="tab-bar-item"
          :class="{[classPrefix+'-tabs-item']: classPrefix,selected: item.value===value}"
          @click="select(item)">{{item.text}} </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {text: string ; value: string}
@Component
export default class Tabs extends Vue {
  @Prop(String) classPrefix?: string
  @Prop() readonly value!: string
  @Prop() dataSource!: DataSourceItem[]

  select(item: DataSourceItem ){
    this.$emit('update:value', item.value)
  }
}
</script>

<style lang="scss" scoped>
.tabWrapper{
  background-color: #FED330;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
}
.tab{
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


</style>