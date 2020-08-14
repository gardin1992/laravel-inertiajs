<template>
  <div>
    <button v-on:click="increment" class="btn btn-info">+</button>
    {{ count }}
    <button v-on:click="decrement" class="btn btn-info">-</button>
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
