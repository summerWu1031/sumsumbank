<template>
  <layout content-class="tagsGrow" >
    <Type :type.sync="record.type" />
    <Tags :data-source="tags" @update:tags="onUpdateTags" :selected="record.tags"/>
    <Notes @update:notes="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '../../model';

//作为全局类型放到了全局custom.d.ts文件里面了
// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number;
//   createAt?: Date;
// }

const recordList = model.fench()

@Component({
  components:{NumberPad,  Notes, Tags, Type}
})
export default class Money extends Vue{
  tags=['餐饮','娱乐','交通','水果','零食','购物'];
  recordList: RecordItem[] =recordList
  record: RecordItem={
    tags:['餐饮'],notes:'',type:'-',amount:0
   };
   onUpdateNotes(notes: string){
     this.record.notes=notes
   }
  onUpdateTags(tag: string[]){
    this.record.tags=tag
  }
  saveRecord(){
     const record2 =model.clone(this.record)//深拷贝
     record2.createAt = new Date()
     this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
     model.save(this.recordList)
  }
}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
