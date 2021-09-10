<template>
  <div class="search-bar text-center">
    <input type="text" v-model.trim="query" />
    <button @click="sendInput" class="m-3">Search</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    sendInput() {
      this.$emit("getData", this.query);
    },
  },
};
</script>

<style scoped lang="scss">
</style>