import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-full mt-10">
        <Image alt="Leonardo's image" src="/me.jpg" width={120} height={120} className="rounded-full grayscale" />
        <p className="text-neutral-200 font-semibold">Leonardo Oliveira, 23 - Brasil.</p>
      </div>
      <div className="text-center mt-10 text-4xl">
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Desenvolvedor Fullstack & UI.
        </h1>
        <div className="flex w-full items-center justify-center mt-10">
          <a href="/projects">
            <button className="flex gap-3 text-base bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-3 rounded-lg">
              <p>Projetos</p>
              <ArrowUpRightIcon width={16} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
