"use client";
import LangSwitcher from "../components/LangSwitcher";
import AboutProject from "../components/AboutProject";
import ButtonLink from "../components/ButtonLink";
import Popup from "../components/Popup";

import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-8 w-full flex flex-col lg:items-center lg:mx-auto">
        <LangSwitcher />
        <div className="mt-10 lg:mt-20 lg:max-w-2xl">
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
            <a href="https://aitrend.netlify.app/" target="_blank">
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
          <div className="mt-4">
            <Popup title="React" />
          </div>
        </div>
      </div>
    </>
  );
}
