import React from "react";

import s from "./card.module.scss";

function Card({ title, text }) {
  return (
    <article className={s.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default Card;
