<template>
  <main-layout title="Imoveis">
    <div class="row">
      <div class="col-3" v-for="imovel in imoveis" :key="imovel.id">
        <inertia-link class="px-6 py-4 flex items-center focus:text-indigo-500" :href="'/imoveis/'">
          <imovel-card v-bind="{...imovel}"></imovel-card>
        </inertia-link>
      </div>
      <div class="col-3" v-for="imovel in imoveis" :key="imovel.id">
        <lancamento-card v-bind="{...imovel}"></lancamento-card>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";
import ImovelCard from "@/Shared/ImovelCard";
import LancamentoCard from "@/Shared/LancamentoCard";

const components = {
  MainLayout,
  ImovelCard,
  LancamentoCard,
};

const imoveis = [];

for (let x = 0; x < 100; x++) {
  imoveis.push({
    id: x,
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
  });
}
export default {
  metaInfo: {
    title: "Imoveis",
  },
  components,
  data() {
    return {
      imoveis,
    };
  },
  mounted() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        this.pokemons = json.results;
      });
  },
  methods: {
    getImgLink(url) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(
        url
      )}.png`;
    },
    getId(url) {
      const arr = url.split("/");
      arr.pop();

      return arr.pop();
    },
  },
};
</script>
