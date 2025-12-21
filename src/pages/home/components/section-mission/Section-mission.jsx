import React from "react";

import s from "./section-mission.module.scss";
import CardMission from "../../../../components/card/Card";

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

function SectionMission() {
  return (
    <section className={s.sectionMission}>
      <h2>Nossa Missão</h2>
      <p>Transformar vidas através do acesso universal a saúde de qualidade</p>

      <div className={s.listCards}>
        {cardMissionArray
          ? cardMissionArray.map((card) => {
              return (
                <CardMission
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  isSectionMission
                />
              );
            })
          : ""}
      </div>
    </section>
  );
}

export default SectionMission;
