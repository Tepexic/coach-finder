<template>
  <TheHeader/>
  <router-view></router-view>
</template>

<script>
  import TheHeader from './components/layout/TheHeader'

  export default {
    components: { TheHeader }  
  }
</script>

<style>
  @import './assets/styles.css';
</style>