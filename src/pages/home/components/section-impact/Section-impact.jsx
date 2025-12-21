import React from "react";

import s from "./section-impact.module.scss";
import CardMission from "../../../../components/card/Card";

function SectionImpact() {
  return (
    <section className={s.section}>
      <h2>Nossa Missão</h2>
      <p>Transformar vidas através do acesso universal a saúde de qualidade</p>

      <div className={s.listCards}>
        <CardMission
          title="Acesso Equitativo"
          text="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
        />

        <CardMission
          title="Comunidade Forte"
          text="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
        />

        <CardMission
          title="Bem-estar Total"
          text="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
        />
      </div>
    </section>
  );
}

export default SectionImpact;
