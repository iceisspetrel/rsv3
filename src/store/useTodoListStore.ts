import { defineStore } from "pinia";

interface Todo {
  name: string;
}

interface State {
  todoList: Array<Todo>;
}

/**
 * pinia 选项式声明
 */
export const useTodoListStore = defineStore("todoList", {
  state: (): State => {
    return {
      todoList: []
    };
  },
  getters: {
    size: (state): number => state.todoList.length
  },
  actions: {
    getNextSize(): number {
      return this.todoList.length + 1;
    },
    add() {
      this.todoList.push({
        name: Date.now() + ""
      });
    }
  }
});
