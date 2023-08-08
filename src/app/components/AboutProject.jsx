import React from "react";

export default function AboutProject({ title, description }) {
  return (
    <div className="mt-10 lg:max-w-2xl">
      <h2 className="font-bold text-transparent text-left text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {title}
      </h2>
      <p className="mt-4">{description}</p>
    </div>
  );
}
