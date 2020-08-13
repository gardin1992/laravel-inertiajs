<template>
  <div>
    <h1>Hello World! Laravel + Vue + InertiaJs</h1>
    <loading-button :loading="sending" class="btn-indigo" type="submit">Login</loading-button>
    <contador />
    <index />
    <list-all />
  </div>
</template>

<script>
import LoadingButton from "@/Shared/LoadingButton";
import Index from "@/Pages/Users/Index";
import Contador from "@/Shared/Contador";
import ListAll from "@/Shared/ListAll";

export default {
  metaInfo: { title: "Login" },
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
