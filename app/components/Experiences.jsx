import React from "react";
import CardItem from "./CardItem";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-10">
        <div className="overflow-x-auto mt-10 flex items-center gap-14 px-10 bg-neutral-800 py-12 md:justify-center">
          <Image src="/nextjs-logo.svg" width={40} height={40} alt="" />
          <Image src="/javascript-logo.svg" width={40} height={40} alt="" />
          <Image src="/nodejs-logo.svg" width={40} height={40} alt="" />
          <Image src="/figma-logo.svg" width={40} height={40} alt="" />
          <Image src="/react-logo.svg" width={40} height={40} alt="" />
          <Image src="/typescript-logo.svg" width={40} height={40} alt="" />
          <Image src="/vue-logo.svg" width={40} height={40} alt="" />
        </div>
        <div className="mt-16 px-5">
          <p className="font-bold text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {t("Experiences")}
          </p>
        </div>
        <div className="px-4 pb-5 mt-10 flex gap-4 overflow-x-auto lg:justify-center">
          <div>
            <CardItem title="UI & UX" text={t("DesignIntuitiveEfficient")} />
          </div>
          <div>
            <CardItem
              title={t("WebDevelopment")}
              text={t("TransformingIdeasUniqueExperience")}
            />
          </div>
          <div>
            <CardItem
              title={t("SalesConsulting")}
              text={t("DealingCustomerPurchase")}
            />
          </div>
          <div>
            <CardItem
              title={t("DesignCreatives")}
              text={t("ConstructionArtsConnectingAudience")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
