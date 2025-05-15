import { useTranslation } from "react-i18next";
import Image from "next/image";
import React from "react";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-10 flex w-full flex-col items-start justify-center gap-4 sm:items-center">
        <Image
          alt="Leonardo's image"
          src="/me.jpg"
          width={120}
          height={120}
          className="ml-16 rounded-full grayscale sm:ml-0"
        />
        <p className="mx-auto text-xl font-semibold text-neutral-200">
          {t("NameAndCountry")}
        </p>
      </div>
      <div className="mt-10 text-center text-4xl">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-bold text-transparent">
          {t("FullstackDeveloper")}
        </h1>
        <div className="mt-10 flex w-full items-center justify-center">
          <a href="/projects">
            <button className="flex gap-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-3 text-base">
              <p>{t("ProjectsButton")}</p>
              <ArrowUpRightIcon width={16} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
