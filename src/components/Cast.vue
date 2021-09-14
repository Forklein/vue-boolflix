<template>
  <div class="cast">
    <h3>Cast</h3>
    <p class="m-0" v-for="(actor, index) in cast" :key="index">
      {{ actor }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cast",
  data() {
    return {
      cast: [],
    };
  },
  props: ["id"],
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=c52f6a9d71fd6172aee943d2c2d89147`
      )
      .then((res) => {
        for (let i = 0; i < 5; i++) {
          this.cast.push(res.data.cast[i].name);
        }
      });
  },
};
</script>

<style scoped lang="scss">
</style>