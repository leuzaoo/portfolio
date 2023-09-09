import { Lora } from "next/font/google";
const lora = Lora({ weight: "400", subsets: ["latin"] });

export default function CardItem({ title, text }) {
  return (
    <div className="overflow-x-auto flex flex-col items-start justify-end px-4 py-4 bg-neutral-800 border border-pink-500 rounded-lg w-48">
      <h3 className="text-sm lg:text-md">{title}</h3>
      <p className={`${lora.className} text-sm mt-2 text-neutral-500`}>
        {text}
      </p>
    </div>
  );
}
