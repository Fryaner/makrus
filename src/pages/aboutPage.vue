<template>
    <div class="about">
        <section class="about__main">
            <h2 class="about__title">Немного о ООО «МакРус»</h2>
                <div class="about__info">
                    <p>Компания ООО «МакРус» создана из лучших инженеров и мастеров, которые имеют большой опыт по фильтрации воды с 1996 года.</p>
                    <p> Наши специалисты получали опыт в таких фирмах как МТТ (Мембранная Техника и Технологии), Экодар, Гейзер и другие. Для оптимизации мы отказались от офиса в Москве чтоб нашим клиентам дать самые лучшие цены и качество услуг.</p>
                    <p>Одна из главных целей нашей компании иметь долгосрочные дружеские и деловые отношения с нашими клиентами и партнерами.</p>
                </div>
        </section>
        <img class="about__image" src="@/assets/images/about.png" alt=""/>
    </div>
</template>

<style lang="scss" scoped>
.about {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-top: 50px;

    @media screen and (max-width: $mobile-max-width) {
        flex-direction: column-reverse;
        align-items: center;
    }

    &__image {
        max-width: 570px;
        width: 50%;

    @media screen and (max-width: $mobile-max-width) {
        width: 100%;
    }

    }


    &__main {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 50%;

        @media screen and (max-width: $tablet-max-width){
            gap: 30px;
        }

        @media screen and (max-width: $mobile-max-width) {
        width: 100%;
    }
    }
    color: $color-black;

    &__title {
        font-size: 40px;
        font-weight: 700;

        @media screen and (max-width: $tablet-max-width){
            font-size: 32px;
        }
    }
    &__info {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        gap: 40px;

        @media screen and (max-width: $tablet-max-width){
            gap: 20px;
            font-size: 14px;
        }
    }
}
</style>