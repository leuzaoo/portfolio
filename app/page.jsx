"use client";
import LangSwitcher from "./components/LangSwitcher";
import Experiences from "./components/Experiences";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

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
