import React from "react";

import s from "./section.module.scss";
import Card from "@/components/card/Card";

function Section({ cardsData }) {
  return (
    <section>
      <h1>Seja voluntário</h1>
      <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>

      <div className={s.listCards}>
        {cardsData.map((itemCard) => {
          return <Card title={itemCard.title} text={itemCard.text} />;
        })}
      </div>
    </section>
  );
}

export default Section;
