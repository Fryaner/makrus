<script setup>
</script>

<template>
    <div class="title">
        <h2 class="title__title"><slot></slot></h2>
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
    .title {
        display: flex;
        align-items: center;
        gap:15px;
        padding: 50px 0 50px 0;

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