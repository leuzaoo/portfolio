import React from "react";
import ButtonLink from "../components/ButtonLink";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,Button
} from "@chakra-ui/react";

export default function ProjectsPage() {
  return (
    <div className="px-8 w-full flex flex-col lg:items-center lg:mx-auto">
      <div className="mt-10 lg:mt-20 lg:max-w-2xl">
        <h2 className="font-bold text-transparent text-left text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Portfolio Web
        </h2>
        <p className="mt-4">
          Realizei uma SPA para destacar as habilidades e realizações do
          cliente. Com objetivo de mostrar as experiências, habilidades e
          formações, como se fosse um currículo.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <a href="https://yhwconsulting.netlify.app/" target="_blank">
            <ButtonLink text="Ver Projeto" />
          </a>
          <Popover isLazy>
            <PopoverTrigger>
              <Button>Click me</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight="semibold">
                Popover placement
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-10 lg:max-w-2xl">
        <h2 className="font-bold text-transparent text-left text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Ecommerce
        </h2>
        <p className="mt-4">
          Uma das aplicações que mais investi tempo e que abriu a minha mente
          para a programação. Um comércio online. Uma aplicação é voltada ao
          cliente final e outra para o admin cadastrar os produtos.
        </p>
      </div>

      <div className="mt-10 lg:max-w-2xl">
        <h2 className="font-bold text-transparent text-left text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Catálogo de Produtos
        </h2>
        <p className="mt-4">
          Desenvolvi uma plataforma onde através de uma Sheets do Google, a
          aplicação consulta os produtos, preços e especificações. A Sheets
          funciona como um banco de dados para essa aplicação.
        </p>
      </div>
    </div>
  );
}
