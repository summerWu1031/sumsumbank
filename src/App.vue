<template>
  <div id="app">
    <router-view :key="this.$route.path + Math.random()"/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/helper.scss";
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
ul,ol{
  list-style: none;
}
:focus{
  outline: none;
}
#app{
  font-family: $font-hei;
  line-height: 1.5;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
