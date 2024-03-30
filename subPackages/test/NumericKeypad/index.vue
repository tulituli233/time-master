<template>
    <div>
        <textarea v-model="inputValue" @input="handleInput"></textarea>
        <!-- 撤销 ctrl + z -->
        <button @click="recallPreviousInput">Recall</button>
        <!-- 恢复 ctrl + y -->
        <button @click="restorePreviousInput">Restore</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '1',
            inputHistory: [],
            currentHistoryIndex: -1,
        };
    },
    created() {
        this.inputHistory.push(this.inputValue);
    },
    methods: {
        handleInput() {
            this.inputHistory.push(this.inputValue);
            this.currentHistoryIndex = this.inputHistory.length - 1;
            console.log('inputHistory', this.inputHistory);
        },
        recallPreviousInput() {
            if (this.currentHistoryIndex > 0) {
                this.inputValue = this.inputHistory[--this.currentHistoryIndex];
            }
        },
        restorePreviousInput() {
            if (this.currentHistoryIndex < this.inputHistory.length - 1) {
                this.inputValue = this.inputHistory[++this.currentHistoryIndex];
            }
        },
    },
};
</script>