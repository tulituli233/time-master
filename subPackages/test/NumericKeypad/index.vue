<template>
    <view>
        <scroll-view class="sv" scroll-y :scroll-top="scrollTop" @scroll="handleScroll">
            <view v-for="item in 100" :key="item">{{ item }}</view>
        </scroll-view>
        <view @click="setScrollTop(0)">回到顶部</view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const scrollTop = ref(0);
const handleScroll = (event) => {
    console.log(event.detail.scrollTop);
    console.log('scrollTop', scrollTop.value);
    scrollTop.value = 1000;
}

const setScrollTop = (value) => {
    console.log('setScrollTop', value);
    scrollTop.value = value;
}
</script>

<style lang="scss" scoped>
.sv {
    height: 50vh;
}
</style>