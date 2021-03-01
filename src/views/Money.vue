<template>
  <layout content-class="tagsGrow" >
    {{record}}
    <Type :type.sync="record.type" />
    <Tags :data-source.sync="tags" @update:tags="onUpdateTags"/>
    <Notes @update:notes="onUpdateNotes"/>
    <NumberPad :value.sync="record.amount"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';

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
  record: Record={
    tags:[],notes:'',type:'-',amount:0
   };
   onUpdateNotes(notes: string){
     this.record.notes=notes
   }
  onUpdateTags(tag: string[]){
    this.record.tags=tag
  }

}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
