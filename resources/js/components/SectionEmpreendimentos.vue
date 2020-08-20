<template>
  <section class="section-empreendimentos">
    <h3>
      <strong>Empreendimentos</strong> Toca Imóveis
    </h3>
    <div class="card-empreendimento" v-for="(item, index) in items" :key="index">
      <card-empreendimento v-bind="{...item}" />
    </div>
  </section>
</template>

<style scoped>
.card-empreendimento {
  width: 33%;
  float: left;
}
</style>

<script>
import CardEmpreendimento from "@/components/empreendimentos/CardEmpreendimento";

const data = require("@/data/empreendimentos.json");

export default {
  components: {
    CardEmpreendimento,
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