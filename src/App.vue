<template>
  <div id="app">
    <header-cmpt />
    <index />
  </div>
</template>

<script>
import index from './example/index.vue'
import headerCmpt from './example/header.vue'

export default {
  name: 'App',
  components: {
    headerCmpt,
    index
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
  height: 100%;
}
</style>
