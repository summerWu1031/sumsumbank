<template>
  <layout>
    <div>
      <span> x </span>
      <span>编辑标签</span>
    </div>
    <Notes placeholder="请编辑标签名" field-name="标签："/>
    <template v-slot:footer >
      <Nav />
    </template>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import Notes from '@/components/Money/Notes.vue';
@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
//   created(){
//     const id = this.$route.params.id
//     tagListModel.fetch()
//     const tags = tagListModel.data
//     const tag = tags.filter(t => t.id===id)[0]
//     if(tag){
//       console.log(tag);
//     }else {
//       this.$router.replace('/404')
//     }
//   }
}
</script>

<style lang="scss" scoped>

</style>