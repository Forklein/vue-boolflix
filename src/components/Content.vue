<template>
  <section>
    <header>
      <section class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-6">
            <h1>Boolflix</h1>
          </div>
          <div class="col-6">
            <Search @searchObj="getData" />
          </div>
        </div>
      </section>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div v-for="obj in searchObj" :key="obj.id" class="col-4 shadow m-2">
            <h2>{{ obj.title }}</h2>
            <h5>{{ obj.original_title }}</h5>
            <p>{{ obj.original_language }}</p>
            <p>{{ obj.vote_average }}</p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "Content",
  components: {
    Search,
  },
  data() {
    return {
      searchObj: [],
    };
  },
  methods: {
    getData(data) {
      this.searchObj = data;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: darkred;
}
</style>