import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Footer() {
  return (
    <div>
      <p className="font-semibold text-4xl px-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Me conte sobre seu Próximo Projeto.
      </p>
      <div className="flex w-full items-center justify-center mt-10">
        <a href="mailto: dev.lcostaoliveira@gmail.com">
          <button className="flex items-center gap-3 text-base bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-3 rounded-lg">
            <p>E-mail</p>
            <EnvelopeIcon width={16} />
          </button>
        </a>
      </div>
      <div className="bg-neutral-800 py-5 mt-5">
        <p className="text-neutral-300 text-center text-sm">
          Desenvolvido por Leonardo Oliveira.
        </p>
      </div>
    </div>
  );
}
