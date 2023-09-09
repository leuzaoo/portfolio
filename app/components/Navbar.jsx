"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Image from "next/image";

import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

function DeviceNavBar({ open }) {
  return (
    <div
      className={`absolute z-50 top-0 left-0 h-screen w-screen bg-[#333] text-[#fff] transform lg:hidden ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex flex-col items-end gap-3 pr-8 pt-4">
        <a
          className="flex items-center gap-2"
          href="mailto:dev.lcostaoliveira@gmail.com"
        >
          <p>Contato</p>
          <Image width={40} height={40} src="/mail-icon.svg" alt="" />
        </a>
        <a
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/leonardo-costa/"
          target="_blank"
        >
          <p>LinkedIn</p>
          <Image width={40} height={40} alt="" src="/linkedin-icon.svg" />
        </a>
        <a
          className="flex items-center gap-2"
          href="https://github.com/leuzaoo"
          target="_blank"
        >
          <p>GitHub</p>
          <Image src="/github-icon.svg" width={40} height={40} alt="" />
        </a>
        <a
          className="flex items-center gap-2"
          href="https://www.instagram.com/leuzaoo_/"
          target="_blank"
        >
          <p>Instagram</p>
          <Image src="/instagram-icon.svg" width={40} height={40} alt="" />
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="flex w-full h-[80px] border-b-[1px] border-neutral-600">
        <DeviceNavBar open={open} setOpen={setOpen} />
        <div className="flex w-screen justify-between px-8">
          <div className="w-screen flex justify-between items-center">
            <div
              className="cursor-pointer z-50 flex w-8 h-5 flex-col justify-between items-center lg:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span
                className={`h-1 w-full bg-gradient-to-r to-pink-500 from-purple-600 rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-gradient-to-r to-pink-500 from-purple-600 rounded-lg transition duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-gradient-to-r to-pink-500 from-purple-600 rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
            <div className="text-4xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
              <a href="/">
                <p className={lobster.className}>
                  portfolio<span className="text-pink-600">.</span>
                </p>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">
              <a href="mailto:dev.lcostaoliveira@gmail.com">{t("Contact")}</a>
              <a
                href="https://www.linkedin.com/in/leonardo-costa/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="https://github.com/leuzaoo" target="_blank">
                GitHub
              </a>
              <a href="https://www.instagram.com/leuzaoo_/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
