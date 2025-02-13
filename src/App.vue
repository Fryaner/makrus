<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
import { useCounterStore } from '@/store/index'

const store = useCounterStore()
</script>

<template>
    <div class="wrapper" :class="{active: store.isActive}">
        <Header/>  
        <RouterView/>
        </div>
</template>
<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
}
.wrapper.active {
  overflow: hidden;
  height: 100vh;
}
</style>
