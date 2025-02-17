<script setup lang="ts">
import { useCounterStore } from '@/store/index'
import router from '@/router'
const store = useCounterStore()

function openModal() {
    store.changePopUp()
    store.changeTitile('Заказать звонок специалиста')
    store.changeType(1)
}

function toHome() {
    store.isActive = false
    router.push({
    path: '/'
  })
}
function toAbout() {
    store.isActive = false
    router.push({
    path: '/about'
  })
}
function toContacts() {
    store.isActive = false
    router.push({
    path: '/contacts'
  })
}
function toDelivery() {
    store.isActive = false
    router.push({
    path: '/delivery'
  })
}
function toExample() {
    store.isActive = false
    router.push({
    path: '/example'
  })
}
</script>

<template>
    <header class="header">
        <div class="header__logo">   
            <img class="header__image" src="@/assets/images/logo.webp" alt="logo"/>
            <div class="header__info">
                <h1 class="header__title">ООО «МакРус»</h1>
                <h2 class="header__sub-title">Лучшие в своём деле</h2>
            </div>
        </div>
        <nav class="header__nav ">
            <ul class="header__list" :class="{active: store.isActive}">
                <li class="header__link">
                    <router-link @click="toHome()" to="/">Главная</router-link>
                </li>
                <li class="header__link">
                    <router-link @click="toAbout()" to="/about">О нас</router-link>
                </li>
                <li class="header__link">
                    <router-link @click="toContacts()" to="/contacts">Контакты</router-link>
                </li>
                <li class="header__link">
                    <router-link @click="toExample()" to="/example">Примеры работ</router-link>
                </li>
                <li class="header__link">
                    <router-link @click="toDelivery()" to="/delivery">Доставка и оплата</router-link>
                </li>
            </ul>
        </nav>
        <div class="header__contacts" :class="{active: store.isActive}">
            <div class="header__right">
                <button @click="openModal()" class="header__btn">Заказать звонок специалиста</button>
                <div class="header__test">
                    <div class="header__phone-mail">
                    <a class="header__mail" href="mailto:ooo.makrus@mail.ru">ooo.makrus@mail.ru</a>
                    <a class="header__phone" href="tel:+79778833882">+ 7  977 883 38 82</a>
                </div>
                <div class="header__social">
                    <a class="header__wa" href="https://wa.me/+79778833882"><img src="@/assets/icons/wa.svg" alt=""/></a>
                    <a class="header__tg" href="https://t.me/+79778833882"><img src="@/assets/icons/tg.svg" alt=""/></a>
                </div>
                </div>
            </div>
        </div>
        <div class="burger" @click="store.openBurgerMenu">
            <p class="burger__top" :class="{active: store.isActive}"></p>
            <p class="burger__middle" :class="{active: store.isActive}"></p>
            <p class="burger__bottom" :class="{active: store.isActive}"></p>
        </div>
    </header>
</template>

<style lang="scss" scoped>

.router-link-active {
  font-weight: bold; /* Пример: сделать шрифт жирным */
  color: $color-dark-blue;
  position: relative;

  &::after {
        transition: .5s;
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        background-color: $color-dark-blue;
        left: 0;
        bottom: -5px;
    }


}
.burger {
    display: none;
    width: 35px;
    height: 20px;
    position: relative;


    @media screen and (max-width: $mobile-max-width){
        display: block;
        &__top {
            &.active {
                top: 9px;
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
                bottom: 9px;
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

    &__test {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width: $mobile-max-width){
            flex-direction: column-reverse;
            align-items: center;
            gap: 10px;
        }
    }

    &__right {
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;
        align-items: flex-end;

        @media screen and (max-width: $tablet-max-width){
            gap: 5px;
        }

    }

    &__social {
        display: flex;
        gap: 10px;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
        }
    }

    &__wa {
        width: 36px;
        height: 36px;
    }

    &__tg {
        width: 32px;
        height: 32px;

    }

    &__logo {
        display: flex;
        gap: 10px;
        align-items: center;
        position: relative;
        z-index: -2;
    }
    &__title {
        font-size: 18px;

        @media screen and (max-width: $tablet-max-width){
            font-size: 14px;
        }
    }
    &__sub-title {
        font-size: 14px;
        color: $color-light-blue;

        @media screen and (max-width: $tablet-max-width){
            font-size: 10px;
        }
        @media screen and (max-width: $mobile-max-width){
            font-size: 12px;
        }
    }
    &__list {
        display: flex;
        gap: 23px;
        font-size: 16px;
        transition: .5s;

        &.active {
            transform: translateX(0);
        }

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 12px;
            gap: 20px;
        }

        @media screen and (max-width: $tablet-max-width){
            font-size: 14px;
            gap: 10px;
        }

        @media screen and (max-width: $mobile-max-width){
            display: flex;
            position: absolute;
            right: 0;
            flex-direction: column;
            width: 100%;
            height: 100%;
            top: 100px;
            background-color: $color-white;
            align-items: center;
            gap: 20px;
            transform: translateX(100%);
        }

    }
    &__link {
        cursor: pointer;
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

        @media screen and (max-width: $mobile-max-width){
            padding-bottom: 20px;
            border-bottom: 1px solid $color-black;
            width: 100%;
            text-align: center;
            font-size: 16px;
        }
    }
    &__contacts, &__list {
        @media screen and (max-width: $mobile-max-width){
            z-index: 1000;
        }
    }
    &__contacts {
        display: flex;
        gap: 20px;

        transition: .5s;

        @media screen and (max-width: $tablet-max-width){
            flex-direction: column-reverse;
            gap: 5px;
        }

        @media screen and (max-width: $mobile-max-width){
            &.active {
            transform: translateX(0) translateY(-110%);
        }
            justify-content: space-between;
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

        @media screen and (max-width: $mobile-max-width){
            flex-direction: column;
            gap: 5px;
        }

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
            color: $color-dark-blue;
        }

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 16px;
        }
        @media screen and (max-width: $tablet-max-width){
            font-size: 12px;
            padding: 5px 10px;
        }
        @media screen and (max-width: $mobile-max-width){
            font-size: 18px;
            padding: 10px 15px;
        }
    }
    &__mail {
        color: $color-light-blue;
        font-size: 14px;
        line-height: 15px;
        text-align: right;

        @media screen and (max-width: $tablet-max-width){
            font-size: 12px;
        }
        @media screen and (max-width: $mobile-max-width){
            font-size: 14px;
        }
    }
    &__phone {
        font-size: 20px; 
        color: $color-black;
        font-weight: bold;

        @media screen and (max-width: $desctop-small-max-width){
            font-size: 18px;
        }

        @media screen and (max-width: $tablet-max-width){
            font-size: 12px;
        }
        @media screen and (max-width: $mobile-max-width){
            font-size: 16px;
        }
    }
}

</style>