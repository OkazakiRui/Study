<template>
    <b-container>
        <b-input-group>
            <b-form-input type="text" v-model="value"></b-form-input>
            <b-input-group-append>
                <b-button variant="primary" @click="handleAddTodo">追加する</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-container>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleAddTodo() {
      this.$emit('handlePearentAddTodo', this.value);
      this.value = '';
    },
  },
};
</script>

<style scoped>

</style>
