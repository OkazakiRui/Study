<template>
  <div>
    <h3 v-if="searchWord">{{ searchWord + ' の検索結果' }}</h3>
    <div class="itemList">
      <a
        :v-if="items"
        class="itemWrap"
        v-for="(item, index) in items"
        :key="index"
        :href="item.link"
        target="SearchBooks"
      >
        <!-- <p>{{ item }}</p> -->
        <figure class="itemImg">
          <img :src="item.image" :alt="item.title" />
        </figure>
        <h4>{{ item.title }}</h4>
        <p class="itemText">{{ sliceBytes(item.description) }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchWord: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    searchWord(val) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}`)
        .then((response) => {
          if (response) {
            console.log('成功');
            return response.json();
          } else {
            console.log('失敗');
            return;
          }
        })
        .then((data) => {
          this.items = data.items.map((item) => {
            const vi = item.volumeInfo;
            return {
              title: vi.title,
              description: vi.description,
              link: vi.infoLink,
              image: vi.imageLinks ? vi.imageLinks.thumbnail : '',
            };
          });
        });
    },
    // items(val) {

    // },
  },
  methods: {
    sliceBytes(description) {
      // console.log(description);
      if (description) {
        let description_array = description.split('');
        let count = 0;
        let str = '';
        for (let i = 0; i < description_array.length; i++) {
          let n = escape(description_array[i]);
          if (n.length < 4) {
            count++;
          } else {
            count += 2;
          }
          if (count > 400) {
            return str + '...';
          }
          str += description.charAt(i);
        }
        return description;
      }
      return '';
    },
  },
};
</script>

<style scoped>
h3,
h4 {
  margin: 10px 0;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.itemList {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 32px;
  justify-content: space-between;
  width: 80%;
  margin: 24px auto;
}

.itemWrap {
  display: block;
  padding: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  background-color: #f2f2f2;
  border-radius: 15px;
}
.itemWrap:hover {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2),
    -2px -2px 2px 2px rgba(0, 0, 0, 0.2), 2px -2px 2px 2px rgba(0, 0, 0, 0.2),
    -2px 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.itemImg {
  width: 250px;
  height: 350px;
  margin: 0 auto;
}

.itemText {
  line-height: 20px;
  padding: 10px;
}
</style>
