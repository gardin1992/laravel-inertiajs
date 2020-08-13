<template>
  <div>
    <h3>Requisição API</h3>

    <ul id="example-1">
      <li v-for="item in items" :key="item.title">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.items = json;
      });
  },
};
</script>