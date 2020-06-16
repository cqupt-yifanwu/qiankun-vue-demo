<template>
  <div id="app">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>

      <p @click="click">点我有惊喜</p>

      <!-- <iframe ref="ifm" id="ifm" src="http://localhost:8081/#/about" frameborder="0"></iframe> -->

      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    click() {
      debugger
      const win = this.$refs.ifm.contentWindow
      win.postMessage('test123', '*')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
