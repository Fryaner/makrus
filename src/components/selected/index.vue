<template>
    <section>
        <Title>
            <template #title>КАКИЕ СИСТЕМЫ ПОДОЙДУТ ВАМ?</template>
            <template #sub-title>Чтобы выбрать подходящий для вас размер колонны необходимо заполнить форму ниже</template>
        </Title>
        <div class="calculation">
            <div class="calculation__values">
                <div class="calculation__iron">
                    <label>Железо v</label>
                    <select v-model="state.iron" :class="{ error: v$.iron.$errors.length }">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                    <p v-if="v$.iron.$errors.length" :class="{ errorText: v$.iron.$errors.length }">Выберите хотя бы один вариант ответа</p>
                </div>
                <div class="calculation__scum">
                    <label>Накипь v</label>
                    <select v-model="state.scum" :class="{ error: v$.scum.$errors.length }">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                    <p v-if="v$.scum.$errors.length" :class="{ errorText: v$.scum.$errors.length }">Выберите хотя бы один вариант ответа</p>
                </div>
                <div class="calculation__smell">
                    <label>Запах v</label>
                    <select v-model="state.smell" :class="{ error: v$.smell.$errors.length }">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                    <p v-if="v$.smell.$errors.length" :class="{ errorText: v$.smell.$errors.length }">Выберите хотя бы один вариант ответа</p>
                </div>
                <div class="calculation__color">
                    <label>Цвет v</label>
                    <select v-model="state.color" :class="{ error: v$.color.$errors.length }">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                    <p v-if="v$.color.$errors.length" :class="{ errorText: v$.color.$errors.length }">Выберите хотя бы один вариант ответа</p>
                </div>
                <div class="calculation__water">
                    <label>Источник воды</label>
                    <select v-model="state.water" :class="{ error: v$.water.$errors.length }">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Скважина">Скважина</option>
                        <option value="Колодец">Колодец</option>
                        <option value="Магистральная">Магистральная</option>
                    </select>
                    <p v-if="v$.water.$errors.length" :class="{ errorText: v$.water.$errors.length }">Выберите хотя бы один вариант ответа</p>
                </div>
                    <div class="calculation__btn">
                        <button @click="calcuatedResult()">Рассчитать</button>
                    </div>
                    <p class="calculation__note">*Примечание: Данные расчёты примерные и необходим детальный расчет на основании анализа воды.</p>
            </div>
            <section class="calculation__result">
                <Transition name="slide-fade">
                    <div class="calculation__result" v-if="result.length">
                        <h4 class="result__title">На основе введенных  данных вам лучше всего подойдет</h4>
                        <section class="result__info">
                            <h5 class="result__sub-title" v-for="item of result">{{ item }}</h5>
                            <div class="result__btn">
                                <button>Оформить заказ</button>
                            </div>
                        </section>
                    </div>
                </Transition>
            </section>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const state = reactive({
    iron: '',
    smell: '',
    water: '',
    scum: '',
    color: '',
})
const result = ref([])

const rules = computed(() => {
    return {
        iron: { required }, 
        smell: { required }, 
        water: { required }, 
        scum: { required }, 
        color: { required }, 
    }
})

const v$ = useVuelidate(rules, state)

async function calcuatedResult() {
    const isValidate = await v$.value.$validate();
    console.log(isValidate)
    if(!isValidate) {
        return
    }
    if (state.water === 'Скважина') {
    if (state.iron === 'Да') {
        result.value = []
        result.value.push('Обезжилезиватель и фильтр грубой очистки')
    }
    if (state.scum === 'Да') 
    {
        result.value = []
        result.value.push('Обезжилезиватель или умягчитель 2в1')
    }
    if (state.color === 'Да') {
        result.value = []
        result.value.push('Угольный фильтр') 
    }
    if (state.smell === 'Да') {
        result.value = []
        result.value.push('Аэрация и угольный фильтр')
    }
    if(state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
        result.value = []
        result.value.push('Обезжилезиватель и фильтр грубой очистки')
        result.value.push('Обезжилезиватель или умягчитель 2в1')
        result.value.push('Угольный фильтр')
        result.value.push('Аэрация и угольный фильтр')
    }
  } else {
    if (state.iron === 'Да') {
        result.value = []
        result.value.push('Механический фильтр, обезжилезиватель и фильтр грубой очистки')
    }
    if (state.scum === 'Да') 
    {
        result.value = []
        result.value.push('Механический фильтр, обезжилезиватель или умягчитель 2в1')
    }
    if (state.color === 'Да') {
        result.value = []
        result.value.push('Механический фильтр, угольный фильтр') 
    }
    if (state.smell === 'Да') {
        result.value = []
        result.value.push('Механический фильтр, аэрация и угольный фильтр')
    }
    if(state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
        result.value = []
        result.value.push('Обезжилезиватель и фильтр грубой очистки')
        result.value.push('Обезжилезиватель или умягчитель 2в1')
        result.value.push('Угольный фильтр')
        result.value.push('Аэрация и угольный фильтр')
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.errorText {
    font-size: 14px;
    color: rgba(255, 59, 59, 0.877);
}
.calculation {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__values {
        display: grid;
        grid-template-areas:
        "Iron Smell Water"
        "Crum Col Button"
        "Note Note Note";
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        align-items: flex-start;

        @media screen and (max-width: $tablet-max-width){
            grid-template-areas:
            "Iron Smell"
            "Water Crum"
            "Col Button"
            "Note Note";
        grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: $mobile-max-width){
            grid-template-areas:
            "Iron"
            "Smell"
            "Crum"
            "Water"
            "Col"
            "Button"
            "Note";
            grid-template-columns: 1fr;
        }
    }

    &__iron, &__smell, &__scum, &__water, &__color, &__btn {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
            font-size: 20px;
            color: $color-black;
            font-weight: 600;

            @media screen and (max-width: $tablet-max-width){
                font-size: 16px;
            }

            @media screen and (max-width: $mobile-max-width){
                font-size: 14px;
            }
        }

        select {
            flex: 1;
            padding: 10px 10px 10px 40px;
            border-radius: 10px;
            border: 1px solid $color-black;
            background-repeat: no-repeat;
            background-position: 10px center;

            &.error {
                border: 1px solid rgba(255, 59, 59, 0.877);
            }
        }
    }

    &__iron {
        grid-area: Iron;

        select {
            background-image: url('@/assets/icons/iron.png');
        }
    }

    &__smell {
        grid-area: Smell;

        select {
            background-image: url('@/assets/icons/smell.png');
        }
    }

    &__scum {
        grid-area: Crum;

        select {
            background-image: url('@/assets/icons/scum.png');
        }
    }

    &__water {
        grid-area: Water;

        select {
            background-image: url('@/assets/icons/water.png');
        }
    }

    &__color {
        grid-area: Col;

        select {
            background-image: url('@/assets/icons/color.png');
        }
    }

    &__btn {
        display: flex;
        justify-content: flex-end;
        height: 100%;
        button {
            transition: .5s;
            cursor: pointer;
            grid-area: Button;
            background-color: $color-dark-blue;
            border: 1px solid $color-dark-blue;
            color: $color-white;
            padding: 12px;
            font-size: 20px;
            font-weight: 700;
            border-radius: 30px;

            @media (hover: hover) {
                &:hover {
                    background-color: $color-white;
                    border: 1px solid $color-dark-blue;
                    color: $color-dark-blue; 
                }
            }

            @media screen and (max-width: $tablet-max-width){
                font-size: 16px;
            }
    }
    }

    &__note {
        grid-area: Note;
        color: $color-red;
        font-size: 20px;

        @media screen and (max-width: $tablet-max-width){
            font-size: 16px;
        }

        @media screen and (max-width: $mobile-max-width){
            font-size: 12px;
        }
    }

    &__result {
        display: flex;
        flex-direction: column;
        gap: 20px;


        
    }
}

.result {
    &__title {
        font-size: 24px;
        font-weight: 700;
        color: $color-black;

        @media screen and (max-width: $tablet-max-width){
            font-size: 20px;
        }
    }

    &__sub-title {
        font-size: 20px;
        font-weight: 700;
        color: $color-black;

        @media screen and (max-width: $tablet-max-width){
            font-size: 16px;
        }
    }

    &__btn {
        display: flex;
        button {
            cursor: pointer;
            padding: 15px 100px;
            font-size: 20px;
            color: $color-white;
            background-color: $color-dark-blue;
            border: 1px solid $color-dark-blue;
            border-radius: 30px;
            font-weight: 700;

            @media (hover: hover) {
                &:hover {
                    color: $color-dark-blue;
                background-color: $color-white;
                border: 1px solid $color-dark-blue;  
                }
            }

            @media screen and (max-width: $tablet-max-width){
                font-size: 16px;
            }

            @media screen and (max-width: $tablet-max-width){
                width: 100%;
            }
        }
    }

    &__info {
        display: flex;
        gap: 15px;
        flex-direction: column;
    }
}
</style>