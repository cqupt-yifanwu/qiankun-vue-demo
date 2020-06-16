<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    这里是B应用
    
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
    created () {
      window.onmessage = function(e) {
        e = e || event
        // alert(e.data)
      }
    },
    methods: {
    },
  };
</script>
