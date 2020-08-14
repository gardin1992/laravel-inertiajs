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
    };
  },
  data() {
    return {
      metaTag: {
        title: "",
        description: "",
        image: "",
        url: "",
        site_name: "",
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
      },
    };
  },
  components,
  props: {
    placeholder: Object,
    event: [],
    id: 0,
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        this.placeholder = json;
        this.metaTag.title = this.placeholder.title;
        this.metaTag.author = "João Antonio Gardin Vieira";
        this.metaTag.description =
          "Essa é uma descrição longa da pagina que vai ser exibida";

        this.metaTag.image = "https://via.placeholder.com/600x315";

        this.metaTag.meta.push({ property: "og:image", content: this.metaTag.image });
        this.metaTag.meta.push({ name: 'twitter:image', content: this.metaTag.image });

        var a = this.metaTag.meta.find(a => a.name == 'twitter:image');
        console.log(a)

        this.metaTag.meta.push({ property: "og:image:width", content: "600" });
        this.metaTag.meta.push({ property: "og:image:height", content: "315" });
        this.metaTag.meta.push({ property: "og:type", content: "article" });
      })
      .catch((err) => console.log(err));
  },
};
</script>