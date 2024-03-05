<template>
    <div class="numeric-keypad">
        <div class="display">{{ inputValue }}</div>
        <table>
            <tr v-for="(row, rowIndex) in keypadLayout" :key="rowIndex">
                <td v-for="(key, keyIndex) in row" :key="keyIndex" @click="handleKeyPress(key)">
                    {{ key }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const keypadLayout = [
    [1, 2, 3, '+'],
    [4, 5, 6, '-'],
    [7, 8, 9, '完成'],
    ['.', 0, 'DEL', '=']
];

const inputValue = ref('');

const handleKeyPress = (key) => {
    if (key === 'DEL') {
        // Handle delete key press
        inputValue.value = inputValue.value.slice(0, -1);
    } else if (key === '=') {
        // Handle equal key press
        // Example: Evaluate the expression
        inputValue.value = eval(inputValue.value);
    } else if (key === '完成') {
        // Handle done key press
        // Example: Submit the form or close the keypad
        hideKeypad();
    } else {
        // Append the pressed key to the input value
        inputValue.value += key;
    }
};

const hideKeypad = () => {
    // Emit an event to parent component to hide the keypad
    // Example: this.$emit('hide-keypad');
};
</script>

<style scoped>
.numeric-keypad {
    width: 100%;
}

.display {
    margin-bottom: 10px;
    padding: 10px;
    text-align: right;
}

table {
    width: 100%;
    border-collapse: collapse;
}

td {
    width: 25%;
    padding: 10px;
    text-align: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
}

td:hover {
    background-color: #ddd;
}
</style>