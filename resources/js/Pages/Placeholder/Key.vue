<template>
  <main-layout title="Placeholder">
    <div v-if="!!placeholder">
      <div>
        {{ placeholder.title }} -
        <small>{{ placeholder.userId }}</small>
      </div>

      <img src="https://via.placeholder.com/600x315" />
      <div>{{ placeholder.body}}</div>
      {{placeholder.id}}
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";

const components = {
  MainLayout,
};

export default {
  beforeMount() {
    // recuperar o id que sera usado para o request do placeholder
    const { slug } = this.$route.params
    console.log('slug', slug)
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
        { vmid: "og:type", property: "og:type", content: this.metaTag.type },
        { vmid: "og:title", property: "og:title", content: this.metaTag.title },
        {
          vmid: "og:description",
          property: "og:description",
          content: this.metaTag.description,
        },
        { vmid: "og:image", property: "og:image", content: this.metaTag.image },
        { vmid: "og:url", property: "og:url", content: this.metaTag.url },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: this.metaTag.site_name,
        },

        // twitter
        { vmid: "twitter:url", name: "twitter:url", content: this.metaTag.url },
        {
          vmid: "twitter:title",
          name: "twitter:title",
          content: this.metaTag.title,
        },
        {
          vmid: "twitter:description",
          name: "twitter:description",
          content: this.metaTag.description,
        },
        {
          vmid: "twitter:image",
          name: "twitter:image",
          content: this.metaTag.image,
        },
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
        site_name: ""
      },
    };
  },
  components,
  props: {
    placeholder: {},
    event: [],
    id: 0,
    metaTag: {
      type: "article",
      title: "",
      description: "",
      image: "",
      url: "",
      site_name: "",
    },
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.placeholder = json;
        this.metaTag.title = this.placeholder.title;
        this.metaTag.author = "João Antonio Gardin Vieira";
        this.metaTag.description =
          "Essa é uma descrição longa da pagina que vai ser exibida";
        this.metaTag.image = "https://via.placeholder.com/600x315";

        console.log("terminou", this.metaTag);
      })
      .catch((err) => console.log(err));
  },
};
</script>