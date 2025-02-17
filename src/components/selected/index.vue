<template>
    <section>
        <Title>
            <template #title>КАКИЕ СИСТЕМЫ ПОДОЙДУТ ВАМ?</template>
            <template #sub-title>Калькулятор примерной системы для Вас</template>
        </Title>
        <div class="calculation">
            <div class="calculation__values">
                <div class="calculation__iron">
                    <label>Железо</label>
                    <select v-model="state.iron">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
                <div class="calculation__scum">
                    <label>Накипь</label>
                    <select v-model="state.scum">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
                <div class="calculation__smell">
                    <label>Запах</label>
                    <select v-model="state.smell">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
                <div class="calculation__color">
                    <label>Цвет</label>
                    <select v-model="state.color">
                        <option value="" selected disabled hidden>Нажмите, чтобы выбрать</option>
                        <option value="Да">Да</option>
                        <option value="Нет">Нет</option>
                    </select>
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
                        <button @click="calcuatedresult1()">Рассчитать</button>
                    </div>
                    <p class="calculation__note">*Примечание: Данные расчёты примерные и необходим детальный расчет на основании анализа воды.</p>
            </div>
            <section class="calculation__result1">
                <Transition name="slide-fade">
                    <div class="calculation__result1" v-if="result1.length">
                        <h4 class="result1__title">На основе введенных  данных вам лучше всего подойдет</h4>
                        <div class=result__results>
                            <div class="result1__all">
                                <section class="result1__info">
                                    <h5 v-for="(item,number) of result1" class="result1__sub-title"><span>{{ (number + 1) }}.</span> {{ item }}</h5>
                                    <div class="result1__btn">
                                        <button @click="openModal(result1)">Оформить заказ</button>
                                    </div>
                                </section>                      
                            </div>
                            <div class="result1__all" v-if="result2.length">
                                <section class="result1__info">
                                    <h5 v-for="(item,number) of result2" class="result1__sub-title"><span>{{ (number + 1) }}.</span> {{ item }}</h5>
                                    <div class="result1__btn">
                                        <button @click="openModal(result2)">Оформить заказ</button>
                                    </div>
                                </section>                      
                            </div>
                        </div>
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

import { useCounterStore } from '@/store/index'
const store = useCounterStore()

function openModal(text) {
    store.changePopUp()
    store.changeTitile('Оформить заказ')
    store.changeSubTitile(text)
    store.changeType(1)
}

const state = reactive({
    iron: '',
    smell: '',
    water: '',
    scum: '',
    color: '',
})
const result1 = ref([])
const result2 = ref([])

const rules = computed(() => {
    return {
        water: { required }, 
    }
})

const v$ = useVuelidate(rules, state)

async function calcuatedresult1() {
    const isValidate = await v$.value.$validate();
    console.log(isValidate)
    if(!isValidate) {
        return
    }
    result1.value = []
    result2.value = []
    if (state.water === 'Скважина') {
        if (state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');

            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Угольный фильтр');
            result2.value.push('Аэрация');
        } else if (state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');

            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель2в1');
            result2.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.scum === 'Да' && state.smell === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация и угольный фильтр');

            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация и угольный фильтр');
        } else if (state.iron === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        } else if (state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');

            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация');
            result2.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.scum === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');

            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1 ');
        } else if (state.iron === 'Да' && state.color === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.smell === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');
        } else if (state.scum === 'Да' && state.color === 'Да') {
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');

            result2.value.push('Умягчитель 2в1');
            result2.value.push('Угольный фильтр');
        } else if (state.scum === 'Да' && state.smell === 'Да') {
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');

            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация');
            result2.value.push('Угольный фильтр');
        } else if (state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        } else if (state.iron === 'Да') {
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
        } else if (state.scum === 'Да') {
            result1.value.push('Умягчитель классический');
            result2.value.push('Умягчитель 2в1');
        } else if (state.color === 'Да') {
            result1.value.push('Угольный фильтр');
        } else if (state.smell === 'Да') {
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        }
  } else {
    if (state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');

            result2.value.push('Механический фильтр');
            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Угольный фильтр');
            result2.value.push('Аэрация');
        } else if (state.iron === 'Да' && state.scum === 'Да' && state.color === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');

            result2.value.push('Механический фильтр');
            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель2в1');
            result2.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.scum === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация и угольный фильтр');

            result2.value.push('Механический фильтр');
            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация и угольный фильтр');
        } else if (state.iron === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        } else if (state.scum === 'Да' && state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');

            result2.value.push('Механический фильтр');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация');
            result2.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.scum === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Умягчитель классический');

            result2.value.push('Механический фильтр');
            result2.value.push('Обезжелезиватель');
            result2.value.push('Фильтр грубой очистки');
            result2.value.push('Умягчитель 2в1 ');
        } else if (state.iron === 'Да' && state.color === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Угольный фильтр');
        } else if (state.iron === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');
        } else if (state.scum === 'Да' && state.color === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Умягчитель классический');
            result1.value.push('Угольный фильтр');

            result2.value.push('Механический фильтр');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Угольный фильтр');
        } else if (state.scum === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Умягчитель классический');
            result1.value.push('Аэрация');
            result1.value.push('Угольный фильтр');

            result2.value.push('Механический фильтр');
            result2.value.push('Умягчитель 2в1');
            result2.value.push('Аэрация');
            result2.value.push('Угольный фильтр');
        } else if (state.color === 'Да' && state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        } else if (state.iron === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Обезжелезиватель');
            result1.value.push('Фильтр грубой очистки');
        } else if (state.scum === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Умягчитель классический');

            result2.value.push('Механический фильтр');
            result2.value.push('Умягчитель 2в1');
        } else if (state.color === 'Да') {
            result1.value.push('Угольный фильтр');
        } else if (state.smell === 'Да') {
            result1.value.push('Механический фильтр');
            result1.value.push('Угольный фильтр');
            result1.value.push('Аэрация');
        }
  }
}
</script>

<style lang="scss" scoped>
.result {
    &__results {
        display: flex;
        gap: 50px;

        @media screen and (max-width: $mobile-max-width) {
            flex-direction: column;
        }
    }
}
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
            background-image: url('@/assets/icons/iron.svg');
        }
    }

    &__smell {
        grid-area: Smell;

        select {
            background-image: url('@/assets/icons/smell.svg');
        }
    }

    &__scum {
        grid-area: Crum;

        select {
            background-image: url('@/assets/icons/scum.svg');
        }
    }

    &__water {
        grid-area: Water;

        select {
            background-image: url('@/assets/icons/water.svg');
        }
    }

    &__color {
        grid-area: Col;

        select {
            background-image: url('@/assets/icons/color.svg');
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

    &__result1 {
        display: flex;
        flex-direction: column;
        gap: 20px;


        
    }
}

.result1 {
    &__all {
        display: flex;
        gap: 40px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

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
        text-wrap: nowrap;

        span {
            color: $color-light-blue;
        }

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
            text-wrap: nowrap;

            @media screen and (max-width: $desctop-small-max-width) {
                flex: 1;
            }

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
        flex: 1;
    }
}
</style>