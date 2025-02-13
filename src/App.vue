<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
</script>

<template>
      <Header/>
      <main class="main">      
        <RouterView/>
      </main>
</template>
<style scoped>
  .main {
    padding: 0 10px;
  }
</style>
