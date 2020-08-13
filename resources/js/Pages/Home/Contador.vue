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
  metaInfo: { title: "Login" },
  components: {},
  props: {
    errors: Object,
  },
  data() {
    return {
      sending: false,
      form: {
        email: "johndoe@example.com",
        password: "secret",
        remember: null,
      },
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
    submit() {
      this.sending = true;
      this.$inertia
        .post(this.route("login.attempt"), {
          email: this.form.email,
          password: this.form.password,
          remember: this.form.remember,
        })
        .then(() => (this.sending = false));
    },
  },
};
</script>
