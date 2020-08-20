<template>
  <section class="section-empreendimentos">
    <h3>
      <strong>Empreendimentos</strong> Toca Imóveis
    </h3>
    <div class="card-imovel" v-for="(item, index) in items" :key="index">
      <card-imovel v-bind="{...item}" />
    </div>
  </section>
</template>

<style scoped>
.card-imovel {
  width: 33%;
  float: left;
}
</style>

<script>
import CardImovel from "@/components/CardImovel";

const data = require("@/data/aluga-rapido.json");

export default {
  components: {
    CardImovel,
  },
  data() {
    return {
      items: data,
    };
  },
  mounted() {
    console.log(this.items);
  },
};
</script>