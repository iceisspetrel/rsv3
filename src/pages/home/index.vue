<script lang="ts" setup>
import { DirectiveBinding, onMounted, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { useTodoListStore } from "@/store/useTodoListStore";

const todoListStore = useTodoListStore();

/**
 * 访问route对象，对应vue2中的 this.$route
 */
const route = useRoute();

const x = ref(1);

const y = reactive({ name: "zs" });

console.log(x, "x");

console.log(y, "y");

/**
 * 监听store中的action调用
 */
todoListStore.$onAction(options => {
  console.log("监听store的action变化");
  console.log(JSON.stringify(options));
});

/**
 * 监听store中的state变化
 */
todoListStore.$subscribe(options => {
  console.log("监听store的action变化");
  console.log(JSON.stringify(options));
});

const color = ref("green");

/**
 * 颜色指令，自动改变文字颜色
 */
const vColor = (el: HTMLElement, binding: DirectiveBinding) => {
  if (!binding.value) return;
  el.style.color = binding.value;
};

const getData = async () => {
  console.log("route", route);
  /**
   * 通过store.$patch修改state
   */
  todoListStore.$patch(state => {
    state.todoList.push({ name: "from getData" });
  });
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
  <div>
    <button style="width: 150px" @click="todoListStore.add">增加</button>
  </div>
  <div>
    <ul>
      <li
        v-for="(item, index) in todoListStore.todoList"
        :key="index"
        v-text="item.name"
      ></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
