import { ref } from 'vue';

// 定义 mixin 函数，返回一个包含数据和方法的对象
export default function useMixin() {
  // 在 mixin 中定义数据
  const count = ref(0);

  // 在 mixin 中定义方法
  function increment() {
    count.value++;
  }

  // 返回数据和方法
  return {
    count,
    increment
  };
}
