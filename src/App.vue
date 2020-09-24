<template>
  <TheHeader/>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheHeader from './components/layout/TheHeader.vue';

@Options({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
@import './assets/styles.css';
</style>
