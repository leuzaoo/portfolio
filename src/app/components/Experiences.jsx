import React from "react";
import CardItem from "./CardItem";

export default function Experiences() {
  return (
    <>
      <div className="mb-10">
        <div className="overflow-x-auto mt-10 flex items-center gap-14 px-10 bg-neutral-800 py-12 md:justify-center">
          <img src="nextjs-logo.svg" width={40} />
          <img src="javascript-logo.svg" width={40} />
          <img src="nodejs-logo.svg" width={40} />
          <img src="figma-logo.svg" width={40} />
          <img src="react-logo.svg" width={40} />
          <img src="typescript-logo.svg" width={40} />
          <img src="vue-logo.svg" width={40} />
        </div>
        <div className="mt-16">
          <p className="font-bold text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Experiências além da Tecnologia.
          </p>
        </div>
        <div className="px-4 pb-5 mt-10 flex gap-4 overflow-x-auto lg:justify-center">
          <div>
            <CardItem
              title="UI & UX"
              text="Design de interfaces intuitivas, eficientes e atrativas."
            />
          </div>
          <div>
            <CardItem
              title="Desenvolvimento Web"
              text="Tranformando ideias para uma experiência única tanto Web quanto Mobile."
            />
          </div>
          <div>
            <CardItem
              title="Vendas & Consultoria"
              text="Tratativa com o cliente, pós compra, conhecimento técnico, entre outros."
            />
          </div>
          <div>
            <CardItem
              title="Design & Criativos"
              text="Construção de artes com objetivo em conectar-se com a audiência."
            />
          </div>
        </div>
      </div>
    </>
  );
}
