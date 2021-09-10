<template>
  <div class="search-bar text-center">
    <input @keyup.enter="getData" type="text" v-model.trim="query" />
    <button @click="getData" class="m-3">Search</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      apiKey: "c52f6a9d71fd6172aee943d2c2d89147",
      query: "",
      searchObj: [],
    };
  },
  methods: {
    getData() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
        )
        .then((res) => {
          console.log(res.data.results);
          this.searchObj = res.data.results;
          this.$emit("searchObj", this.searchObj);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>