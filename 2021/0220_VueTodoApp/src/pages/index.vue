<template>
  <div>
    <h1>Todoリスト</h1>
    <todo-form @handlePearentAddTodo="handlePearentAddTodo"></todo-form>
    <todo-list :todos="todos"
     @handlePearentRemoveTodo = "handlePearentRemoveTodo"
     @handlePearentCompleteTodo = "handlePearentCompleteTodo"
     ></todo-list>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    handlePearentAddTodo(value) {
      if (value) {
        this.todos.unshift({ text: value, complete: false });
      }
    },
    handlePearentRemoveTodo(index) {
      this.todos.splice(index, 1);
    },
    handlePearentCompleteTodo(index) {
      this.todos[index].complete = !(this.todos[index].complete);
    },
  },
};
</script>

<style scoped></style>
