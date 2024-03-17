<template>
    <view>
        <input class="volume-control" type="range" ref="volumeControl" :value="props.initialVolume" @input="updateVolume" />
    </view>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    initialVolume: {
        type: Number,
        default: 50,
    },
    backgroundColor: {
        type: String,
        default: 'green',
    }
});

const updateVolume = (event) => {
    // props.initialVolume = event.detail.value;
};
</script>

<style lang="scss" scoped>
.volume-control {
    width: 100%;
    height: 40rpx;
}
</style>