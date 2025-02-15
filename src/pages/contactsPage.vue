<template>
    <section class="contacts">
        <h2 class="contacts__title">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h2>
        <div class="contacts__main">
            <div class="contacts__info">
                <div class="contacts__site">
                    <p>Оффициальный сайт компании:</p>
                    <p>ООО «МакРус»</p>
                    <p>ОГРН: 1244000006964</p>
                    <p>ИНН: 4000016583</p>
                    <p>Юридический адрес: 49342, КАЛУЖСКАЯ ОБЛАСТЬ, М.Р-Н ЖИЗДРИНСКИЙ, С.П.СЕЛО СТУДЕНЕЦ, Ж/Д_СТ ЗИКЕЕВО, ПЕР ЖЕЛЕЗНОДОРОЖНЫЙ, Д. 6А</p>
                    <p></p>
                </div>
                <div class="contacts__bank">
                    <p>Банковские реквизиты:</p>
                    <p>Расч сч: 40702810210001660824</p>
                    <p>БИК: 04452974</p>
                    <p>Кор.счёт: 30101810145250000974</p>
                    <p>АО “ТБанк”</p>
                    <p>ОКПО: 65495171</p>
                    <p>КПП: 400001001</p>
                </div>
                <div class="contacts__contact">
                    <p>Контакты:</p>
                    <p>mail: ooo.makrus@mail.ru</p>
                    <p>Тел. + 7 977 883 38 82</p>
                </div>
            </div>
            <div class="contacts__form">
                <p class="contacts__invite">Мы очень рады вашим вопросам и предложениям!</p>
                <button class="contacts__btn">Напишите нам</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: $color-black;
    padding: 0 10px;
    padding-top: 50px;
    padding-bottom: 50px;

    &__title { 
        font-size: 24px;
        font-weight: 700;

        @media screen and (max-width: $tablet-max-width){
            width: 100%;
            // font-size: 20px;
        }
    }

    &__main {
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: space-between;

        @media screen and (max-width: $tablet-max-width){
            flex-direction: column;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;

        @media screen and (max-width: $tablet-max-width){
            width: 100%;
        }
    }

    &__site, &__bank, &__contact {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media screen and (max-width: $tablet-max-width){
            font-size: 14px;
        }
    }

    &__site {
        p {
            &:first-child {
                font-weight: 700;
            }
        }
    }

    &__bank {
        p {
            &:first-child {
                font-weight: 700;
            }
        }
    }

    &__contact {
        p {
            &:first-child {
                font-weight: 700;
            }
        }
    }

    &__form {
        background-color: #F8F8F8;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        padding: 40px 100px;
        width: 50%;

        @media screen and (max-width: $tablet-max-width){
            width: 100%;
            max-width: none;
        }

        @media screen and (max-width: $tablet-max-width){
            gap: 10px;
            padding: 20px;
        }
    }

    &__invite {
        font-size: 18px;
        text-align: center;
        line-height: 28px;

        @media screen and (max-width: $tablet-max-width){
            font-size: 14px;
        }
    }

    &__btn {
        padding: 10px 50px;
        font-size: 20px;
        background-color: $color-dark-blue;
        border: 1px solid $color-dark-blue;
        border-radius: 30px;
        font-weight: 700;
        color: $color-white;
        cursor: pointer;
        transition: .5s;

        @media (hover:hover) {
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

</style>