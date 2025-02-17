<template>
    <footer class="footer">
        <div class="footer__logo">
            <img src="@/assets/images/logo.webp" alt=""/>
            <h3 class="footer__title">ООО «МакРус»</h3>
        </div>
        <nav class="footer__nav">
            <h3 @click="test()">Навигация</h3>
            <ul>
                <li>
                    <router-link @click="toHome()" to="/">Главная</router-link>
                </li>
                <li>
                    <router-link @click="toAbout()" to="/about">О компании</router-link>
                </li>
                <li>
                    <router-link @click="toContacts()" to="/contacts">Контакты</router-link>
                </li>
                <li>
                    <router-link @click="toExample()" to="/example">Примеры работ</router-link>
                </li>
                <li>
                    <router-link @click="toDelivery()" to="/delivery">Доставка и оплата</router-link>
                </li>
                <li>
                    <router-link @click="toLists()" to="/lists">Инструкции</router-link>
                </li>
            </ul>
        </nav>
        <div class="footer__contacts">
            <h3>Контактная информация</h3>
            <a href="mailto:ooo.makrus@mail.ru" class="footer__mail"><img src="@/assets/icons/mail.svg" alt=""/>ooo.makrus@mail.ru</a>
            <a href="tel:+ 79778833882" class="footer__phone"><img src="@/assets/icons/phone.svg" alt=""/>+ 7  977 883 38 82</a>
            <button @click="openModal()">Заказать расчёт</button>
        </div>
    </footer>
</template>

<script setup>
import { useCounterStore } from '@/store/index'
import router from '@/router'
const store = useCounterStore()

function openModal() {
    store.changePopUp()
    store.changeTitile('Заказать расчёт')
    store.changeType(2)
    store.changeStage()
}

function toHome() {
    store.isActive = false
    window.scroll(0,0)
    router.push({
    path: '/'
  })
}
function toAbout() {
    window.scroll(0,0)
    store.isActive = false
    router.push({
    path: '/about'
  })
}
function toContacts() {
    window.scroll(0,0)
    store.isActive = false
    router.push({
    path: '/contacts'
  })
}
function toDelivery() {
    window.scroll(0,0)
    store.isActive = false
    router.push({
    path: '/delivery'
  })
}
function toExample() {
    window.scroll(0,0)
    store.isActive = false
    router.push({
    path: '/example'
  })
}
function toLists() {
    window.scroll(0,0)
    store.isActive = false
    router.push({
    path: '/lists'
  })
}
</script>

<style lang="scss" scoped>
.router-link-active { 
    color: $color-dark-blue;
}
    .footer {
        background-color: white;
        color: $color-white;
        padding: 40px 10px;
        margin-top: 50px;
        border-top: 1px solid $color-black;
        display: grid;
        grid-template-columns: 1.5fr 3fr 330px;
        justify-content: space-between ;
        align-items: flex-start;

        @media screen and (max-width: $tablet-max-width) {
            grid-template-columns: 1fr;
            padding: 15px 10px;
            gap: 20px;
        }



        &__logo {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 20px;
        }

        &__nav {
            display: flex;
            flex-direction: column;
            gap: 20px;

            @media screen and (max-width: $tablet-max-width) {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
            

            h3 {
                font-size: 20px;
            }

            ul {
                display: grid;
                grid-template-columns: 150px 150px;
                grid-template-rows: 1fr 1fr 1fr;
                row-gap: 15px;
                column-gap: 30px;
                font-size: 16px;


                @media screen and (max-width: $tablet-max-width) {
                    grid-template-columns: 1fr;
                    grid-template-rows: none;
                    row-gap: 30px;

                    li {
                        border-bottom: 1px solid $color-black;
                        padding-bottom: 15px;
                    }
                }
            }

            

            a {
                cursor: pointer;
                    @media (hover:hover) {
                        &:hover {
                        color: $color-dark-blue;
                    }
                }

                @media screen and (max-width: $mobile-max-width) {
                    font-size: 12px;
                }
            }
        }

        &__title {
            font-size: 20px;
        }

        &__mail {
            font-size: 14px;
        }

        &__phone {
            font-size: 20px;
        }

        &__contacts {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h3 {
                font-size: 20px;
                text-align: right;

                @media screen and (max-width: $tablet-max-width) {
                    display: flex;
                    justify-content: center;
                }
            }

            a {
                display: flex;
                gap: 5px;
                align-items: center;
                justify-content: flex-end;

                @media screen and (max-width: $tablet-max-width) {
                    justify-content: center;
                }

                @media (hover:hover) {
                        &:hover {
                        color: $color-dark-blue;
                    }
                }
            }

            button {
                cursor: pointer;
                transition: .5s;
                background-color: $color-dark-blue;
                border: 1px solid $color-dark-blue;
                color: $color-white;
                padding: 10px 40px;
                font-size: 20px;
                border-radius: 30px;

                @media (hover:hover) {
                    &:hover {
                        background-color: $color-white;
                        border: 1px solid $color-dark-blue;
                        color: $color-dark-blue;  
                    }
                }
            }
        }
    }
</style>