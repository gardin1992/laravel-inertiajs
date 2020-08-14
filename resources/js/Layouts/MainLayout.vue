<template>
  <main>
    <header>
      <navbar />
    </header>
    <div class="container">
      <div class="page-header">
        <h1>{{ title }}</h1>
      </div>
      <slot />
    </div>
  </main>
</template>

<script>
import Navbar from "@/Shared/Navbar";

const components = {
  Navbar,
};

export default {
  props: {
    title: String,
  },
  components,
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },
  },
  mounted() {
    console.log("construiu");
  },
};
</script>