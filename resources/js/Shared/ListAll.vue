<template>
    <div>
        <h3>Requisição API</h3>

        {{ items }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null,
        }
    },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
          console.log(json); 
          this.items = json
      });
  },
};
</script>