<template>
  <div id="app">
    <custom-header/>
    <router-view/>
    <custom-footer/>
  </div>
</template>

<script>
import CustomFooter from './components/CustomFooter.vue'
import CustomHeader from './components/CustomHeader.vue'

export default {
  components: { CustomFooter, CustomHeader },
  name: 'App'
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
