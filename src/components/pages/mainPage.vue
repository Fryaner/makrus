<script setup>
import Banner from '@/components/banner/index.vue'
import TypeDefangers from '@/components/typesDefangers/index.vue'
</script>

<template>
    <Banner/>
    <main class="main">
        <TypeDefangers/>   
    </main>
</template>

<style lang="scss" scoped>
  .main {
    padding: 0 10px;
  }
</style>