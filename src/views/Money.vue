<template>
  <layout content-class="tagsGrow" >
    {{recordList}}
    <Type :type.sync="record.type" />
    <Tags :data-source="tags" @update:tags="onUpdateTags" :selected="record.tags"/>
    <Notes @update:xxx="onUpdateNotes"
      field-name="备注:"
      placeholder="请输入备注"/>
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
import recordListModel from '../models/recordListModel';
import tagListModel from '@/models/tagListModel';

//作为全局类型放到了全局custom.d.ts文件里面了
// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number;
//   createAt?: Date;
// }

const recordList = recordListModel.fench()
const tabList =  tagListModel.fetch()

@Component({
  components:{NumberPad,  Notes, Tags, Type}
})
export default class Money extends Vue{
  tags=tabList;
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
     const record2 =recordListModel.clone(this.record)//深拷贝
     record2.createAt = new Date()
     this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
     recordListModel.save(this.recordList)
  }
}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
