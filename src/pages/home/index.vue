<script lang="ts" setup>
import { DirectiveBinding, onMounted, ref } from "vue";

const color = ref("green");

// setup中自定义指令写法
/**
 * 颜色指令，自动改变文字颜色
 */
const vColor = (el: HTMLElement, binding: DirectiveBinding) => {
  if (!binding.value) return;
  el.style.color = binding.value;
};

const getData = async () => {
  return await fetch("/security/mvc-routes", {
    method: "get"
  });
};

onMounted(async () => {
  const res = await getData();
});
</script>
<template>
  <h1 v-color="color" v-bold>HOME</h1>
  <div v-color="'red'" v-bold="700">全局指令和局部指令共同使用</div>
</template>
<style lang="scss" scoped></style>
