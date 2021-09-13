<template>
  <div class="select m-2">
    <select v-model.trim="query" @change="sendInput">
      <option>All</option>
      <option v-for="genre in genres" :key="genre.id">
        {{ genre.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Genres",
  data() {
    return {
      query: "All",
    };
  },
  props: ["genres"],
  methods: {
    sendInput() {
      this.$emit("getGenre", this.query);
    },
  },
};
</script>

<style scoped lang="scss">
</style>