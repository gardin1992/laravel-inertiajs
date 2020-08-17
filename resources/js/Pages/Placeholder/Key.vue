<template>
  <main-layout title="Placeholder">
    <div v-if="!!placeholder">
      <div>
        {{ placeholder.title }} -
        <small>{{ placeholder.userId }}</small>
      </div>

      <img
        src="https://via.placeholder.com/600x315"
      />
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
  metaInfo() {
    return {
      title: this.metaTag.title,
      titleTemplate: (title) => title ? `${title} - Testando InertiaJS` : 'Testando InertiaJS',
      meta: [
        { name: 'description', content: this.metaTag.description },
        { name: 'image', content: this.metaTag.image },
        // facebook
        { property: 'og:type', content: this.metaTag.type },
        { property: 'og:title', content: this.metaTag.title },
        { property: 'og:description', content: this.metaTag.description },
        { property: 'og:image', content: this.metaTag.image },
        { property: 'og:url', content: this.metaTag.url },
        { property: 'og:site_name', content: this.metaTag.site_name },

        // twitter
        { name: 'twitter:url', content: this.metaTag.url },
        { name: 'twitter:title', content: this.metaTag.title },
        { name: 'twitter:description', content: this.metaTag.description },
        { name: 'twitter:image', content: this.metaTag.image },
      ]
    };
  },
  data() {
    return {
      metaTag: {
        type: "article",
        title: "",
        description: "",
        image: "",
        url: "",
        site_name: "",
      },
    };
  },
  components,
  props: {
    placeholder: {},
    event: [],
    id: 0,
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

        console.log('terminou')
      })
      .catch((err) => console.log(err));
  },
};
</script>