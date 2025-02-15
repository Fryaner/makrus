<template>
    <div class="delivery">
        <div class="delivery__delivery">
            <section class="delivery__info">
                <h2 class="delivery__title">ДОСТАВКА</h2>
                <div class="delivery__description">
                    <p><img src="@/assets/icons/check.svg" alt=""/>Доставка в пределах МКАД бесплатно.</p>
                    <p><img src="@/assets/icons/check.svg" alt=""/>Доставка и отправка в другие города и регионы возможна транспортными компаниями по предоплате.</p>
                </div>
            </section>
            <img class="delivery__image" src="@/assets/images/delivery.png" alt=""/>
        </div>
        <div class="delivery__pay">
            <section class="delivery__info-2">
                <h2 class="delivery__title">СПОСОБЫ ОПЛАТЫ</h2>
                <p class="delivery__text">Оплата возможна двумя способами:</p>
            </section>
            <div class="delivery__selected">
                <div class="delivery__cash">
                    <p>НАЛИЧНЫМ ПУТЁМ</p>
                    <img src="@/assets/images/deliverySelect1.png" alt=""/>
                </div>
                <div class="delivery__cashless">
                    <p>БЕЗНАЛИЧНЫМ ПУТЁМ</p>
                    <img src="@/assets/images/deliverySelect2.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .delivery {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        gap: 100px;
        color: $color-black;

        @media screen and (max-width: $mobile-max-width){
            gap: 60px;
        }

        &__delivery {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            align-items: center;

            @media screen and (max-width: $mobile-max-width){
                flex-direction: column;
            }
        }

        &__title {
            font-size: 24px;
            font-weight: 700;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 50%;

            @media screen and (max-width: $mobile-max-width){
                width: 100%;
            }
        }

        &__info-2 {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__description {
            display: flex;
            flex-direction: column;
            gap: 20px;

            p {
                display: flex;
                gap: 10px;
            }

            @media screen and (max-width: $mobile-max-width){
                gap: 10px;
            }
        }

        &__text, &__description {
            font-size: 16px;

            @media screen and (max-width: $mobile-max-width){
                font-size: 14px;
            }
        }

        &__image {
            max-width: 400px;
            width: 50%;

            @media screen and (max-width: $mobile-max-width){
                max-width: none;
                width: 100%;
            }
        }

        &__pay {
            display: flex;
            flex-direction: column;
            gap: 50px;

            @media screen and (max-width: $mobile-max-width){
                gap: 30px;
            }
        }

        &__selected {
            display: flex;
            gap: 50px;


            @media screen and (max-width: $mobile-max-width){
                flex-direction: column;
                gap: 20px;
            }
        }

        &__cashless, &__cash {
            width: 50%;
            font-size: 24px;
            padding: 10px;
            display: flex;
            gap: 10px;
            text-align: center;
            justify-content: center;
            align-items: center;
            border-radius: 20px;

            img {
                max-width: 64px;
                width: 100%;

                &:first-of-type{
                    transform: rotate(23deg);
                }
            }

            @media screen and (max-width: $tablet-max-width){
                font-size: 20px;
            }

            @media screen and (max-width: $mobile-max-width){
                width: 100%;
                font-size: 16px;
                padding: 5px;
            }
        }

        &__cashless {
            background-color: #16C75D;
        }

        &__cash {
            background-color: #FFB842; 
        }
    }
</style>