"use client";
import { useTranslation } from "react-i18next";

import AboutProject from "../components/AboutProject";
import LangSwitcher from "../components/LangSwitcher";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full flex-col border-b border-neutral-600 px-8 pb-10 lg:mx-auto lg:items-center">
        <LangSwitcher />
        <div className="mt-10 lg:mt-20 lg:max-w-2xl">
          <AboutProject
            title={t("FoodOrderingTitle")}
            description={t("FoodOrderingDesc")}
          />
          <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
            <a href="https://focinhogelado.netlify.app/" target="_blank">
              <ButtonLink text={t("SeeProject")} />
            </a>
            <Popup title="React, ContextAPI & Tailwind." />
          </div>

          <div>
            <AboutProject
              title={t("AtelierTitle")}
              description={t("Ecommerce2Desc")}
            />
            <div className="mt-4">
              <Popup title="Laravel, Vue & vitest." />
            </div>
          </div>

          <AboutProject title="Portfolio" description={t("PortfolioDesc")} />
          <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
            <a href="https://yhwconsulting.netlify.app/" target="_blank">
              <ButtonLink text={t("SeeProject")} />
            </a>
            <Popup title="HTML & SCSS." />
          </div>
        </div>

        <div>
          <AboutProject title="Ecommerce" description={t("EcommerceDesc")} />
          <div className="mt-4">
            <Popup title="MongoDB, NextJS, Express & AWS." />
          </div>
        </div>

        <div>
          <AboutProject
            title={t("ProductCatalog")}
            description={t("ProductCatalogDesc")}
          />
          <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
            <a href="https://aitrend.vercel.app/" target="_blank">
              <ButtonLink text={t("SeeProject")} />
            </a>
            <Popup title="JavaScript, Vue & Tailwind." />
          </div>
        </div>

        <div>
          <AboutProject
            title="Landing Page"
            description={t("LandingPageDesc")}
          />
          <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
            <a href="https://eg-quality.vercel.app/" target="_blank">
              <ButtonLink text={t("SeeProject")} />
            </a>
            <Popup title="React" />
          </div>
        </div>

        <div>
          <AboutProject title="Blog" description={t("BlogDesc")} />
          <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
            <a href="https://varstudy.vercel.app/" target="_blank">
              <ButtonLink text={t("SeeProject")} />
            </a>
            <Popup title="React" />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </>
  );
}
