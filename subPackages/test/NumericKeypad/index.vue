<template>
    <view>
      <picker mode="multiSelector" :range="[years, months]" @change="onDateChange">
        <view>{{ selectedYear }} - {{ selectedMonth }}</view>
      </picker>
    </view>
  </template>
  
  <script>
  export default {
    data() {
      return {
        years: ['2022', '2023', '2024'],
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        selectedYear: '2022',
        selectedMonth: '1'
      };
    },
    methods: {
      onDateChange(event) {
        const [yearIndex, monthIndex] = event.detail.value;
        this.selectedYear = this.years[yearIndex];
        this.selectedMonth = this.months[monthIndex];
        console.log(this.selectedYear, this.selectedMonth);
      }
    }
  };
  </script>