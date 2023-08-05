import React from "react";

export default function CardItem({ title, text }) {
  return (
    <div className="ml-4 overflow-x-auto flex flex-col items-start justify-end px-4 pb-4 bg-neutral-800 border border-gray-700 w-48 h-52">
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
}
