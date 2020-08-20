<template>
  <main>
    <header>
      <navbar />
    </header>
    <div class="container">
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
};
</script>