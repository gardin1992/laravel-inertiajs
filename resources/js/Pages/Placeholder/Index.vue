<template>
  <main-layout title="Placeholders">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Placeholders</h5>
        <ul id="example-1">
          <tr
            v-for="user in placeholders"
            :key="user.id"
            class="hover:bg-gray-100 focus-within:bg-gray-100"
          >
            <td class="border-t">
              <inertia-link
                class="px-6 py-4 flex items-center focus:text-indigo-500"
                :href="'/posts/' + user.id"
              >
                <icon v-if="user.id" name="trash" class="flex-shrink-0 w-3 h-3 fill-gray-400 ml-2" />
                {{user.id}} - {{user.title }}
              </inertia-link>
            </td>
          </tr>
        </ul>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";

const components = {
  MainLayout,
};

export default {
  metaInfo: {
    title: "Placeholders",
  },
  components,
  props: {
    placeholders: [],
    event: [],
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.placeholders = json;
      });
  }
};
</script>
