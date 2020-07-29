<template>
  <div class="about">
    <h1>This is about page</h1>
    <p @click="click">点击跳转到A</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  methods: {
    click() {
      history.pushState(null, '/subA', '/subA')
    }
  }
}
</script>

<style scoped>
  .about {
    color: #7265e6;
  }
</style>
