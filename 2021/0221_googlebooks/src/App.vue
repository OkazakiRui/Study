<template>
  <div id="app">
    <search-form @searchRequest="searchRequest($event)"></search-form>
    <search-books :searchWord="searchWord"></search-books>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm';
import SearchBooks from './components/SearchBooks';
export default {
  name: 'App',
  components: {
    SearchForm,
    SearchBooks,
  },
  data() {
    return {
      searchWord: '',
    };
  },
  methods: {
    searchRequest(word) {
      this.searchWord = word;
    },
  },
};
</script>

<style></style>
