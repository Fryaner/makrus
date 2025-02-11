<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <Header/>
      <RouterView/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
</style>
