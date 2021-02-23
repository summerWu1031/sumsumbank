<template>
  <layout >
    <p >labels.vue</p>
    <template v-slot:footer >
      <Nav />
    </template>
  </layout>
</template>

<script lang="ts">
export default {
  name: 'labels',
};
</script>

<style lang="scss" scoped>
.wrapper {

  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;

  overflow: auto;
}
</style>