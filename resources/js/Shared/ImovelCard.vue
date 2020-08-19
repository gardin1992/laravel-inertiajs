<template>
  <div>
    <div class="corpo">
      <div class="imagem">
        <img :src="this.foto_thumb" :title="'...'" :alt="'...'" />
        </div>
      <div class="tipo">{{ this.tipo_mae }} - {{ this.tipo_imovel }} - {{ this.bairro_nome }}</div>
      <div class="titulo">{{ this.bairro_nome }}</div>
      <div class="localizacao">{{ this.cidade }} - {{ this.estado}}</div>
      <div class="destaques">{{ `destaques`}}</div>
      <div class="valor">
        <div v-if="!!this.valor_antigo">
          Venda de
          <span>{{ this.valor_antigo }}</span>
        </div>
        {{ this.valor}}
        Valor:
        R$ {{ this.valor }}
      </div>
      <div class="codigo">
          Código do imóvel: {{ this.id }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      id: "8502",
      tipo_mae: "Residencial",
      tipo_imovel: "Apartamento",
      bairro_nome: "Marília",
      cidade: "Marília",
      descricao:
        "Apartamento em piso porcelanato e todo mobiliado, localizado no Residencial Madrid, próximo à escola, lanchonetes, com fácil acesso ao shopping, supermercado e ao centro. O imóvel dispõe de sala para 2 ambientes com blindex na varanda gourmet, 2 quartos sendo 1 suíte, banheiro social, cozinha, área de serviço e 2 vagas de garagem cobertas.",
      garagem: "2",
      garagem_tipo: "Paralela",
      suites: "1",
      dormitorios: "2",
      banheiros: "2",
      estado: "SP",
      a_terreno: "64.00 M²",
      a_construida: "64.00 M²",
      a_util: "64.00 M²",
      a_total: "",
      video_url: "",
      exibe_valor: "0",
      valor: "630000.00",
      valor_iptu: "0.00",
      condominio: "330.00",
      nome_bairro: "Marília",
      flag_permuta: "0",
      aceita_financiamento: "sim",
      situacao_codigo_venda: "1",
      id_usuario: "122",
      valor_out: "0.00",
      valor_antigo: "",
      nome_edificio: "Madrid",
      exclusividade_locacao: "0",
      exclusividade_vendas: "0",
      img_panoramica: "",
      foto:
        "https://www.tocaimoveis.com/foto_/2019/8502/marilia-residencial-apartamento-marilia-29-05-2019_17-38-19-0.jpg",
      foto_thumb:
        "https://www.tocaimoveis.com/foto_thumb/2019/8502/marilia-residencial-apartamento-marilia-29-05-2019_17-38-19-0.jpg",
    };
  },
};
</script>