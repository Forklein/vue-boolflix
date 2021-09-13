<template>
  <section>
    <header>
      <section class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-6">
            <h1>Boolflix</h1>
          </div>
          <div class="col-6">
            <Search @getData="getData" placeholder="Cerca un film..." />
          </div>
        </div>
      </section>
    </header>
    <main>
      <div class="container">
        <div class="row my-2">
          <h2 v-if="active && searchMovie.length > 0">
            Movies {{ searchMovie.length }} risultati
          </h2>
          <h1 v-else>Nessun risultato per Movies</h1>
          <div v-for="movie in searchMovie" :key="movie.id" class="col-3 my-3">
            <Card class="shadow" :cardMovie="movie" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row my-2">
          <h2 v-if="active && searchSeries.length > 0">
            Series {{ searchSeries.length }} risultati
          </h2>
          <h1 v-else>Nessun risultato per Series</h1>
          <div
            v-for="series in searchSeries"
            :key="series.id"
            class="col-3 my-3"
          >
            <Card class="shadow" :cardSeries="series" />
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
      if (!data) {
        this.searchMovie = this.searchSeries = [];
        return;
      } else {
        this.query = data;
        this.active = true;
        this.getMovie();
        this.getSeries();
      }
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
@import "../assets/scss/_variables.scss";
header {
  background-color: $header-color;
  color: $text-black;
}

h2 {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>