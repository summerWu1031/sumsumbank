<template>
  <layout content-class="tagsGrow" >

    <Type :type.sync="record.type" />
    <Tags  @update:tags="onUpdateTags" :selected="record.tags" :type="record.type"/>
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
import {Component} from 'vue-property-decorator';



@Component({
  components:{NumberPad,  Notes, Tags, Type},
  // computed:{
  //   recordList(){
  //     return this.$store.state.recordList
  //   }
  // }
})

export default class Money extends Vue{
  // payment = store.payment
  // income = store.income

  record: RecordItem={
    tags:['餐饮'],notes:'',type:'-',amount:0
   };
  created(){
    this.$store.commit('fetchRecord')

  }
   onUpdateNotes(notes: string){
     this.record.notes=notes
   }
  onUpdateTags(tag: string[]){
    this.record.tags=tag
  }

  saveRecord(){
    this.$store.commit('createRecord',this.record)
  }

}
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
