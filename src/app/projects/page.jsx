"use client";
import React from "react";
import ButtonLink from "../components/ButtonLink";
import Popup from "../components/Popup";
import AboutProject from "../components/AboutProject";

export default function ProjectsPage() {
  return (
    <div className="px-8 w-full flex flex-col lg:items-center lg:mx-auto">
      <div className="mt-10 lg:mt-20 lg:max-w-2xl">
        <AboutProject
          title="Portfolio"
          description="Realizei uma SPA para destacar as habilidades e realizações do
          cliente. Com objetivo de mostrar as experiências, habilidades e
          formações, como se fosse um currículo."
        />

        <div className="mt-4 flex items-center justify-between">
          <a href="https://yhwconsulting.netlify.app/" target="_blank">
            <ButtonLink text="Ver Projeto" />
          </a>
          <Popup title="HTML & SCSS." />
        </div>
      </div>

      <AboutProject
        title="Ecommerce"
        description="A aplicação que mais investi tempo e que abriu a minha mente para a
          programação. Um comércio online. São duas aplicações, uma é voltada ao
          usuário final e a outra para o admin cadastrar os produtos."
      />

      <div>
        <AboutProject
          title="Catálogo de Produtos"
          description="Uma plataforma onde através de uma Sheets do Google, a aplicação
        consulta os produtos, preços e especificações. A Sheets funciona como
        um banco de dados para essa aplicação."
        />
        <div className="mt-4 flex items-center justify-between">
          <a href="https://aitrend.netlify.app/" target="_blank">
            <ButtonLink text="Ver Projeto" />
          </a>
          <Popup title="JavaScript, Vue & Tailwind." />
        </div>
      </div>

      <AboutProject
        title="Landing Page"
        description="Realizei uma landing page sobre uma empresa onde o forte dela é o 
        laboratório de metrologia. A mesma trabalha com fabricação de peças e dispositivos 
        para controles dimensionais, escaneamento de peças e impressões 3D."
      />
    </div>
  );
}
