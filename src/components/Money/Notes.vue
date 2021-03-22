<template>
  <label class="notes" >
    <span class="notes-icon">
      <Icon name="备注"/>
    </span>
    <span class="name">{{ this.fieldName }}</span>
    <input type="text" class="beizhu"
            :value="value"
           :placeholder="this.placeholder"
           @input="onValueChange($event.target.value)"

           >
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default:''}) value!: string
  @Prop() fieldName!: string
  @Prop() placeholder!: string

  // @Watch('value')
  onValueChange(value: string){
    this.$emit('update:value',value)
  }

}
</script>

<style lang="scss" scoped>
.notes{
  border-top: 1px solid #f5f5f5;
  padding: 4px 8px;
  font-size: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  >.notes-icon{
    margin-right: 2px;
    >.icon{
      width: 2em;
      height: 2em;
      vertical-align: -0.35em;
      overflow: hidden;
      fill: currentColor;
    }
  }
  .name{
    white-space: nowrap;
    font-size: 14px;
  }
  .beizhu{
    flex-grow: 1;
    margin-left: 8px;
    height: 32px;
    border: none;
    background: #fff;
  }

}
</style>