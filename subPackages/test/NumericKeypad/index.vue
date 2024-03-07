<template>

</template>

<script setup>
// 假设tasks是一个包含近30天数据的数组，每个元素是一个任务对象
const tasks = [
  { TaskID: 1, UserID: 1, Title: '请假', Description: null, DueDate: '2024-03-01T15:10:58.000Z' },
  { TaskID: 2, UserID: 1, Title: '会议', Description: null, DueDate: '2024-03-01T15:10:58.000Z' },
  { TaskID: 3, UserID: 1, Title: '开发', Description: null, DueDate: '2024-03-02T15:10:58.000Z' },
  // 其他数据...
];

// 初始化dayPlan数组，包含30个元素，每个元素为一个对象，包含日期和计划数组
const dayPlan = Array(30).fill().map((_, index) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - (30 - index)); // 计算近30天的日期
  return { date: currentDate.toISOString().split('T')[0], plans: [] };
});

// 使用forEach方法将tasks中的数据按照日期分组加入到dayPlan数组中
tasks.forEach(task => {
  const taskDate = new Date(task.DueDate);
  const today = new Date(); // 当前日期
  const diffTime = Math.abs(today - taskDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 30) {
    const index = 30 - diffDays; // 计算日期在dayPlan数组中的索引
    dayPlan[index].plans.push({ title: task.Title, description: task.Description });
  }
});

console.log(dayPlan);
</script>

<style scoped></style>