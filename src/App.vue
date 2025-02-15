<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import { useCounterStore } from '@/store/index'

const store = useCounterStore()
</script>

<template>
    <div class="wrapper" :class="{active: store.isActive}">
      <Header/>  
        <div class="flex-1">
            <RouterView/>
        </div>

      <Footer/>
    </div>
</template>
<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh
}
.wrapper.active {
  overflow: hidden;
  height: 100vh;
}
.flex-1 {
  flex: 1;
}
</style>
