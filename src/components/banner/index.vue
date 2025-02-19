<template>
    <section class="banners" :class="{open: store.isOpen}">
        <div class="banners-wrapper">
        <div class="banners__info">
            <h2 class="banners__title">Установка и обслуживание всех видов фильтров</h2>
            <h3 class="banners__sub-title">Мы работаем по Москве и Московской области, а также выезжаем по областям: Калужская, Брянская, Тульская, Тверская, Владимирская.</h3>
        </div>
        <div class="banners__btns">
            <button @click="openModal1()" class="banners__btn-1">Получить консультацию</button>
            <button @click="openModal2()" class="banners__btn-2">Заказать расчёт</button>
        </div>
        </div>
    </section>
</template>

<script setup>
import { useCounterStore } from '@/store/index'
const store = useCounterStore()
function openModal1() {
    store.changePopUp()
    store.changeTitile('Получить консальтацию')
    store.changeType(1)
}
function openModal2() {
    store.changePopUp()
    store.changeTitile('Заказать расчёт')
    store.changeType(2)
    store.changeStage()
}
</script>

<style lang="scss" scoped>
    .banners {
        position: relative;
        background-image: url('@/assets/images/banner.webp');
        z-index: 0;
        background-size: cover;
        background-repeat: no-repeat;

        &.open {
            z-index: -1;
        }

        &-wrapper {
            padding: 50px 0 120px 190px;
            display: flex;
            flex-direction: column;
            gap: 65px;

            @media screen and (max-width: $tablet-max-width) {
            padding-left: 50px;
            padding-right: 50px;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }

        @media screen and (max-width: $mobile-max-width) {
            padding: 60px 10px;
        }
        }

        &__info {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: $color-black;

            @media screen and (max-width: $tablet-max-width) {
                width: 100%;
                align-items: center;
            }
        }

        &__title {
            font-size: 28px;
            font-weight: 700;

            @media screen and (max-width: $tablet-max-width) {
                font-size: 24px;
                text-align: center;
            }

            @media screen and (max-width: $mobile-max-width) {
                font-size: 20px;
            }
        }

        &__sub-title {
            font-size: 20px;

            @media screen and (max-width: $tablet-max-width) {
                font-size: 20px;
                text-align: center;
            }

            @media screen and (max-width: $mobile-max-width) {
                font-size: 20px;
            }
        }

        &__btns {
            display: flex;
            gap: 15px;

            @media screen and (max-width: $mobile-max-width) {
                flex-wrap: wrap;
            }
        }

        &__btn-1, &__btn-2 {
            font-size: 20px;
            border-radius: 30px;
            transition: .5s;
            cursor: pointer;

            @media screen and (max-width: $tablet-max-width) {
                font-size: 16px;
                text-align: center;
            }

            @media screen and (max-width: $mobile-max-width) {
                flex:1;
                text-wrap: nowrap;
                font-size: 14px;
            }
        }

        &__btn-1 {
            background-color: $color-dark-blue;
            color: $color-white;
            padding: 15px 30px;
            border: 1px solid $color-dark-blue;
            font-weight: 700;

            @media (hover:hover) {
                &:hover {
                    background-color: $color-white;
                    color: $color-dark-blue;
                    border: 1px solid $color-dark-blue;
                }
            }
        }

        &__btn-2 {
            background-color: $color-white;
            color: $color-black;
            border: 1px solid $color-black; 
            font-weight: 700; 
            padding: 15px 30px;

            @media (hover: hover) {
                &:hover {
                    background-color: $color-black;
                    color: $color-white;
                    border: 1px solid $color-black;
                }
            }
        }
    }
</style>