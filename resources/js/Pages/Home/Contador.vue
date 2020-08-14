<template>
  <main-layout title="Contador">
    <contador />
  </main-layout>
</template>

<script>
import Contador from "@/Shared/Contador";
import MainLayout from "@/Layouts/MainLayout";

const components = {
  Contador,
  MainLayout,
};

export default {
  metaInfo: {
    title: "Contador",
  },
  components,
  props: {
    posts: [],
    event: [],
  },
};
</script>
