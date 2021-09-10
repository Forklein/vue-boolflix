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
          <h1 v-if="active && searchMovie.length > 0">
            Movies {{ searchMovie.length }}
          </h1>
          <h1 v-else>Nessun risultato per Movies</h1>
          <div v-for="movie in searchMovie" :key="movie.id" class="col-4 m-2">
            <Card :cardMovie="movie" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <h1 v-if="active && searchSeries.length > 0">
            Series {{ searchSeries.length }}
          </h1>
          <h1 v-else>Nessun risultato per Series</h1>
          <div
            v-for="series in searchSeries"
            :key="series.id"
            class="col-4 m-2"
          >
            <Card :cardSeries="series" />
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Content",
  components: {
    Search,
    Card,
  },
  data() {
    return {
      apiKey: "c52f6a9d71fd6172aee943d2c2d89147",
      searchMovie: [],
      searchSeries: [],
      query: "",
      active: false,
    };
  },
  methods: {
    getData(data) {
      this.query = data;
      this.active = true;
      this.getMovie();
      this.getSeries();
    },
    getMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
        )
        .then((res) => {
          this.searchMovie = res.data.results;
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
          this.searchSeries = res.data.results;
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