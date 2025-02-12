<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isActive = ref(false)

function openBurgerMenu() {
    isActive.value = !isActive.value
    console.log('f')
}
</script>

<template>
    <header class="header">
        <div class="header__logo">   
            <img class="header__image" src="@/assets/images/logo.png" alt="logo"/>
            <div class="header__info">
                <h1 class="header__title">ООО МакРус</h1>
                <h2 class="header__sub-title">Лучшие в своём деле</h2>
            </div>
        </div>
        <nav class="header__nav ">
            <ul class="header__list" :class="{active: isActive}">
                <li class="header__link"><RouterLink to="">Главная</RouterLink></li>
                <li class="header__link"><RouterLink to="">О компании</RouterLink></li>
                <li class="header__link"><RouterLink to="">Контакты</RouterLink></li>
                <li class="header__link"><RouterLink to="">Примеры работ</RouterLink></li>
                <li class="header__link"><RouterLink to="">Доставка и оплата</RouterLink></li>
            </ul>
        </nav>
        <div class="header__contacts" :class="{active: isActive}">
            <div class="header__phone-mail">
                <a class="header__mail" href="mailto:ooo.makrus@mail.ru">ooo.makrus@mail.ru</a>
                <a class="header__phone" href="tel:+79778833882">+ 7  977 883 38 82</a>
            </div>
            <button class="header__btn">Заказать звонок специалиста</button>
        </div>
        <div class="burger" @click="openBurgerMenu">
            <p class="burger__top" :class="{active: isActive}"></p>
            <p class="burger__middle" :class="{active: isActive}"></p>
            <p class="burger__bottom" :class="{active: isActive}"></p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.burger {
    display: none;
    width: 50px;
    height: 20px;
    position: relative;

    @media screen and (max-width: $tablet-max-width){
        display: block;
    }

    @media screen and (max-width: $mobile-max-width){
        &__top {
            &.active {
                top: 8px;
                transform: rotate(45deg);
            }
        }
        &__middle {
            &.active {
                display: none;
            }
        }
        &__bottom {
            &.active {
                bottom: 8px;
                transform: rotate(-45deg);
            }
        }
    }

    &__top, &__middle, &__bottom {
        transition: .5s;
        transform: rotate(0);
        left: 0;
        content: '';
        position: absolute;
        background-color: $color-black;
        width: 100%;
        height: 2px;
    }
    &__top {
        top:0;
    }
    &__middle {
        top: 50%;
        transform: translateY(-50%);
    }
    &__bottom {
        bottom:0;
    }
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;

    &__logo {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    &__title {
        font-size: 18px;
    }
    &__sub-title {
        font-size: 14px;
        color: $color-light-blue;
    }
    &__list {
        display: flex;
        gap: 23px;
        font-size: 14px;
        transition: .5s;

        &.active {
            transform: translateX(0);
        }

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 12px;
            gap: 20px;
        }

        @media screen and (max-width: $mobile-max-width){
            padding-top: 100px;
            display: flex;
            position: absolute;
            right: 0;
            flex-direction: column;
            width: 100%;
            height: 100%;
            top: 0;
            background-color: $color-white;
            align-items: center;
            gap: 20px;
            transform: translateX(100%);
        }

        a {
            color: $color-black;
        }
    }
    &__link {
        &::after {
            transition: .5s;
            content: '';
            height: 2px;
            width: 0;
            position: absolute;
            background-color: $color-dark-blue;
            left: 0;
            bottom: -5px;
        }
        position: relative;
        a {
            transition: .5s;
        }

        @media (hover: hover) {
            &:hover {
            &::after {
                width: 100%;
            }
            a {
            color: $color-dark-blue;
            }
        }
        }

        // @media screen and (max-width: $desctop-small-max-width){
        //     font-size: 20px;
        // }
        

        @media screen and (max-width: $mobile-max-width){
            padding-bottom: 20px;
            border-bottom: 1px solid $color-black;
            width: 100%;
            text-align: center;
        }
    }
    &__contacts {
        display: flex;
        gap: 20px;

        transition: .5s;

        &.active {
            transform: translateX(0) translateY(-150%);
        }

        @media screen and (max-width: $tablet-max-width){
            position: absolute;
            right: 0;
            flex-direction: column;
            width: 100%;
            top: 300px;
            align-items: center;
        }

        @media screen and (max-width: $mobile-max-width){
            transform: translateX(100%) translateY(-150%);
            position: absolute;
            right: 0;
            flex-direction: column;
            width: 100%;
            top: 100vh;
            align-items: center;
        }
    }
    &__phone-mail {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__btn {
        transition: .5s;
        padding: 10px 15px;
        background-color: $color-dark-blue;
        border: 1px solid $color-dark-blue;
        font-size: 20px;
        font-weight: 700;
        color: $color-white;
        border-radius: 30px;
        letter-spacing: 1px;
        cursor: pointer;
        
        &:hover {
            border: 1px solid $color-dark-blue;
            background-color: inherit;
            color: $color-black;
        }

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 16px;
        }
    }
    &__mail {
        color: $color-light-blue;
        font-size: 14px;
        line-height: 15px;
        text-align: right;
    }
    &__phone {
        font-size: 20px; 
        color: $color-black;
        font-weight: bold;

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 18px;
        }
    }
}

</style>