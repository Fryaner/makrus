<template>
    <section class="examples">
        <h2 class="examples__title">ПРИМЕРЫ РАБОТ</h2>
        <div class="examples__lists">
            <div class="examples__list-1">
                <div class="examples__example1">
                    <img src="@/assets/images/example1.png" alt=""/>
                    <!-- <div class="examples__info">
                        <p>Работа 1</p>
                        <p>Наведитесь, чтобы посмотреть</p>
                        <img src="@/assets/icons/mousePointer.png" alt=""/>
                    </div> -->
                </div>
                <div class="examples__example2">
                    <img src="@/assets/images/example2.png" alt=""/>
                    <!-- <div>
                        <p>Работа 2</p>
                        <p>Наведитесь, чтобы посмотреть</p>
                        <img src="@/assets/icons/mousePointer.png" alt=""/>
                    </div> -->
                </div>
                <div class="examples__example3">
                    <img src="@/assets/images/example3.png" alt=""/>
                    <!-- <div>
                        <p>Работа 3</p>
                        <p>Наведитесь, чтобы посмотреть</p>
                        <img src="@/assets/icons/mousePointer.png" alt=""/>
                    </div> -->
                </div>
            </div>
            <div class="examples__list-2">
                <div class="examples__example4">
                    <img src="@/assets/images/example4.png" alt=""/>
                    <!-- <div>
                        <p>Работа 4</p>
                        <p>Наведитесь, чтобы посмотреть</p>
                        <img src="@/assets/icons/mousePointer.png" alt=""/>
                    </div> -->
                </div>
                <div class="examples__example5">
                    <img src="@/assets/images/example5.png" alt=""/>
                    <!-- <div>
                        <p>Работа 5</p>
                        <p>Наведитесь, чтобы посмотреть</p>
                        <img src="@/assets/icons/mousePointer.png" alt=""/>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.examples {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 10px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: $mobile-max-width){
            gap: 60px;
            padding-top: 0;
            padding-bottom: 0;
        }

    &__title {
        font-size: 28px;
        font-weight: 700;
    }

    &__lists {
        display: flex;
        flex-direction: column;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }

    &__list-1, &__list-2 {
        display: flex;
        gap: 40px;

        @media screen and (max-width: $tablet-max-width){
                flex-wrap: wrap;
                justify-content: center;
            }
    }

    &__example1, &__example2, &__example3, &__example4, &__example5 {
        cursor: pointer;
        border-radius: 10px;
        position: relative;
        display: flex;

        // div {
        //     padding: 10px;
        //     text-align: center;
        //     width: 100%;
        //     height: 100%;
        //     display: flex;
        //     flex-direction: column;
        //     gap: 10px;
        //     align-items: center;
        //     justify-content: center;
        //     transition: .5s;
        //     opacity: 1;
        //     color: $color-black;
        //     font-size: 24px;
        //     font-weight: bold;
        //     text-transform: uppercase;
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translateX(-50%) translateY(-50%);
        //     z-index: 1;
        //     backdrop-filter: blur(2px);

        //     img {
        //         width:24px;
        //         height: 24px;
        //     }
        // }

        img {
            width: 100%;
        }

        // &:after {
        //     transition: .5s;
        //     border-radius: 10px;
        //     top: 0;
        //     left: 0;
        //     position: absolute;
        //     content: '';
        //     width: 100%;
        //     height: 100%;
        //     background-color: $color-white;
        //     opacity: 0.6;
        // }

        // &:hover {
        //     div {
        //         opacity: 0;
        //     }
        //     &:after {
        //     position: absolute;
        //     content: '';
        //     width: 100%;
        //     height: 100%;
        //     background-color: inherit;
        // }
        // }
    }
}
</style>