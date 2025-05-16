"use client";
import { useTranslation } from "react-i18next";

import LangSwitcher from "../components/LangSwitcher";
import ProjectInfo from "../components/ProjectInfo";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col border-b border-neutral-600 px-8 pb-10 lg:mx-auto lg:items-center">
        <LangSwitcher />
        <div className="mt-10 lg:mt-20 lg:max-w-2xl">
          <ProjectInfo
            title={t("FoodOrderingTitle")}
            description={t("FoodOrderingDesc")}
            popUpTitle="React, ContextAPI & TailwindCSS."
            href="https://focinhogelado.netlify.app/"
          />

          <ProjectInfo
            title={t("AtelierTitle")}
            description={t("Ecommerce2Desc")}
            popUpTitle="Laravel, Vue & vitest."
          />

          <ProjectInfo
            title="YHW Portfolio"
            description={t("PortfolioDesc")}
            popUpTitle="HTML & SCSS."
            href="https://yhwconsulting.netlify.app/"
          />

          <ProjectInfo
            title="Ecommerce"
            description={t("EcommerceDesc")}
            popUpTitle="MongoDB, NextJS, Express & AWS."
          />

          <ProjectInfo
            title={t("ProductCatalog")}
            description={t("ProductCatalogDesc")}
            popUpTitle="Vue, TailwindCSS & Google Sheets."
            href="https://aitrend.vercel.app/"
          />

          <ProjectInfo
            title="Landing Page"
            description={t("LandingPageDesc")}
            popUpTitle="React & TailwindCSS."
            href="https://eg-quality.vercel.app/"
          />

          <ProjectInfo
            title="Blog"
            description={t("BlogDesc")}
            popUpTitle="NextJS, TailwindCSS, Express & MongoDB."
            href="https://varstudy.vercel.app/"
          />
        </div>
      </div>
      <footer className="pt-10">
        <Footer />
      </footer>
    </>
  );
}
