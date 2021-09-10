<template>
  <section>
    <header></header>
    <main></main>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
      test: "Ciao",
    };
  },
  methods: {
    getData() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=c52f6a9d71fd6172aee943d2c2d89147&language=it_IT&query=ritorno+al+futuro"
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>