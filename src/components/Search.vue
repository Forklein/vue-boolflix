<template>
  <div class="search-bar text-center">
    <input
      :placeholder="placeholder"
      @keyup.enter="sendInput"
      type="text"
      v-model.trim="query"
    />
    <button @click="sendInput" class="m-2">Search</button>
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
  props: ["placeholder"],
  methods: {
    sendInput() {
      this.$emit("getData", this.query);
      this.query = "";
    },
  },
};
</script>

<style scoped lang="scss">
</style>