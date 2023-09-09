import us from "@/public/unitedstates-flag.svg";
import br from "@/public/brazil-flag.svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const languageOption = [
  {
    name: "Português",
    value: "ptBr",
    flag: br,
  },
  {
    name: "United States",
    value: "enUS",
    flag: us,
  },
];

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex gap-4 absolute right-10 top-24">
      {languageOption.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <Image
            className="w-10"
            src={languageOption.flag}
            alt={languageOption.name}
          />
        </button>
      ))}
    </div>
  );
}
