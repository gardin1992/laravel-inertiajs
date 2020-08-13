<template>
  <main>
    <header>
      <inertia-link href="/">Home</inertia-link>
      <inertia-link href="/contador">Contador</inertia-link>
      <inertia-link href="/pets">Pets</inertia-link>
    </header>
    <article>
      <slot />
    </article>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
  },
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