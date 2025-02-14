<script setup>
</script>

<template>
    <section>
        <Title><template #title>ОБРАТНЫЙ ОСМОС</template></Title>
        <div class="section-defangers">
            <div class="defangers">
                <div class="defangers__image">
                    <img src="@/assets/images/image5.png" alt=""/>
                </div>
                    <div class="defangers__main">
                        <h3 class="defangers__title">Бытовой осмос</h3>
                        <p class="defangers__description">Бытовой осмос — это фильтр для питьевой воды который убирает из воды все вредоносные компоненты и бактерии.</p>           
                    </div>
                    <div class="defangers__other">
                        <div class="defangers__plus">
                            <h4 class="plus__title">Плюсы</h4>
                            <ul class="plus__list">
                                <li class="plus__li" ><img src="@/assets/icons/plus.png" alt=""/>Универсальность</li>
                                <li class="plus__li"><img src="@/assets/icons/plus.png" alt=""/>Низкая стоимость</li>
                                <li class="plus__li"><img src="@/assets/icons/plus.png" alt=""/>Высокая степень очистки</li>
                            </ul>
                        </div>
                        <div class="defangers__minus">
                            <h4 class="minus__title">Минусы</h4>
                            <ul class="minus__list">
                                <li class="minus__li"><img src="@/assets/icons/minus.png" alt=""/>Малая производительность 5-6 л/ч</li>
                                <li class="minus__li"><img src="@/assets/icons/minus.png" alt=""/>Давление в системе не ниже 3атм</li>
                            </ul>
                        </div>
                    </div>
                    <div class="defangers__footer">
                        <p class="defangers__pay"><img src="@/assets/icons/credit.png" alt=""/>Стоимость от <span>12 000<img src="@/assets/icons/R.png" alt=""/></span></p>
                        <button class="defangers__btn">Оформить заказ</button>
                    </div>
            </div>
            <div class="defangers-2">
                <div class="defangers-2__image">
                    <img src="@/assets/images/image6.png" alt=""/>
                </div>
                    <div class="defangers__main">
                        <h3 class="defangers__title">Промышленный осмос</h3>
                        <p class="defangers__description">Промышленный осмос — это фильтр, который даёт деминерализованную воду с производительностью от 100 л/ч.</p>           
                    </div>
                    <div class="defangers__other">
                        <div class="defangers__plus">
                            <h4 class="plus__title">Плюсы</h4>
                            <ul class="plus__list">
                                <li class="plus__li" ><img src="@/assets/icons/plus.png" alt=""/>100%-ое удаление органических примесей</li>
                                <li class="plus__li" ><img src="@/assets/icons/plus.png" alt=""/>Очистка воды без изменения её температурый</li>
                                <li class="plus__li" ><img src="@/assets/icons/plus.png" alt=""/>Высокая производительность</li>
                            </ul>
                        </div>
                        <div class="defangers__minus">
                            <h4 class="minus__title">Минусы</h4>
                            <ul class="minus__list">
                                <li class="minus__li"><img src="@/assets/icons/minus.png" alt=""/>Индивидуальный подбор по тех.заданию</li>
                                <li class="minus__li"><img src="@/assets/icons/minus.png" alt=""/>Габаритные размеры</li>
                            </ul>
                        </div>
                    </div>
                    <div class="defangers__footer">
                        <button class="defangers__btn">Оформить заказ</button>
                    </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-defangers {
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media screen and (max-width: $mobile-max-width) {
        gap: 60px;
    }
}
.defangers-2 {
    display: grid;

    grid-template-areas: 
            "Main Img" 
            "Other Img"
            "Other Img"
            "Footer Img";
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media screen and (max-width: $mobile-max-width) {
            grid-template-areas: 
            "Main"
            "Img"
            "Other"
            "Footer";
            grid-template-columns: 1fr;

            gap: 30px;
    }

    &__image {
        background-repeat: no-repeat;
        background-position: center center;
        grid-area: Img;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 80%;

        @media screen and (max-width: $mobile-max-width) {
            background-size: 65%;
        }

        img {
            max-width: 360px;
            width: 100%;
            height: 100%;
            object-fit: contain;

            @media screen and (max-width: $mobile-max-width) {
                grid-template-areas: 
                "Main"
                "Img"
                "Other"
                "Footer";
                grid-template-columns: 1fr;
                max-width: 300px;
            }
        }
    }
}
.defangers {
    display: grid;

    grid-template-areas: 
            "Img Main" 
            "Img Other"
            "Img Other"
            "Img Footer";
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media screen and (max-width: $mobile-max-width) {
            grid-template-areas: 
            "Main"
            "Img"
            "Other"
            "Footer";
            grid-template-columns: 1fr;

            gap: 30px;
    }

    &__image {
        background-image: url('@/assets/images/bg1.png');
        background-repeat: no-repeat;
        background-position: center center;
        grid-area: Img;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 80%;

        @media screen and (max-width: $mobile-max-width) {
            background-size: 65%;
        }

        img {
            max-width: 360px;
            width: 100%;
            height: 100%;
            object-fit: contain;

            @media screen and (max-width: $mobile-max-width) {
                grid-template-areas: 
                "Main"
                "Img"
                "Other"
                "Footer";
                grid-template-columns: 1fr;
                max-width: 300px;
            }
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 50%;
        padding: 10px;

        
        @media screen and (max-width: $mobile-max-width) {
            width: 100%;
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 11px;
        grid-area: Main;
    }

    &__title {
        font-weight: 700;
        font-size: 28px;

        @media screen and (max-width: $mobile-max-width) {
            font-size: 20px;
            text-align: center;
        }
    }

    &__description {
        font-size: 16px;

        @media screen and (max-width: $mobile-max-width) {
            text-align: center;
            font-size: 14px;
        }
    }

    &__other {
        display: flex;
        gap: 50px;
        grid-area: Other;

        @media screen and (max-width: $tablet-max-width) {
            gap: 30px;
            flex-direction: column;
        }
    }

    &__plus, &__minus {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;
        justify-content: flex-start;

        @media screen and (max-width: $tablet-max-width) {
            width: 100%;
        }
    }

    &__footer {
        display: flex;
        flex-direction: column;
        gap: 15px;
        grid-area: Footer;
    }

    &__pay {
        display: flex; 
        gap: 15px;
        align-items: center;
        font-size: 20px;

        @media screen and (max-width: $mobile-max-width) {
            gap: 5px;
            font-size: 16px;
        }

        span {
            display: flex;
            align-items: center;

            img {
                width: 20px;
                height: 100%;
            }
            display: flex;
            gap: 2px;
            font-weight: 700;
        }
    }

    &__btn {
        width: 100%;
        border-radius: 30px;
        background-color: $color-dark-blue;
        color: $color-white;
        border: 1px solid $color-dark-blue;
        cursor: pointer;
        padding: 15px;
        font-weight: 700;
        font-size: 20px;
        transition: .5s;

        @media (hover:hover) {
            &:hover {
                background-color: $color-white;
                color: $color-dark-blue;
                border: 1px solid $color-dark-blue;
            }
        }

        @media screen and (max-width: $mobile-max-width) {
                font-size: 16px;
        }
    }
}

.plus {
        &__title {
            font-size: 20px;
            font-weight: 700;

            @media screen and (max-width: $mobile-max-width) {
                font-size: 18px;
            }
        }

        &__list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__li {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 5px;
            box-shadow: 4px 4px 10px 2px #31393c50;
            padding: 15px;

            @media screen and (max-width: $mobile-max-width) {
                font-size: 14px;
            }
        }
    }

.minus {
        &__title {
            font-size: 20px;
            font-weight: 700;

            @media screen and (max-width: $mobile-max-width) {
                font-size: 18px;
            }
        }

        &__list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__li {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 5px;
            box-shadow: 4px 4px 10px 2px #31393c50;
            padding: 15px;

            @media screen and (max-width: $mobile-max-width) {
                font-size: 14px;
            }
        }
    }
</style>