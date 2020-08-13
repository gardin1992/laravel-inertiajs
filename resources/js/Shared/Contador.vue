<template>
  <div>
    <h2>Contador</h2>
    <button v-on:click="increment">+</button>
    {{ count }}
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    errors: Object,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
