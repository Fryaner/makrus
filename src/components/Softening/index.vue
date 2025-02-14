<script setup>
</script>

<template>
    <section>
        <Title><template #title>УМЯГЧЕНИЕ</template></Title>
        <div class="section-defangers">
            <div class="defangers">
                <div class="defangers__image">
                    <img src="@/assets/images/image2.png" alt="d"/>
                </div>
                    <div class="defangers__main">
                        <h3 class="defangers__title">Классический умягчитель</h3>
                        <p class="defangers__description">Умягчитель классический это фильтр с ионообменной смолой и отдельно стоящим баком для соли.</p>           
                    </div>
                    <div class="defangers__other">
                        <div class="defangers__plus">
                            <h4 class="plus__title">Преимущества</h4>
                            <ul class="plus__list">
                                <li class="plus__li" ><span>1</span>Умягчение</li>
                                <li class="plus__li"><span>2</span>Низкая стоимость</li>
                                <li class="plus__li"><span>3</span>Большая производительность</li>
                            </ul>
                        </div>
                    </div>
                    <div class="defangers__footer">
                        <p class="defangers__pay"><img src="@/assets/icons/credit.png" alt=""/>Стоимость от <span>36 000<img src="@/assets/icons/R.png" alt=""/></span></p>
                        <button class="defangers__btn">Оформить заказ</button>
                    </div>
            </div>
            <div class="defangers-2">
                <div class="defangers-2__image">
                    <img src="@/assets/images/image4.png" alt=""/>
                </div>
                    <div class="defangers__main">
                        <h3 class="defangers__title">Умягчитель кабинетного типа</h3>
                        <p class="defangers__description">Умягчитель кабинетного типа — это классический умягчитель с солевым баком в элегантном корпусе.</p>           
                    </div>
                    <div class="defangers__other">
                        <div class="defangers__plus">
                            <h4 class="plus__title">Преимущества</h4>
                            <ul class="plus__list">
                                <li class="plus__li"><span>1</span>Умягчение</li>
                                <li class="plus__li"><span>2</span>Элегантный корпус</li>
                            </ul>
                        </div>
                    </div>
                    <div class="defangers__footer">
                        <p class="defangers__pay"><img src="@/assets/icons/credit.png" alt=""/>Стоимость от <span>39 000<img src="@/assets/icons/R.png" alt=""/></span></p>
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
        background-image: url('@/assets/images/bg3.png');
        background-repeat: no-repeat;
        background-position: center center;
        grid-area: Img;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 60%;
        

        @media screen and (max-width: $mobile-max-width) {
            background-size: 65%;
        }

        img {
            max-width: 200px;
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
                max-width: 150px;
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
        background-image: url('@/assets/images/bg4.png');
        background-repeat: no-repeat;
        background-position: center center;
        grid-area: Img;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: 60%;

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

    &__plus {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        flex: 1;

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
            display: grid;
            grid-template-columns: 1fr 1fr;
            flex-direction: column;
            gap: 20px;
            width: 100%;

            @media screen and (max-width: $tablet-max-width) {
                font-size: 18px;
                grid-template-columns: 1fr;
            }
        }

        &__li {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 5px;
            box-shadow: 4px 4px 10px 2px #31393c50;
            padding: 15px;

            span {
                font-weight: 900;
                font-size: 32px;
                color: $color-dark-blue;

                @media screen and (max-width: $tablet-max-width) {
                    font-size: 24px;
            }
            }

            @media screen and (max-width: $mobile-max-width) {
                font-size: 14px;
            }
        }
    }
</style>