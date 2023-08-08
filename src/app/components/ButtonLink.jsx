import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ButtonLink({ text }) {
  return (
    <button className="flex gap-3 text-base bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-3 rounded-lg">
      <p className="text-sm">{text}</p>
      <ArrowUpRightIcon width={12} />
    </button>
  );
}
