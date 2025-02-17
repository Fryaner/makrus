<template>
    <div class="lists">
        <div class="lists__title">
            <h2>Инструкции</h2>
            <h3>Вы можете скачать каждую инструкцию и ознакомиться с ней</h3>
        </div>
        <ul class="lists__list">
            <li><a target="_blank" href="/assets/1.pdf">AUTOTROL 740-760<img src="@/assets/icons/download.svg" alt=""/></a></li>
            <li><a target="_blank" href="/assets/2.pdf">CLACK WS<img src="@/assets/icons/download.svg" alt=""/></a></li>
            <li><a target="_blank" href="/assets/3.pdf">RUNXIN-автоматикого клапана<img src="@/assets/icons/download.svg" alt=""/></a></li>
            <li><a target="_blank" href="/assets/4.pdf">RUNXIN-Дисковый фильтр<img src="@/assets/icons/download.svg" alt=""/></a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.lists {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 10px;

    &__title {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
            font-size: 28px;
            font-weight: 700;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 20px; 

        a {
            transition: .5s;
            text-decoration: uppercase;
            display: flex;
            gap: 5px;
            align-items:center;

            @media (hover:hover) {
                &:hover {
                    color: $color-dark-blue;
                }
            }
        }
    }
}
</style>