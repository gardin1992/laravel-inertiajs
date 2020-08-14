<template>
  <main-layout title="Placeholder">
    <div v-if="!!placeholder">
      <div>
        {{ placeholder.title }} -
        <small>{{ placeholder.userId }}</small>
      </div>
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
      title: `${this.userData.name} - Epiloge`,
    };
  },
  data() {
    return {
      userData: {
        name: 'KSKSK'
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
    const self = this;

    this.userData.name = "tralala"
    console.log(this.userData)

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.placeholder = json;
        console.log(self.metaInfo);

        self.metaInfo.title = this.placeholder.name;
      })
      .catch((err) => console.log(err));

    this.cssTexts.push({
      vmid: "page-load-overlay",
      innerHTML: null,
    });
  },
};
</script>