<template>
  <header>
    <nav class="md:flex md:justify-between md:items-center bg-gradient-to-r from-purple-700 to-blue-500 text-white shadow-lg">
      <div class="flex items-center justify-between p-2">
        <h1 class="text-2xl">
          <router-link to="/">Find a coach</router-link>
        </h1>
        <button class="md:hidden rounded p-2 border-2 transition duration-500 ease-in-out transform hover:scale-110" @click="toggleMenu">
          <svg class="w-6 fill-current md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div @click="toggleMenu">
        <ul class="block text-center md:flex md:flex-row" :class="[ menu ? 'hidden' : ''  ]">
          <li class="p-3 md:p-5">
            <router-link to="/coaches">All Coaches</router-link>
          </li>
          <li class="p-3 md:p-5">
            <router-link to="/requests">Requests</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'TheHeader',

  data() {
    return {
      menu: false
    }
  },

  methods: {
    toggleMenu: function () {
      return this.menu = !this.menu
    }
  }
})

export default class TheHeader extends Vue {}
</script>

<style scoped>
a {
  @apply p-2;
  @apply mx-4;
  @apply rounded-sm;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #fff;
}
</style>