import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

import usFlag from "@/public/unitedstates-flag.svg";
import brFlag from "@/public/brazil-flag.svg";

const languageOptions = [
  { name: "pt", value: "ptBR", flag: brFlag },
  { name: "en", value: "enUS", flag: usFlag },
];

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("ptBR");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="absolute right-10 top-24 flex gap-4">
      {languageOptions.map(({ name, value, flag }) => {
        const isActive = i18n.language === value;
        return (
          <button
            key={value}
            onClick={() => setLang(value)}
            className="flex items-center gap-2"
          >
            <Image src={flag} alt={name} width={32} height={32} />
          </button>
        );
      })}
    </div>
  );
}
