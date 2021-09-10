<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from "@/components/Content.vue";

export default {
  name: "App",
  components: {
    Content,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>
