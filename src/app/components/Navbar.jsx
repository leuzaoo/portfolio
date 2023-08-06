import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

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
          <div className="flex items-center gap-10">
            <a href="https://www.linkedin.com/in/leonardo-costa/" target="_blank">LinkedIn</a>
            <a href="https://github.com/leuzaoo" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/leuzaoo_/" target="_blank">Instagram</a>
          </div>
        </div>
      </header>
    </div>
  );
}
