<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import { useCounterStore } from '@/store/index'

const store = useCounterStore()
</script>

<template>
    <div class="wrapper" :class="[
      {active: store.isActive}, 
      {overlay: store.isOverlay}
    ]">
      <Header/>  
        <div class="flex-1">
            <RouterView/>
            <Form></Form>
        </div>
      <Footer/>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
  &:after {
    transition: .5s;
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: inherit;
      z-index: -1;
      opacity: 0.5;
    }

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh
}
.wrapper.overlay {
  position: relative;
  
    &:after {
      background-color: black;
      z-index: 1;
    }
}
.wrapper.active {
  overflow: hidden;
}
.flex-1 {
  flex: 1;
}
</style>
