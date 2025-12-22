import React from "react";
// import s from "./voluntary.module.scss";

import Section from "./components/section/Section";
import Form from "./components/form/Form";

const cardsVoluntaryArray = [
  {
    title: "Impacto Direto",
    text: "Sua dedicação salva vidas e transforma comunidades",
  },

  {
    title: "Crescimento Pessoal",
    text: "Desenvolva habilidades e cresça profissionalmente",
  },

  {
    title: "Comunidade",
    text: "Faça parte de uma rede de profissionais comprometidos",
  },
];

const Voluntary = () => {
  return (
    <main>
      <Section cardsData={cardsVoluntaryArray} />
      <Form />
    </main>
  );
};

export default Voluntary;
