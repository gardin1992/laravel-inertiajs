<template>
  <div id="main">
    <inertia-link href="/">Home</inertia-link>
    <inertia-link href="/contador">Contador</inertia-link>
    <inertia-link href="/post">post</inertia-link>
    <inertia-link href="/sobre">Sobre</inertia-link>

    <h1>Titulo: {{ post.title }}</h1>
    <div>
      {{ post.description }} -
      <small>{{ post.author }}</small>
    </div>
    <div>{{ post.text}}</div>
    {{post.id}} - {{post.name }}
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
  metaInfo: {},
  components: {},
  props: {
    post: Object,
  },
  mounted() {
    this.metaInfo.title = this.post.name;
  },
};
</script>
