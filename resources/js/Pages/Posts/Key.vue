<template>
  <main-layout title=post.title>
    <div>
      {{ post.description }} -
      <small>{{ post.author }}</small>
    </div>
    <div>{{ post.text}}</div>
    {{post.id}} - {{post.name }}
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";

const components = {
  MainLayout,
};

export default {
  metaInfo: {
    title: "Postagens",
  },
  components,
  props: {
    post: Object,
    event: [],
  },
  mounted() {
    this.metaInfo.title = this.post.name;
  },
};
</script>