<template>
    <section class="form" v-show="store.isOpen">
        <button class="form__close" @click="store.changePopUp"><img src="@/assets/icons/close.svg" alt=""/></button>
        <div>
            <h2 class="form__title">{{ store.title }}</h2>
            <h3>{{ store.subTitle }}</h3>
        </div>
        <form action="https://formspree.io/f/mrbeyypl" method="POST">
            <div class="form__main" v-if="store.type === 1">
                <div class="form__input">
                    <label for="name">Имя</label>
                    <input id="name" type="text" name="Имя"/>
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
                <input v-show="false" v-model="store.subTitle" name="Тип Обороудования"/>
                <div class="form__bottom">
                    <div class="form__btns">
                        <button class="form__send" :disabled="!isSogals">Отправить</button>
                        <button class="form__close-2" type="button" @click="store.changePopUp">Отменить</button>
                    </div>
                    <div class="form__yes">
                        <label for="yes">Я соглашаюсь с <a href="">обработкой персональных данных</a></label>
                        <input id="yes" type="checkbox" v-model="isSogals"/>
                    </div>
                </div>
            </div>
            <div v-else>
                <div v-if="stage === 1">
                    <p>1</p>
                    <button @click="stage++">Даллее</button>
                </div>
                <div v-else-if="stage === 2">
                    <p>2</p>
                    <button @click="stage++">Даллее</button>
                    <button @click="stage--">Назад</button>
                </div>
                <div v-else-if="stage === 3">
                    <p>4</p>
                    <button @click="stage++">Даллее</button>
                    <button @click="stage--">Назад</button>
                </div>
                <div v-else-if="stage === 4">
                    <p>4</p>
                    <button @click="test(event)">Отправить</button>
                    <button @click="stage--">Назад</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/store/index'
const store = useCounterStore()
const stage = ref(1)
const isSogals = ref(false)
function test(event) {
    event.preventDefault()
}
</script>

<style lang="scss" scoped>
.form {
    z-index: 2;
    background-color: white;
    position: absolute;
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

    @media screen and (max-width: $mobile-max-width) {
        padding: 20px;
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