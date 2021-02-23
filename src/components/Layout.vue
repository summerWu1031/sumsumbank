<template>
  <div class="wrapper">
    <div class="content" :class="contentClass">
      <slot/>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout',
  props:['contentClass']
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