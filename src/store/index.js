import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const isActive = ref(false)
    const type = ref(0)
    let title = ref('')
    let subTitle = ref('')
    const isOpen = ref(false);
    const isOverlay = ref(false);
    const isSogals = ref(false)

    function changePopUp() {
        title.value = ''
        subTitle.value = ''
        document.body.classList.toggle('open')
        isOverlay.value = !isOverlay.value
        isOpen.value = !isOpen.value
        isActive.value = false
        isSogals.value = false
    }

    function changeTitile(text) {
        title.value = text
    }

    function changeSubTitile(text) {
        subTitle.value = text
    }

    function changeType(text) {
        type.value = text
    }

    function openBurgerMenu() {
        isActive.value = !isActive.value
    }
  
    return { isActive, isSogals, isOpen,title,subTitle,type,isOverlay, openBurgerMenu, changePopUp, changeTitile, changeSubTitile, changeType }
  })