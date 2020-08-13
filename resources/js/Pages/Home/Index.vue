<template>
  <div id="main">
    <inertia-link href="/">Home</inertia-link>
    <inertia-link href="/contador">Contador</inertia-link>
    <inertia-link href="/pets">Pets</inertia-link>
    <inertia-link href="/sobre">Sobre</inertia-link>

    <h1>Testando InertiaJS</h1>
    <h3>Contador Simples</h3>
    <contador />

    <h2>Listagem</h2>
    <ul id="example-1">
      <tr v-for="user in posts" :key="user.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
        <td class="border-t">
          <inertia-link
            class="px-6 py-4 flex items-center focus:text-indigo-500"
            :href="'/posts/' + user.id"
          >
            <icon
              v-if="user.id"
              name="trash"
              class="flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"
            />
            {{user.id}} - {{user.title }}
          </inertia-link>
        </td>
      </tr>
    </ul>
  </div>
</template>

<!-- Using the `scoped` attribute -->
<style scoped>
h1 {
  font-size: 2em;
}

h3 {
  font-size: 1.4em;
}

#main {
  width: 960px;
  margin: 0 auto;
}
</style>

<script>
import Contador from "@/Shared/Contador";
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "olhala", content: "Olha só, bunito." },
    ],
  },
  components: {
    Contador,
  },
  props: {
    posts: [],
    event: [],
  },
  mounted() {
    console.log(this.posts);
  },
};
</script>
