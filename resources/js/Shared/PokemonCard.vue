<template>
  <div class="card" style="width: 18rem;">
    <img :src="this.getUrl(this.url)" class="card-img-top" alt="..." />
    <div class="card-body">
      <span class="number">{{ this.id }}</span>
      <span class="name">{{ this.name }}</span>
    </div>
  </div>
</template>

<script>
import { pokemon_getId, pokemon_getUrlImage } from "@/Utils/index";

export default {
  props: {
    id: 0,
    name: String,
    url: String,
  },
  methods: {
    getUrl(url) {
      return pokemon_getUrlImage(url);
    },
  },
  mounted() {
    this.id = pokemon_getId(this.url);
  },
};
</script>