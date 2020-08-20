<template>
  <div>
    <div class="owl-item active" style="width: 390px;">
      <div class="col">
        <div class="box-residence flex flex-column">
          <div class="image">
            <div
              :style="`background-image: url('${require('./../../assets/selo_1.png')}')`"
            ></div>
            <!--
                                        <div class="selo selo-bottom-170" style="background-image: url('assets/images/selo_aluga_rapido_2.png')">
                                        </div>
            -->
            <div
              class="selo-2 selo-bottom-360 oculta-selo"
              :style="`background-image: url('${require('./../../assets/selo_360_2.png')}')`"
            ></div>
            <a href="/alugar/Marília/Residencial/Apartamento/Fragata/11429">
              <img
                class="owl-lazy transform max-width"
                src="https://www.tocaimoveis.com/foto_thumb/2020/11429/marilia-residencial-apartamento-fragata-18-03-2020_09-33-23-0.jpg"
                data-src="https://www.tocaimoveis.com/foto_thumb/2020/11429/marilia-residencial-apartamento-fragata-18-03-2020_09-33-23-0.jpg"
                style="opacity: 1;"
              />
              <div class="bar rent uppercase t-opacity">Locação</div>

              <div
                class="bar rent uppercase t-opacity"
                style="margin-top: 27px; background: #c9252b; opacity: 1;"
              >ALUGA RÁPIDO SEM FIADOR OU GARANTIAS</div>
            </a>
          </div>
          <a href="/alugar/Marília/Residencial/Apartamento/Fragata/11429" class="info">
            <div class="type uppercase">{{`${this.tipo_mae} - ${this.tipo_imovel}`}}</div>
            <div class="name">{{this.bairro_nome}}</div>
            <div class="type uppercase">{{this.cidade}} - {{this.estado}}</div>
            <div class="about flex justify-around">
              <div class="box">
                <div class="area-icon">bedrooms-ic</div>
                <div class="text">{{this.dormitorios}} Quartos</div>
              </div>
              <div class="box">
                <div class="area-icon">bedrooms-ic</div>
                <div class="text">{{this.suites}} Suíte</div>
              </div>
              <div class="box">
                <div class="area-icon">bedrooms-ic</div>
                <div class="text">{{this.garagem}} Vaga Paralela</div>
              </div>
            </div>
            <div class="prices flex justify-between">
              <div>
                <div
                  class="value"
                  style="font-size: 14px; color: #c9252b;"
                >VALOR ALUGUEL: R${{this.valor_aluguel}}</div>
              </div>
            </div>
            <div class="type uppercase" style="text-align: end;">
              Código:
              <strong>{{ this.id}}</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const selo1 = `https://www.tocaimoveis.com.br/assets/images/selo_1.png`;

export default {
  props: {
    id: 0,
    title_alt: "",
    foto: "",
    nome_edificio: "",
    url_amigavel: "",
    //
    valor_aluguel: "",
    garagem: 0,
    suites: 0,
    dormitorios: 0,
    estado: "",
    cidade: "",
    bairro_nome: "",
    tipo_imovel: "",
    tipo_mae: "",
  },
};
</script>