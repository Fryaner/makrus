<script setup>
import Banner from '@/components/banner/index.vue'
import TypeDefangers from '@/components/typesDefangers/index.vue'
import Softening from '@/components/Softening/index.vue'
import Osmosis from '@/components/osmosis/index.vue'
import Selected from '@/components/selected/index.vue'
</script>

<template>
    <Banner/>
    <main class="main">
        <TypeDefangers/>   
        <Softening/>
        <Osmosis/>
        <Selected/>
        <p>fd</p>
        <p>fd</p>
        <p>fd</p>
        <p>fd</p>
        <p>fd</p>
        <p>fd</p>
              <p>fd</p>
                    <p>fd</p>
                          <p>fd</p>
                          <p>fd</p>
                          <p>fd</p>
    </main>
</template>

<style lang="scss" scoped>
  .main {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 150px;

  @media screen and (max-width: $mobile-max-width) {
    gap: 50px;
  }
}
</style>