"use client";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import LangSwitcher from "./components/LangSwitcher";

export default function Home() {
  return (
    <>
      <LangSwitcher />
      <AboutMe />
      <Experiences />
      <Footer />
    </>
  );
}
