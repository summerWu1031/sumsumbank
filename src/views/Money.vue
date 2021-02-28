<template>
  <layout content-class="tagsGrow" >
    <Type/>
    <Tags :data-source.sync="tags" />
    <Notes/>
    <NumberPad/>
  </layout>
</template>

<script lang="ts">
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

export default {
  name:'Money',
  components: {NumberPad,  Notes, Tags, Type},
  data(){
    return{
      tags:[
        '餐饮','娱乐','交通','水果','零食','购物'
      ]
    }
  }
};
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
