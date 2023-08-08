"use client";
import React from "react";
import ButtonLink from "../components/ButtonLink";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

export default function ProjectsPage() {
  return (
    <div className="px-8 w-full flex flex-col lg:items-center lg:mx-auto">
      <div className="mt-10 lg:mt-20 lg:max-w-2xl">
        <h2 className="font-bold text-transparent text-left text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Portfolio
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
          <div>
            <Popover isLazy>
              <PopoverTrigger>
                <Button className="bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-3 text-sm rounded-lg">
                  Tecnologias
                </Button>
              </PopoverTrigger>
              <PopoverContent className="right-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white max-w-xs rounded-lg">
                <PopoverHeader className="flex gap-8 justify-between px-4 py-6 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  HTML & SCSS
                  <PopoverCloseButton className="text-white" />
                </PopoverHeader>
                {/* <PopoverBody className="px-4 pb-2 text-blue-400 underline">
                  Acessar Repositório
                </PopoverBody> */}
              </PopoverContent>
            </Popover>
          </div>
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
