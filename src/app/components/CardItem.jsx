import React from "react";

export default function CardItem({ title, text }) {
  return (
    <div className="overflow-x-auto flex flex-col items-start justify-end px-4 pb-4 bg-neutral-800 border border-pink-500 rounded-lg w-48 h-52">
      <h3 className="text-sm">{title}</h3>
      <p className="text-xs mt-2 text-neutral-500">{text}</p>
    </div>
  );
}
