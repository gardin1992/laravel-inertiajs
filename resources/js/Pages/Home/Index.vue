<template>
  <main-layout title="Home">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>

    <section-empreendimentos />
    <section-alugar-rapido />
  </main-layout>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";

import Navbar from "@/Shared/Navbar";
import Carousel from "@/Shared/Carousel/Carousel";
import SectionEmpreendimentos from '@/components/SectionEmpreendimentos';
import SectionAlugarRapido from '@/components/SectionAlugarRapido';

const components = {
  Navbar,
  MainLayout,
  SectionEmpreendimentos,
  SectionAlugarRapido
};

export default {
  metaInfo: {
    title: "Home",
  },
  components,
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
};
</script>
