<template>
  <nav  class="tab">
      <router-link class="item" active-class="selected"   to="/money"  >
            <Icon   name="money"/>
          记账
      </router-link>

      <router-link class="item" active-class="selected" to="/labels">
        <Icon   name="labels"/>
        标签
      </router-link>

      <router-link class="item" active-class="selected" to="/statistics">
        <Icon  name="statistics"/>
        统计
      </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';


@Component({
  components:{Icon},
})
export default class Nav extends Vue {





}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  @extend %outerShadow;

  > .item {
    display: flex;
    flex-direction: column;
    width: 33.33%;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
  .selected{
    color: #FED330;
  }
}
</style>