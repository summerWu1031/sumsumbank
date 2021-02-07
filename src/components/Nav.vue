<template>
  <nav>
    <router-link class="item"  active-class="light" to="/money">
      <Icon  name="money"/>
      记账
    </router-link>

    <router-link class="item" active-class="light" to="/labels">
      <Icon   name="labels"/>
      标签
    </router-link>

    <router-link class="item" active-class="light" to="/statistics">
      <Icon  name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">


import Icon from '@/components/Icon.vue';

export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
nav{
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >.item{
    display: flex;
    flex-direction: column;
    width: 33.33%;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .icon{
    width: 32px;
    height: 32px;

  }

  .light{

    background-color:  #FED330;
  }
}
</style>