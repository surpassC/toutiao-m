<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-nav-bar
      title="标题"
      fixed
    />
    <van-button type="danger">危险按钮</van-button>
    <van-divider content-position="left">文字</van-divider>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store'
console.log(store.state)
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
