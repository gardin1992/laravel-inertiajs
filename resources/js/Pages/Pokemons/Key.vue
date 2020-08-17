<template>
  <main-layout title="Pokemon">
    <div v-if="!!id">
      <div class="pk_name">{{ name }}</div>

      <div class="pk_container">
        <div class="pk_imagem">
          <img :src="this.getUrl()" class="card-img-top" alt="..." />
        </div>
        <div class="pk_stats">
          <span>height: {{ height}}</span>
          <span>weight: {{ weight}}</span>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";
import { pokemon_getId, pokemon_getUrlImage } from "@/Utils/index";

const components = {
  MainLayout,
};

export default {
  beforeMount() {
    // recuperar o id que sera usado para o request do placeholder
    const { id } = this.route().params;
    this.id = id;
  },
  metaInfo() {
    return {
      title: this.metaTag.title,
      titleTemplate: (title) =>
        title ? `${title} - Testando InertiaJS` : "Testando InertiaJS",
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.metaTag.description,
        },
        { vmid: "image", name: "image", content: this.metaTag.image },
        // facebook
        { vmid: "og:title", property: "og:title", content: this.metaTag.title },
        {
          vmid: "og:description",
          property: "og:description",
          content: this.metaTag.description,
        },
        { vmid: "og:image", property: "og:image", content: this.metaTag.image },
      ],
    };
  },
  data() {
    return {
      metaTag: {
        url: "",
        title: "",
        description: "",
        image: "",
        type: "",
        author: "",
        site_name: "",
      },
    };
  },
  components,
  props: {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
  },
  methods: {
    updateMetatag() {
      this.metaTag.title = this.name;
      this.metaTag.author = "João Antonio Gardin Vieira";
      this.metaTag.description =
        "Essa é uma descrição longa da pagina que vai ser exibida";
      this.metaTag.image = this.getUrl();
    },
    getUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    },
  },
  mounted() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.id = json.id;
        this.name = json.name;
        this.height = json.height;
        this.weight = json.weight;

        this.updateMetatag();
        const q = document.querySelector('[property="og:title"]')

        if (!!q)
          q.setAttribute('content', this.metaTag.title)

        console.log('q', q)

      })
      .catch((err) => console.log(err));
  },
};
</script>