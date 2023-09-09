import { Lora } from "next/font/google";
const lora = Lora({ weight: "400", subsets: ["latin"] });

export default function AboutProject({ title, description }) {
  return (
    <div className="mt-10 lg:max-w-2xl">
      <h2 className="font-bold text-transparent text-left text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {title}
      </h2>
      <p className={`${lora.className} text-lg mt-4`}>{description}</p>
    </div>
  );
}
