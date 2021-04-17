<template>
  <div id="app">
    <img style="width:40%" alt="Vue logo" src="./assets/logo.jpeg">
    <router-view/>
    <custom-footer/>
  </div>
</template>

<script>
import CustomFooter from './components/CustomFooter.vue'

export default {
  components: { CustomFooter },
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
