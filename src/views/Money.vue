<template>
  <layout content-class="tagsGrow" >
    <Type/>
    <Tags/>
    <Notes/>
    <Panel/>
    <NumberPad/>
  </layout>
</template>

<script lang="ts">
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Panel from '@/components/Money/Panel.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
export default {
  name:'Money',
  components: {NumberPad, Panel, Notes, Tags, Type},

};
</script>

<style lang="scss">
 .tagsGrow{
   display: flex;
   flex-direction: column;
 }
</style>
