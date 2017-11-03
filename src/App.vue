<template>
  <div id="app">
    <router-view></router-view>
    <!-- <cinput></cinput> -->
  </div>
</template>

<script>
// import cinput from './components/c-input'
export default {
  name: 'app'
  // components: {cinput}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
