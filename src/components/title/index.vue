<script setup>
</script>

<template>
    <div class="title">
        <div class="title__info">
            <h2 class="title__title"><slot name="title"></slot></h2>
            <div class="line"></div>
        </div>
        <h3 class="title__sub-title"><slot name="sub-title"></slot></h3>
    </div>
</template>

<style lang="scss" scoped>
    .title {
        display: flex;
        flex-direction: column;
        padding: 50px 0 50px 0;

        &__info {
            display: flex;
            align-items: center;
            gap:15px;
        }

        &__title {
            font-size: 28px;
            font-weight: 700;

            @media screen and (max-width: $tablet-max-width){
                font-size: 24px;
            }
            @media screen and (max-width: $mobile-max-width){
                font-size: 20px;
            }
        }

        &__sub-title {
        color: $color-light-blue;
        font-size: 20px;

        @media screen and (max-width: $tablet-max-width){
            font-size: 16px;
        }
        @media screen and (max-width: $mobile-max-width){
            font-size: 12px;
        }
    }
    }

    .line {
        position: relative;
            height: 2px;
            flex: 1;
            background-color: $color-black;
            z-index: -1;

            &:after {
            content: '';
            position: absolute;
            height: 32px;
            width: 32px;
            background-color: $color-black;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 100%;
            right: 0;

            @media screen and (max-width: $mobile-max-width){
                height: 16px;
                width: 16px;
            }
        }
    }
</style>