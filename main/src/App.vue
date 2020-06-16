<template>
  <div id="micapp">
    <ul class="mainapp-sidemenu">
      <li @click="push('/subA')">subA</li>
      <li @click="push('/subB')">subB</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
    methods: {
      push (subapp) {
        history.pushState(null, subapp, subapp)
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
