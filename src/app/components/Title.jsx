import React from "react";

export default function Title() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-full mt-10">
        <img src="me.jpg" width={120} className="rounded-full grayscale" />
        <p className="text-neutral-200">Olá, sou o Léo.</p>
      </div>
      <div className="text-center mt-10 text-4xl">
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Desenvolvedor Fullstack & UI
        </h1>
      </div>
    </>
  );
}
