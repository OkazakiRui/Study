<template>
  <div class="searchWrap">
    <input
      type="text"
      class="searchInput"
      v-model="searchWord"
      placeholder="本のタイトルを入力してください。"
      @keyup.enter="enter"
      @keypress="setWord"
    />
    <button class="searchButton" @click="searchRequest">検索する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: '',
      setWordBool: false,
    };
  },
  methods: {
    setWord() {
      this.setWordBool = true;
    },
    enter: function() {
      if (!this.setWordBool) {
        return;
      }
      this.searchRequest();
      this.setWordBool = false;
    },
    searchRequest() {
      // console.log('リクエスト送信:', this.searchWord);
      this.$emit('searchRequest', this.searchWord);
    },
  },
};
</script>

<style scoped>
.searchWrap {
  width: 80%;
  margin: 30px auto;
}
.searchInput {
  width: 80%;
  box-shadow: inset 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0 0 10px;
  padding: 0 10px;
}
.searchButton {
  width: 20%;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0 10px 10px 0;
  background-color: forestgreen;
  color: white;
}
</style>
