<template>
  <section>
    <header>
      <section class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <h1>Boolflix</h1>
          </div>
          <div class="col-6 d-flex align-items-center">
            <Genres @getGenre="getGenre" :genres="genres" />
            <Search @getData="getData" placeholder="Cerca un film..." />
          </div>
        </div>
      </section>
    </header>
    <main>
      <!-- Movie section -->
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
      <!-- Series section -->
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
import Genres from "@/components/Select.vue";

import axios from "axios";

export default {
  name: "Content",
  components: {
    Search,
    Card,
    Genres,
  },
  data() {
    return {
      apiKey: "c52f6a9d71fd6172aee943d2c2d89147",
      baseUri: "https://api.themoviedb.org/3/",
      searchMovie: [],
      searchSeries: [],
      genres: [],
      genre: "All",
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
          `${this.baseUri}search/movie?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
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
          `${this.baseUri}search/tv?api_key=${this.apiKey}&language=it_IT&query=${this.query}`
        )
        .then((res) => {
          this.searchSeries = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGenre(data) {
      this.genre = data;
    },
  },
  created() {
    axios
      .get(`${this.baseUri}/genre/movie/list?api_key=${this.apiKey}`)
      .then((res) => {
        this.genres = res.data.genres;
      })
      .catch((err) => {
        console.log(err);
      });
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