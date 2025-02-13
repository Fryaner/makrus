import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)

    function openBurgerMenu() {
        isActive.value = !isActive.value
        document.body.classList.toggle('active')
        document.documentElement.classList.toggle('active')
    }
  
    return { isActive, openBurgerMenu }
  })