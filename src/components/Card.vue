<template>
  <div class="card">
    <div v-if="cardMovie" class="card-movie">
      <h3>{{ cardMovie.title }}</h3>
      <h5>{{ cardMovie.original_title }}</h5>
      <p>{{ cardMovie.original_language }}</p>
      <img
        style="width: 50px"
        :src="getFlag(cardMovie.original_language)"
        alt="flag"
      />
      <p>{{ Math.ceil(cardMovie.vote_average) }}</p>
    </div>
    <div v-else class="card-series">
      <h3>{{ cardSeries.name }}</h3>
      <h5>{{ cardSeries.original_name }}</h5>
      <p>{{ cardSeries.original_language }}</p>
      <img
        style="width: 50px"
        :src="getFlag(cardSeries.original_language)"
        alt="flag"
      />
      <p>{{ Math.ceil(cardSeries.vote_average) }}</p>
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
  },
};
</script>

<style scoped lang="scss">
.card {
  min-height: 300px;
}
</style>