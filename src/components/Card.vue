<template>
  <div class="card">
    <div v-if="cardMovie" class="card-movie overflow-auto">
      <img
        class="w-100 h-100 poster"
        :src="getCover(cardMovie.poster_path)"
        alt="cover"
      />
      <div class="card-movie-info text-center">
        <h3>{{ cardMovie.title }}</h3>
        <h5>{{ cardMovie.original_title }}</h5>
        <p>{{ cardMovie.original_language }}</p>
        <img
          style="width: 50px"
          :src="getFlag(cardMovie.original_language)"
          alt="flag"
        />
        <p>{{ Math.ceil(cardMovie.vote_average / 2) }}</p>
        <i
          v-for="(star, index) in 5"
          :key="index"
          class="fas fa-star"
          :class="
            getStars(index, Math.ceil(cardMovie.vote_average / 2))
              ? 'starred'
              : ''
          "
        ></i>
        <p>{{ cardMovie.overview }}</p>
      </div>
    </div>
    <div v-else class="card-series overflow-auto">
      <img
        class="w-100 h-100 poster"
        :src="getCover(cardSeries.poster_path)"
        alt="cover"
      />
      <div class="card-series-info text-center">
        <h3>{{ cardSeries.name }}</h3>
        <h5>{{ cardSeries.original_name }}</h5>
        <p>{{ cardSeries.original_language }}</p>
        <img
          style="width: 50px"
          :src="getFlag(cardSeries.original_language)"
          alt="flag"
        />
        <p>{{ Math.ceil(cardSeries.vote_average / 2) }}</p>
        <i
          v-for="(star, index) in 5"
          :key="index"
          class="fas fa-star"
          :class="
            getStars(index, Math.ceil(cardSeries.vote_average / 2))
              ? 'starred'
              : ''
          "
        ></i>
        <p>{{ cardSeries.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: ["cardMovie", "cardSeries"],
  methods: {
    getFlag(language) {
      switch (language.toLowerCase()) {
        case "it":
          return require("@/assets/img/it.png");
        case "en":
          return require("@/assets/img/en.png");
        case "es":
          return require("@/assets/img/es.png");
        case "ja":
          return require("@/assets/img/ja.png");
        default:
          return "";
      }
    },
    getCover(path) {
      if (path) {
        return `https://image.tmdb.org/t/p/w342${path}`;
      } else {
        return "https://www.altavod.com/assets/images/poster-placeholder.png";
      }
    },
    getStars(index, num) {
      // const arr = [];
      // let star = "star";
      // while (arr.length < num) {
      //   arr.push(star);
      // }
      // return arr;
      if (num > index) {
        return true;
      }
    },
    setOver() {
      setTimeout(() => {
        this.isOver = !this.isOver;
      }, 300);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables.scss";

.card {
  height: 450px;
  background-color: $text-black;
  color: $text-white;
  cursor: pointer;
  .card-movie-info,
  .card-series-info {
    display: none;
  }
  &:hover {
    .poster {
      display: none;
    }
    .card-movie-info,
    .card-series-info {
      display: block;
    }
  }
}

.starred {
  color: rgb(185, 185, 72);
}
</style>