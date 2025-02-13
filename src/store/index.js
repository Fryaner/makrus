import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)

    function openBurgerMenu() {
        isActive.value = !isActive.value
    }
  
    return { isActive, openBurgerMenu }
  })