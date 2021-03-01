<template>
  <layout content-class="tagsGrow" >
    {{recordList}}
    <Type :type.sync="record.type" />
    <Tags :data-source="tags" @update:tags="onUpdateTags"/>
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

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}

@Component({
  components:{NumberPad,  Notes, Tags, Type}
})
export default class Money extends Vue{
  tags=['餐饮','娱乐','交通','水果','零食','购物'];
  recordList: Record[] =JSON.parse(window.localStorage.getItem('recordList' )|| '[]')
  record: Record={
    tags:[],notes:'',type:'-',amount:0
   };
   onUpdateNotes(notes: string){
     this.record.notes=notes
   }
  onUpdateTags(tag: string[]){
    this.record.tags=tag
  }
  saveRecord(){
     const record2 =JSON.parse(JSON.stringify(this.record) )
     this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
     window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
