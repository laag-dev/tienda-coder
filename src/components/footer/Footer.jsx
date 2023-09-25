import React from "react";
import laag from "@/assets/laagdev.jpg";
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";

export const Footer = () => {
  return (
    <>
      <footer className="footer px-10 py-4 border-t bg-[#404040] text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <img className="w-52" src={laag} alt="logo developer" />
          <p className="ml-4">
            Laag-Developer
            <br />
            Copyright © 2023 - All right reserved
          </p>
        </aside>
        <div className="md:place-self-center md:justify-self-end">
          <p className="font-blond text-lg">Redes sociales:</p>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/laag-dev/" target="_blank">
              <SiLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/laag-dev" target="_blank">
              <AiFillGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/laag-dev/" target="_blank">
              <TfiYoutube className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/laag-dev/" target="_blank">
              <BsTwitch className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
