import React from "react";

import Section from "./components/section/section";
import SectionMission from "./components/section-mission/Section-mission";
import SectionImpact from "./components/section-impact/Section-impact";
import SectionWithCards from "./components/section-with-cards/Section-with-cards";

const cardMissionArray = [
  {
    title: "Acesso Equitativo",
    text: "Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.",
  },
  {
    title: "Comunidade Forte",
    text: "Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.",
  },

  {
    title: "Bem-estar Total",
    text: "Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.",
  },
];

const cardImpactArray = [
  {
    title: "5+",
    text: "Anos de Dedicação",
  },

  {
    title: "98%",
    text: "Satisfação dos Pacientes",
  },

  {
    title: "150+",
    text: "Profissionais Voluntários",
  },

  {
    title: "2,500+",
    text: "Pessoas Atendidas",
  },
];

function Home() {
  return (
    <main>
      <Section />
      
      <SectionWithCards
        title="Nossa missão"
        subtitle="Transformar vidas através do acesso universal a saúde de qualidade"
        listCards={cardMissionArray}
        isSectionMission
      />

      <SectionWithCards
        title="Nosso Impacto"
        subtitle="Transformando a saúde de nossa comunidade, um paciente de cada vez"
        listCards={cardImpactArray}
      />
    </main>
  );
}

export default Home;
