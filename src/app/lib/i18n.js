import NextI18Next from "next-i18next";

export default new NextI18Next({
  defaultLanguage: "pt",
  otherLanguages: ["en"],
  localePath: "public/static/locales",
});
