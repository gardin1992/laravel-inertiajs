<template>
  <main-layout title="Pokemons">
    <div class="row">
      <div class="col-3" v-for="pokemon in pokemons" :key="pokemon.id">
        <inertia-link
          class="px-6 py-4 flex items-center focus:text-indigo-500"
          :href="'/pokemons/' + getId(pokemon.url)"
        >
          <pokemon-card v-bind="{...pokemon}"></pokemon-card>
        </inertia-link>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";
import PokemonCard from "@/Shared/PokemonCard";

const components = {
  MainLayout,
  PokemonCard,
};

export default {
  metaInfo: {
    title: "Pokemons",
  },
  components,
  props: {
    pokemons: [],
  },
  mounted() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        this.pokemons = json.results;

        console.log(this.pokemons);
      });
  },
  methods: {
    getImgLink(url) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(
        url
      )}.png`;
    },
    getId(url) {
      const arr = url.split("/");
      arr.pop();

      return arr.pop();
    },
  },
};
</script>
