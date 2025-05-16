import { useTranslation } from "react-i18next";

import AboutProject from "./AboutProject";
import ButtonLink from "./ButtonLink";
import Popup from "./Popup";

const ProjectInfo = ({ title, description, href, popUpTitle }) => {
  const { t } = useTranslation();

  return (
    <>
      <AboutProject title={title} description={description} />
      <div className="mt-4 flex items-center justify-between md:justify-normal md:gap-10">
        {href && (
          <a href={href} target="_blank">
            <ButtonLink text={t("SeeProject")} />
          </a>
        )}
        <Popup title={popUpTitle} />
      </div>
    </>
  );
};

export default ProjectInfo;
