<template>
  <div  class="panel">0</div>
</template>

<script lang="ts">
export default {
  name: 'Panel'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.panel{
  background: #f5f5f5;
  padding: 6px 12px;
  font-size: 24px;
  line-height: 24px;
  font-family: Consolas,monospace;
  text-align: right;
  @extend %innerShadow;
}
</style>