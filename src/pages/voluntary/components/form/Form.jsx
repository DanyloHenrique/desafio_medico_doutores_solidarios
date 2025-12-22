import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

import s from "./form.module.scss";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    additional: "",
  });

  const [completedRegister, setCompletedRegister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setCompletedRegister(true);
  };

  if (completedRegister) {
    return (
      <section className={s.sectionForm}>
        <form onSubmit={handleSubmit}>
          <div className={s.feedback}>
            <span aria-hidden="true">
              <FaCheck />
            </span>
            <h2>Cadastro realizado com sucesso.</h2>
            <p>Entraremos em contato para mais informações.</p>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className={s.sectionForm}>
      <form onSubmit={handleSubmit}>
        <h2>Inscrição para Voluntários</h2>
        <div className={s.group}>
          <h4>Dados pessoais</h4>
          <div>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Seu nome (Obrigatório)"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Seu email (Obrigatório)"
            />
          </div>
          <input
            type="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Seu telefone (Obrigatório)"
          />
        </div>
        <div className={s.group}>
          <h4>Mensagem Adicional</h4>
          <textarea
            name="additional"
            id="additional"
            value={user.additional}
            onChange={(e) => setUser({ ...user, additional: e.target.value })}
            placeholder="Conte-nos porque você quer ser voluntario..."
          ></textarea>
        </div>

        <p>Entraremos em contato para mais informações</p>
        <button type={"submit"}>Enviar Inscrição</button>
      </form>
    </section>
  );
}

export default Form;
