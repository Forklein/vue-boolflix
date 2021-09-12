<template>
  <div class="card">
    <div v-if="cardMovie" class="card-movie overflow-auto">
      <img class="w-100" :src="getCover(cardMovie.poster_path)" alt="cover" />
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
        v-for="(star, index) in getStars(Math.ceil(cardMovie.vote_average / 2))"
        :key="index"
        class="fas fa-star"
      ></i>
      <p>{{ cardMovie.overview }}</p>
    </div>
    <div v-else class="card-series overflow-auto">
      <img class="w-100" :src="getCover(cardSeries.poster_path)" alt="cover" />
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
        v-for="(star, index) in getStars(
          Math.ceil(cardSeries.vote_average / 2)
        )"
        :key="index"
        class="fas fa-star"
      ></i>
      <p>{{ cardSeries.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
      return `https://image.tmdb.org/t/p/w342${path}`;
    },
    getStars(num) {
      const arr = [];
      let star = "star";
      while (arr.length < num) {
        arr.push(star);
      }
      return arr;
    },
  },
};
</script>

<style scoped lang="scss">
i {
  color: rgb(117, 117, 97);
}

.card {
  height: 800px;
}
</style>