<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Vue.js Demo"/>
  </div>

</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'home',
    components: {
      HelloWorld,
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    methods: {
    },
  };
</script>
