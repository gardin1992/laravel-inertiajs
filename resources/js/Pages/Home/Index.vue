<template>
  <div id="main">
    <h1>Testando InertiaJS</h1>

    <h3>Contador Simples</h3>
    <contador />

    <h3>Listagem de dados</h3>
    <list-all />
  </div>
</template>

<!-- Using the `scoped` attribute -->
<style scoped>
h1 {
  font-size: 2.0em;
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
import LoadingButton from "@/Shared/LoadingButton";
import Index from "@/Pages/Users/Index";
import Contador from "@/Shared/Contador";
import ListAll from "@/Shared/ListAll";

export default {
  metaInfo: {
    title: "Testando InertiaJS",
  },
  components: {
    LoadingButton,
    Index,
    Contador,
    ListAll,
  },
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
    };
  },
  methods: {
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
