<template>
  <main-layout title="Pokemon">
    <div v-if="!!id">
      <div class="pk_name">{{ name }}</div>

      <div class="pk_container">
        <div class="pk_imagem">
          <img :src="this.getUrl()" class="img-thumbnail" alt="..." />
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
      title: `${this.userData.name} - Epiloge`,
      meta: [
        {
          name: "description",
          content:
            "Connect and follow " +
            this.userData.name +
            " on Epiloge - " +
            this.userData.tagline,
        },
        { property: "og:title", content: this.userData.name + " - Epiloge" },
        { property: "og:site_name", content: "Epiloge" },
        {
          property: "og:description",
          content:
            "Connect and follow " +
            this.userData.name +
            " on Epiloge - " +
            this.userData.tagline,
        },
        { property: "og:type", content: "profile" },
        {
          property: "og:url",
          content: "https://epiloge.com/@" + this.userData.username,
        },
        {
          property: "og:image",
          content:
            this.aws_url + "/users/" + this.userData.profileurl + "-main.jpg",
        },
      ],
    };
  },
  data() {
    return {
      userData: {
        name: '',
        tagline: '',
        profileurl: '',
      },
      id: 0,
      name: "",
      height: 0,
      weight: 0,
    };
  },
  components,
  props: {},
  methods: {
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

        this.userData.name = json.name;
        this.userData.tagline = 'taglinte,teste'
        this.userData.profileurl = 'gardin1992'

        const q = document.querySelector('[property="og:title"]');
        if (!!q) q.setAttribute("content", this.metaTag.title);

        console.log(this.userData)

        window.prerenderReady = true
      })
      .catch((err) => console.log(err));
  },
};
</script>