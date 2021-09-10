<template>
  <section>
    <header>
      <section class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-6">
            <h1>Boolflix</h1>
          </div>
          <div class="col-6">
            <Search @getData="getData" />
          </div>
        </div>
      </section>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div
            v-for="movie in searchMovie"
            :key="movie.id"
            class="col-4 shadow m-2"
          >
            <h2>{{ movie.title }}</h2>
            <h5>{{ movie.original_title }}</h5>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Search from "@/components/Search.vue";
import axios from "axios";

export default {
  name: "Content",
  components: {
    Search,
  },
  data() {
    return {
      apiKey: "c52f6a9d71fd6172aee943d2c2d89147",
      searchMovie: [],
      searchSeries: [],
      query: "",
    };
  },
  methods: {
    getData(data) {
      this.query = data;
      this.getMovie();
      this.getSeries();
    },
    getMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
        )
        .then((res) => {
          console.log(res.data.results, this.query);
          this.searchMovie = res.data.results;
          this.$emit("searchMovie", this.searchMovie);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSeries() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
        )
        .then((res) => {
          console.log(res.data.results, this.query);
          this.searchSeries = res.data.results;
          this.$emit("searchSeries", this.searchSeries);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: darkred;
}
</style>