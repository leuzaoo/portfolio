import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-semibold text-4xl px-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {t("TellAboutNextProject")}
      </p>
      <div className="flex w-full items-center justify-center mt-10 pb-10 border-neutral-600 border-b">
        <a href="mailto: dev.lcostaoliveira@gmail.com">
          <button className="flex items-center gap-3 text-base bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-3 rounded-lg">
            <p>E-mail</p>
            <EnvelopeIcon width={16} />
          </button>
        </a>
      </div>
      <div className="py-10 flex items-center justify-center gap-10 border-b border-neutral-600">
        <a href="https://github.com/leuzaoo" target="_blank">
          <Image src="/github-footer.svg" width={32} height={32} alt="" />
        </a>
        <a href="https://www.instagram.com/leuzaoo_/" target="_blank">
          <Image src="/instagram-footer.svg" width={32} height={32} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-costa/" target="_blank">
          <Image src="/linkedin-footer.svg" width={32} height={32} alt="" />
        </a>
      </div>
    </div>
  );
}
