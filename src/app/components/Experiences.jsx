import React from "react";
import CardItem from "./CardItem";

export default function Experiences() {
  return (
    <>
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
          Outras experiências em Tecnologia
        </p>
      </div>
      <div className="mt-10 flex gap-2 overflow-x-auto">
        <div>
          <CardItem
            title="UI & UX"
            text="Design de interfaces intuitivas, eficientes e atrativas."
          />
        </div>
        <div>
          <CardItem
            title="UI & UX"
            text="Design de interfaces intuitivas, eficientes e atrativas."
          />
        </div>
        <div>
          <CardItem
            title="UI & UX"
            text="Design de interfaces intuitivas, eficientes e atrativas."
          />
        </div>
      </div>
    </>
  );
}
