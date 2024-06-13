import { defineStore } from "pinia";
import { ref, computed } from "vue";

/**
 * pinia 组合式声明
 * @description 通过 ref 声明的变量就是state的成员
 * @description 通过 computed 声明的变量就是getter的成员
 * @description function 声明的方法就是action
 */
export const useUserStore = defineStore("user", () => {
  const count = ref(0);
  const id = ref("xxx");
  const double = computed(() => count.value * 2);
  function add() {
    count.value++;
  }

  function $reset() {
    count.value = 0;
    id.value = "xxx";
  }

  return { count, id, double, add, $reset };
});
