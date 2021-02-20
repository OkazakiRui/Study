<template>
    <div>
        <b-container>
            <b-row v-for="(todo,index) in todos" :key="index" class="mt-2">
                <b-col cols="8" :class="[{line:todo.complete},'text-left']">
                    <h5>{{todo.text}}</h5>
                </b-col>
                <b-col cols="4" class="text-right">
                    <b-button @click="handleCompleteTodo(index)" v-text="todo.complete ? '完了' : '未完了'" :variant="todo.complete ? 'success' : 'secondary'"></b-button>
                    <b-button @click="handleRemoveTodo(index)" variant="danger">削除</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['todos'],
  methods: {
    handleRemoveTodo(index) {
      this.$emit('handlePearentRemoveTodo', index);
    },
    handleCompleteTodo(index) {
      this.$emit('handlePearentCompleteTodo', index);
    },
  },
};
</script>

<style scoped>
h5{
      line-height:38px;
       padding:0 10px;
        font-size: 24px;

}
.line{
    text-decoration: line-through;
}
</style>
