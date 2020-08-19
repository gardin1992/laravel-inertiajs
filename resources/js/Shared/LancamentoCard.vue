<template>
  <div>
    <div class="corpo">
      <div class="imagem">
        <img :src="this.foto_thumb" :title="'...'" :alt="'...'" />
      </div>
      <div class="titulo">{{ this.nome_edificio }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      id: "953",
      nome_edificio: "Reserva Altos do Bosque",
      endereco: "Rua Sargento José Biudes",
      numero: "485",
      cidade: "Marília",
      estado: "SP",
      bairro: "Parque Residencial Novo Horizonte",
      descricao: "",
      lancamento_descricao:
        "Venha morar bem.\n\nCasas com 03 suítes planejadas com espaço para toda sua família e uma área de l...",
      destaque_flag: "1",
      id_edificio_status: "0",
      status: "",
      tipo: "Condomínio Casa",
      suites: "0",
      lancamento_valor: "a negociar",
      area_util: "0",
      area_total: "0",
      title_alt:
        'title="Lan&ccedil;amento Reserva Altos do Bosque no bairro Parque Residencial Novo Horizonte em Marília-SP" alt="Lan&ccedil;amento Reserva Altos do Bosque no bairro Parque Residencial Novo Horizonte em Marília-SP"',
      url_amigavel: "lancamentos/Reserva-Altos-do-Bosque-em-Marilia-953",
      foto:
        "https://www.tocaimoveis.com/foto_edificio_/2020/953/marilia-parque-residencial-novo-horizonte-reserva-altos-do-bosque-13-03-2020_17-30-00-1.jpg",
      foto_thumb:
        "https://www.tocaimoveis.com/foto_edificio_thumb/2020/953/marilia-parque-residencial-novo-horizonte-reserva-altos-do-bosque-13-03-2020_17-30-00-1.jpg",
      logo: "",
      logo_thumb: "",
    };
  },
};
</script>