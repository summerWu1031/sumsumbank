<template>
  <layout content-class="tagsGrow" >
    <Type :type.sync="record.type" />
    <Tags  @update:tags="onUpdateTags" :selected.sync="record.tags" :type="record.type"/>
    <Notes
           :value.sync="record.notes"
            field-name="备注:"
      placeholder='请输入备注'/>
    <NumberPad @button="record.notes=''" @submit="saveRecord" @update:value="onUpdateAmount"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
@Component({
  components:{NumberPad,  Notes, Tags, Type},
})
export default class Money extends Vue{
 get record(){
   return  this.$store.state.record
 }
  created(){
    this.$store.commit('fetchRecord')

  }

  onUpdateTags(tag: Tag[]){
    this.record.tags=tag
  }
  onUpdateAmount(amount: string){
   this.record.amount = amount
  }

  saveRecord(){
   if(!this.record.tags[0].name){
    return   window.alert('请选择标签')
   }
    this.$store.commit('createRecord',this.record)
    this.record.tags=[{}]
  }

}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
