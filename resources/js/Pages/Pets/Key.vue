<template>
  <div id="main">
    <inertia-link href="/">Home</inertia-link>
    <inertia-link href="/contador">Contador</inertia-link>
    <inertia-link href="/pets">Pets</inertia-link>
    <inertia-link href="/sobre">Sobre</inertia-link>

    <h1>Testando InertiaJS</h1>

    <h2>Item</h2>
    {{pet.id}} - {{pet.name }}
  </div>
</template>

<!-- Using the `scoped` attribute -->
<style scoped>
h1 {
  font-size: 2em;
}

h3 {
  font-size: 1.4em;
}

#main {
  width: 960px;
  margin: 0 auto;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "olhala", content: "Olha só, bunito." },
    ],
  },
  components: {
  },
  props: {
    pet: Object,
  },
  mounted() {
    this.metaInfo.title = this.pet.name;
  },
};
</script>
