import React from "react";
import "./style.css";
import Logo from "../../assets/Logo.png";
import {FiArrowLeft} from 'react-icons/fi'

const Home: React.FC = () => {
  return (
    <div className="home" id="home">
      <section>
        <img src={Logo} alt="Logo" />
        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG
        </p>
        <span><FiArrowLeft/> Voltar para logon</span>
      </section>

      <section>
        <form action="">
          <input required type="text" placeholder="Nome da ONG" />
          <input required type="email" placeholder="Email" />
          <input required type="text" placeholder="WhatsApp" />
          <div>
            <input required type="text" placeholder="Cidade" />
            <input required type="text" placeholder="UF" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
