<template>
  <div>
    <div class="card-image">
      <img
        class="card-image-thumb"
        :src="this.foto"
        :data-src="this.foto"
        :alt="this.title_alt"
        data-was-processed="true"
      />
    </div>
    <div class="card-nome">{{ this.nome_edificio}}</div>
  </div>
</template>
<script>
export default {
  props: {
    id: 0,
    title_alt: "",
    foto: "",
    nome_edificio: "",
    url_amigavel: "",
  },
};
</script>