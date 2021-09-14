<template>
  <section>
    <header>
      <section class="container">
        <div class="row d-lg-flex d-sm-block align-items-center">
          <div class="col-lg-6 col-12">
            <h1>Boolflix</h1>
          </div>
          <div class="col-lg-6 col-12 text-center">
            <Search
              class="w-100"
              @getData="getData"
              placeholder="Cerca un film..."
            />
          </div>
        </div>
      </section>
    </header>
    <main>
      <!-- Movie section -->
      <div class="container">
        <div class="row my-2">
          <div class="col-6">
            <h2 v-if="active && searchMovie.length > 0">
              Movies {{ searchMovie.length }} risultati
            </h2>
            <h1 v-else-if="active && !searchMovie.length">
              Nessun risultato per Movies
            </h1>
          </div>
          <div
            v-if="active && searchMovie.length > 0"
            class="col-6 d-flex align-items-center"
          >
            <Genres @getGenre="getGenMovie" :genres="genresMovie" />
          </div>
        </div>
        <div class="row my-2">
          <div
            v-for="movie in filteredMovie"
            :key="movie.id"
            class="col-lg-3 col-md-4 col-6 my-3"
          >
            <Card class="shadow" :cardMovie="movie" />
          </div>
        </div>
      </div>
      <!-- Series section -->
      <div class="container">
        <div class="row my-2">
          <div class="col-6">
            <h2 v-if="active && searchSeries.length > 0">
              Series {{ searchSeries.length }} risultati
            </h2>
            <h1 v-else-if="active && !searchSeries.length">
              Nessun risultato per Series
            </h1>
          </div>
          <div
            v-if="active && searchSeries.length > 0"
            class="col-6 d-flex align-items-center"
          >
            <Genres @getGenre="getGenSeries" :genres="genresSeries" />
          </div>
        </div>
        <div class="row my-2">
          <div
            v-for="series in filteredSeries"
            :key="series.id"
            class="col-lg-3 col-md-4 col-6 my-3"
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
import Genres from "@/components/Genres.vue";

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
      genresMovie: [],
      genresSeries: [],
      genMovie: "All",
      genSeries: "All",
      query: "",
      active: false,
    };
  },
  computed: {
    getFullGenres() {
      return [...this.genresMovie, ...this.genresSeries];
    },
    filteredMovie() {
      if (this.genMovie == "All") {
        return this.searchMovie;
      } else {
        return this.searchMovie.filter((el) => {
          if (el.genre_ids.includes(this.genMovie)) {
            return true;
          }
        });
      }
    },
    filteredSeries() {
      if (this.genSeries == "All") {
        return this.searchSeries;
      } else {
        return this.searchSeries.filter((el) => {
          if (el.genre_ids.includes(this.genSeries)) {
            return true;
          }
        });
      }
    },
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
    getGenMovie(data) {
      this.genMovie = data;
    },
    getGenSeries(data) {
      this.genSeries = data;
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
  },
  created() {
    axios
      .get(`${this.baseUri}/genre/movie/list?api_key=${this.apiKey}`)
      .then((res) => {
        this.genresMovie = res.data.genres;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${this.baseUri}/genre/tv/list?api_key=${this.apiKey}`)
      .then((res) => {
        this.genresSeries = res.data.genres;
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