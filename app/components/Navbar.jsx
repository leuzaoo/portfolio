"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Image from "next/image";

import { Lobster } from "next/font/google";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

function DeviceNavBar({ open }) {
  return (
    <div
      className={`absolute left-0 top-0 z-50 h-screen w-screen transform bg-[#333] text-[#fff] lg:hidden ${
        open ? "-translate-x-0" : "-translate-x-full"
      } drop-shadow-md filter transition-transform duration-300 ease-in-out`}
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
      <header className="flex h-[80px] w-full border-b-[1px] border-neutral-600">
        <DeviceNavBar open={open} setOpen={setOpen} />
        <div className="flex w-full justify-between px-8">
          <div className="flex w-screen items-center justify-between">
            <div
              className="z-50 flex h-5 w-8 cursor-pointer flex-col items-center justify-between lg:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span
                className={`h-1 w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 transition duration-300 ease-in-out ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-1 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 transition duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-1 w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 transition duration-300 ease-in-out ${
                  open ? "-translate-y-2.5 -rotate-45" : ""
                }`}
              />
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text p-2 text-4xl text-transparent">
              <a href="/">
                <p className={lobster.className}>
                  portfolio<span className="text-pink-600">.</span>
                </p>
              </a>
            </div>
            <div className="hidden items-center gap-10 text-sm font-semibold lg:flex">
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
