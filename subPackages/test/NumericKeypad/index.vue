<!-- MyComponent.vue -->

<template>
  <div>
    <p>{{ data }}</p>
    <input v-model="newData" type="text" />
    <button @click="updateData">更新数据</button>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { useStore } from 'vuex';

const newData = ref('');
const store = useStore(); // 获取 Vuex store

const data = computed(() => store.state.data);

const updateData = () => {
  store.dispatch('updateData', newData.value);
  newData.value = ''; // 清空输入框
};
</script>
