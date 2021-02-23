<template>
  <label class="notes" >
    <div class="notes-icon">
      <Icon name="备注"/>
    </div>
    <span class="name">备注：</span>
    <input type="text" class="beizhu" placeholder="在这里输入备注">
  </label>
</template>

<script lang="ts">
export default {
  name: 'Notes'
};
</script>

<style lang="scss" scoped>
.notes{
  border-top: 1px solid #f5f5f5;
  padding: 4px 8px;
  font-size: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  >.notes-icon{
    margin-right: 2px;
    >.icon{
      width: 2em;
      height: 2em;
      vertical-align: -0.35em;
      overflow: hidden;
      fill: currentColor;
    }
  }
  .name{
    white-space: nowrap;
    font-size: 14px;
  }
  .beizhu{
    flex-grow: 1;
    margin-left: 8px;
    height: 32px;
    border: none;
    background: #fff;
  }

}
</style>