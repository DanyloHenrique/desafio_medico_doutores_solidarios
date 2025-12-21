import React from "react";

import s from "./section-with-cards.module.scss";

import Card from "../../../../components/card/Card";

function SectionWithCards({ title, subtitle, listCards, isSectionMission }) {
  return (
    <section
      className={`${s.sectionWithCards} ${
        isSectionMission ? s.sectionWithCardsMission : ""
      }`}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>

      <div className={s.listCards}>
        {listCards.map((cardItem) => {
          return (
            <Card
              key={cardItem.title}
              title={cardItem.title}
              text={cardItem.text}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SectionWithCards;
