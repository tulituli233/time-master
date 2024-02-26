<template>
	<view class="content">
		jizhang
	</view>
</template>

<script setup>
// 输入：
// [
// 	{ status: 0, isTop: 1, date: '2023-10-01' },
// 	{ status: 0, isTop: 0, date: '2023-10-02' },
// 	{ status: 0, isTop: 0, date: '2023-10-03' },
// 	{ status: 0, isTop: 0, date: '2023-10-04' },
// 	{ status: 0, isTop: 0, date: '2023-10-05' },
// 	{ status: 0, isTop: 0, date: '2023-10-06' },
// 	{ status: 0, isTop: 0, date: '2023-10-07' },
// 	{ status: 0, isTop: 0, date: '2023-10-08' },
// 	{ status: 0, isTop: 0, date: '2023-10-09' },
// 	{ status: 0, isTop: 0, date: '2023-10-10' },
// 	{ status: 1, isTop: 0, date: '2023-10-11' },
// 	{ status: 2, isTop: 0, date: '2023-10-12' }
// ]
// 输出：
// [
// 	{
// 		title: '置顶', plans: [
// 			{ status: 0, isTop: 1, date: '2023-10-01' }
// 		]
// 	},
// 	{
// 		title: '今天', plans: [
// 			{ status: 0, isTop: 0, date: '2023-10-02' }
// 		]
// 	},
// 	{
// 		title: '明后天', plans: [
// 			{ status: 0, isTop: 0, date: '2023-10-03' },
// 			{ status: 0, isTop: 0, date: '2023-10-04' }
// 		]
// 	},
// 	{
// 		title: '7天内', plans: [
// 			{ status: 0, isTop: 0, date: '2023-10-05' },
// 			{ status: 0, isTop: 0, date: '2023-10-06' },
// 			{ status: 0, isTop: 0, date: '2023-10-07' },
// 			{ status: 0, isTop: 0, date: '2023-10-08' },
// 			{ status: 0, isTop: 0, date: '2023-10-09' }
// 		]
// 	},
// 	{
// 		title: '未来', plans: [
// 			{ status: 0, isTop: 0, date: '2023-10-10' }
// 		]
// 	},
// 	{
// 		title: '完成', plans: [
// 			{ status: 1, isTop: 0, date: '2023-10-11' }
// 		]
// 	},
// 	{
// 		title: '失败', plans: [
// 			{ status: 2, isTop: 0, date: '2023-10-12' }
// 		]
// 	}
// ]
function groupPlansByTitle(input) {
  const output = [];

  // Group plans by title
  const groups = input.reduce((acc, plan) => {
    const title = getTitle(plan.date);
    if (!acc[title]) {
      acc[title] = [];
    }
    acc[title].push(plan);
    return acc;
  }, {});

  // Convert groups to the desired output format
  for (const title in groups) {
    output.push({ title, plans: groups[title] });
  }

  return output;
}

function getTitle(dateString) {
  const today = new Date();
  const date = new Date(dateString);
  const diffTime = date - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return '今天';
  } else if (diffDays === 1 || diffDays === 2) {
    return '明后天';
  } else if (diffDays <= 7) {
    return '7天内';
  } else if (diffDays > 7) {
    return '未来';
  } else {
    return '未知';
  }
}

const input = [
  { status: 0, isTop: 1, date: '2023-10-01' },
  { status: 0, isTop: 0, date: '2023-10-02' },
  { status: 0, isTop: 0, date: '2023-10-03' },
  { status: 0, isTop: 0, date: '2023-10-04' },
  { status: 0, isTop: 0, date: '2023-10-05' },
  { status: 0, isTop: 0, date: '2023-10-06' },
  { status: 0, isTop: 0, date: '2023-10-07' },
  { status: 0, isTop: 0, date: '2023-10-08' },
  { status: 0, isTop: 0, date: '2023-10-09' },
  { status: 0, isTop: 0, date: '2023-10-10' },
  { status: 1, isTop: 0, date: '2023-10-11' },
  { status: 2, isTop: 0, date: '2023-10-12' }
];

const output = groupPlansByTitle(input);
console.log(output);
</script>

<style lang="scss"></style>
