<template>
    <section class="form" v-show="store.isOpen">
        <button class="form__close" @click="store.changePopUp"><img src="@/assets/icons/close.svg" alt=""/></button>
        <div>
            <div class="form__title-block">
                <p v-if="store.type === 2">{{ store.stage }}</p>
                <h2 class="form__title">{{ store.title }}</h2>
            </div>
            <div>
                <h3>{{ store.subTitle }}</h3>  
                <h3 v-if="store.stage === 1">Где требуется установка очистки воды?</h3>
                <h3 v-if="store.stage === 2">Источник водоснабжения?</h3>
                <h3 v-if="store.stage === 3">Что-то ещё</h3> 
            </div>

        </div>
        <form action="https://formspree.io/f/mrbeyypl" @submit="send" ref="myForm" method="POST" autocomplete="off">
            <div class="form__main" v-if="store.type === 1">
                <div class="form__input">
                    <label :class="{ errorText: v$.name.$errors.length }" for="name">Имя</label>
                    <input id="name" :class="{ error: v$.name.$errors.length }" type="text" name="Имя" v-model="state.name"/>
                    <p :class="{ errorText: v$.name.$errors.length }" v-if="v$.name.$errors.length">Необходимо заполнить поле</p>
                </div>
                <div class="form__input">
                    <label for="name">Номер телефонв</label>
                    <input id="name" type="text" name="Номер телефона"/>
                </div>
                <div class="form__input">
                    <label for="name">Email</label>
                    <input id="name" type="text" name="Email"/>
                </div>
                <input v-show="false" v-model="store.title" name="Тип Заявки"/>
                <div v-if="store.subTitle">
                    <input v-show="false" v-model="store.subTitle" name="Тип Обороудования"/>
                </div>
                <div class="form__bottom">
                    <div class="form__btns">
                        <div class="form__btns-main">
                            <button type="submit" class="form__send" :disabled="!store.isSogals">Отправить</button>
                            <button class="form__close-2" type="button" @click="store.changePopUp">Отменить</button>
                        </div>
                    </div>
                    <div class="form__yes">
                        <label for="yes">Я соглашаюсь с <a href="">обработкой персональных данных</a></label>
                        <input id="yes" type="checkbox" v-model="store.isSogals"/>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-show="store.stage === 1">
                    <div class="form__main">
                        <div class="form__radio">
                            <label for="huey">В квартиру</label>
                            <input type="radio" id="huey" name="Где требуется установка очистки воды?" value="в квартиру" v-model="selectedOne"/>
                        </div>
                        <div class="form__radio">
                            <label for="dewey">В частном доме</label>
                            <input type="radio" id="dewey" name="Где требуется установка очистки воды?" value="в частном доме" v-model="selectedOne"/>
                        </div>
                        <div class="form__radio">
                            <label for="louie">В кафе и ресторане</label>
                            <input type="radio" id="louie" name="Где требуется установка очистки воды?" value="В кафе и ресторане" v-model="selectedOne"/>
                        </div>
                        <div class="form__input">
                            <label for="other1">Другой вариант или комментарий</label>
                            <input type="text" id="other1" name="Где требуется установка очистки воды?" v-model="selectedOneOther"/>
                        </div>
                            <input v-show="false" v-model="store.title" name="Тип Заявки"/>
                        <div class="form__bottom">
                            <div class="form__btns">
                                <div class="form__btns-main">
                                    <button type="button" class="form__send" :disabled="!(selectedOne || selectedOneOther)" @click="store.stage++" >Даллее</button>
                                    <button class="form__close-2" type="button" @click="store.changePopUp">Отменить</button>
                                </div>
                                <button class="form__skip" type="button" @click="store.stage++">Пропустить вопрос</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="store.stage === 2">
                    <div class="form__main">
                        <div class="form__radio">
                            <label for="huey">Скважина</label>
                            <input type="radio" id="huey" name="Источник водоснабжения?" value="Скважина" v-model="selectedTwo"/>
                        </div>
                        <div class="form__radio">
                            <label for="dewey">Колодец</label>
                            <input type="radio" id="dewey" name="Источник водоснабжения?" value="Колодец" v-model="selectedTwo"/>
                        </div>
                        <div class="form__radio">
                            <label for="louie">Водопровод</label>
                            <input type="radio" id="louie" name="Источник водоснабжения?" value="Водопровод" v-model="selectedTwo"/>
                        </div>
                        <div class="form__input">
                            <label for="other2">Другой вариант или комментарий</label>
                            <input type="text" id="other2" name="Источник водоснабжения?" v-model="selectedTwoOther"/>
                        </div>
                        <div class="form__bottom">
                            <div class="form__btns">
                                <div class="form__btns-main">
                                    <button type="button" class="form__send" :disabled="!(selectedTwo || selectedTwoOther)" @click="store.stage++">Даллее</button>
                                    <button class="form__close-2" type="button"  @click="store.stage--">Назад</button>
                                </div>
                                <button class="form__skip" type="button" @click="store.stage++">Пропустить вопрос</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="store.stage === 3">
                    <div class="form__main">
                        <div class="form__radio">
                            <label for="huey">Жёсткость (накипь)</label>
                            <input type="checkbox" id="huey" name="Что-то ещё" value="Жёсткость (накипь)" v-model="selectedThree"/>
                        </div>
                        <div class="form__radio">
                            <label for="dewey">Железо</label>
                            <input type="checkbox" id="dewey" name="Что-то ещё" value="Железо" v-model="selectedThree"/>
                        </div>
                        <div class="form__radio">
                            <label for="louie">Цветность</label>
                            <input type="checkbox" id="louie" name="Что-то ещё" value="Цветность" v-model="selectedThree"/>
                        </div>
                        <div class="form__radio">
                            <label for="louie">Запах</label>
                            <input type="checkbox" id="louie" name="Что-то ещё" value="Запах" v-model="selectedThree"/>
                        </div>
                        <div class="form__input">
                            <label for="other3">Другой вариант или комментарий</label>
                            <input type="text" id="other3" name="Что-то ещё" v-model="selectedThreeOther"/>
                        </div>
                        <div class="form__bottom">
                            <div class="form__btns">
                                <div class="form__btns-main">
                                    <button type="button" class="form__send" :disabled="!(selectedThree.length || selectedThreeOther)" @click="store.stage++">Даллее</button>
                                    <button class="form__close-2" type="button"  @click="store.stage--">Назад</button>
                                </div>
                                <button class="form__skip" type="button" @click="store.stage++">Пропустить вопрос</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="store.stage === 4">
                    <div class="form__main">
                        <div class="form__input">
                            <label :class="{ errorText: v$.name.$errors.length }" for="name">Имя</label>
                            <input id="name" :class="{ error: v$.name.$errors.length }" type="text" name="Имя" v-model="state.name"/>
                            <p :class="{ errorText: v$.name.$errors.length }" v-if="v$.name.$errors.length">Необходимо заполнить поле</p>
                        </div>
                        <div class="form__input">
                            <label for="name">Номер телефонв</label>
                            <input id="name" type="text" name="Номер телефона"/>
                        </div>
                        <div class="form__input">
                            <label for="name">Email</label>
                            <input id="name" type="text" name="Email" />
                        </div>
                        <div class="form__bottom">
                            <div class="form__btns">
                                <div class="form__btns-main">
                                    <button class="form__send" :disabled="!store.isSogals">Отправить</button>
                                    <button class="form__close-2" type="button" @click="store.changePopUp">Отменить</button>
                                </div>
                            </div>
                            <div class="form__yes">
                                <label for="yes">Я соглашаюсь с <a href="">обработкой персональных данных</a></label>
                                <input id="yes" type="checkbox" v-model="store.isSogals"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { useCounterStore } from '@/store/index'
import { onMounted, ref } from 'vue';
const store = useCounterStore()

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
const myForm = ref(null);
const state = ref({
      name: '',
    })
const rules = {
    name: { required }, 
}

const v$ = useVuelidate(rules, state)


async function send(event) {
    const result = await v$.value.$validate()
    if (!result) {
        event.preventDefault()
        return
    }
}
const selectedOne = ref('')
const selectedOneOther = ref('')

const selectedTwo = ref('')
const selectedTwoOther = ref('')

const selectedThree = ref([])
const selectedThreeOther = ref('')
</script>

<style lang="scss" scoped>
.errorText {
    color: rgb(246, 65, 65);
}
.form {
    z-index: 2;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 0 0 10px 2px #31393C;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: calc(100% - 40px); 

    .error {
    border: 1px solid rgb(246, 65, 65);
}

    &__radio {
        display: flex;
        gap: 10px;
    }

    @media screen and (max-width: $mobile-max-width) {
        padding: 20px;
    }

    &__title-block {
        display: flex;
        gap: 10px;
        align-items: center;

        p {
            font-weight: 700;
            font-size: 36px;
        }
    }

    &__close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        img {
            transform: rotate(0);
            transition: .5s;
        }
        
        @media (hover:hover) {
            &:hover {
                img {
                    transform: rotate(360deg);
                }
            }
        }
    }

    &__title {
        font-size: 24px;
        font-weight: bold;

        @media screen and (max-width: $mobile-max-width) {
            font-size: 20px; 
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 22px;

        @media screen and (max-width: $mobile-max-width) {
            gap: 15px;
        }
    }

    &__input {
        display: flex;
        flex-direction: column;
        gap: 5px;

        label {
            font-size: 20px;
                @media screen and (max-width: $mobile-max-width) {
                font-size: 14px;
            }
        }

        input {
            border-radius: 5px;
            border: 1px solid $color-black;
            padding: 10px;
        }
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__yes {
        display: flex;
        flex-direction: row-reverse;
        gap: 5px;
        justify-content: flex-end;
        align-items: center;

        label {
            @media screen and (max-width: $mobile-max-width) {
                font-size: 12px;
            }
        }

        input {
            width: 16px;
            height: 16px;
        }
        
         a {
            color: $color-light-blue;
         }
    }

    &__btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__skip {
        cursor: pointer;
        text-align: left;
    }

    &__btns-main {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
    }

    &__send, &__close-2 {
        flex: 1;
        cursor: pointer;
        padding: 10px 60px;
        border-radius: 5px;
        font-size: 20px;
        @media screen and (max-width: $mobile-max-width) {
                gap: 16px;
            }
    }

    &__send {
        background-color: $color-light-orange;
        border: 1px solid $color-light-orange;
        transition: .5s;

        @media (hover:hover) {
            &:hover {
                background-color: $color-white;
                border: 1px solid $color-dark-orange;
                color:$color-dark-orange;
            }
        }

        &:disabled {
            cursor: default;
            background-color: grey;
            border: 1px solid grey;

            @media (hover:hover) {
            &:hover {
                background-color: grey;
                border: 1px solid grey;
                color:$color-black;
            }
        }
        }
    }

    &__close-2 {
        transition: .5s;
        background-color: $color-white;
        border: 1px solid $color-black;

        @media (hover:hover) {
            &:hover {
                background-color: $color-black;
                color:$color-white;
            }
        }
    }
}
</style>