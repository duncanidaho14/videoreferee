<template>
  <div id="app">
    <div class="sidebar">
      <router-link to="/HelloWorld"></router-link>
      <router-link to="/FootballClassement"></router-link>
      <router-link to="/GoogleMap"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'App',
  component: 'GoogleMap'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
