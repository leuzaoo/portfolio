import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="hidden lg:contents">
      <header className="flex items-center h-[80px] border-b-[1px] border-neutral-600">
        <div className="flex w-screen justify-between mx-14">
          <a href="mailto:dev.lcostaoliveira@gmail.com">
            <div className="flex items-center gap-3">
              <EnvelopeIcon width={24} />
              <p className="text-sm">dev.lcostaoliveira@gmail.com</p>
            </div>
          </a>
          <div className="flex items-center gap-10 text-sm">
            <a
              href="https://www.linkedin.com/in/leonardo-costa/"
              target="_blank"
            >
              <Image width={40} height={40} alt="" src="/linkedin-icon.svg" />
            </a>
            <a href="https://github.com/leuzaoo" target="_blank">
            <Image src='/github-icon.svg' width={40} height={40} alt="" />
            </a>
            <a href="https://www.instagram.com/leuzaoo_/" target="_blank">
            <Image src='/instagram-icon.svg' width={40} height={40} alt="" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
