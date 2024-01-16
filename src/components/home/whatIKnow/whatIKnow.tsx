"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Frontend from "./components/frontend";
import Backend from "./components/backend";
import Database from "./components/database";
import Devops from "./components/devops";
import Languages from "./components/languages";
import Others from "./components/others";

const WhatIKnow = () => {
  const [frontendOpen, setFrontendOpen] = useState(false);
  const [backendOpen, setBackendOpen] = useState(false);
  const [databaseOpen, setDatabaseOpen] = useState(false);
  const [devopsOpen, setDevopsOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return [window.innerWidth, window.innerHeight];
    }
    return [0, 0];
  });

  const closeAllDropdowns = () => {
    setFrontendOpen(false);
    setBackendOpen(false);
    setDatabaseOpen(false);
    setDevopsOpen(false);
    setLanguagesOpen(false);
    setOthersOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth > 639) {
          setFrontendOpen(true);
          setBackendOpen(true);
          setDatabaseOpen(true);
          setDevopsOpen(true);
          setLanguagesOpen(true);
          setOthersOpen(true);
        } else {
          closeAllDropdowns();
        }
      }
    };

    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const handleResizeThrottled = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleResize();
      }, 0);
    };

    handleResize();

    window.addEventListener("resize", handleResizeThrottled);

    return () => {
      window.removeEventListener("resize", handleResizeThrottled);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="pt-24 md:pt-32 p-5 md:p-10">
      <div className="space-y-10 flex flex-col items-center justify-center">
        <span className="text-xl md:text-3xl font-bold ">
          <span className="text-orange-500">{"</>"}</span> What I Know
        </span>
        <Image
          src="/what_i_know.svg"
          alt="What I Know"
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-wrap mt-10">
        <Frontend
          isOpen={frontendOpen}
          setFrontendOpen={setFrontendOpen}
          closeDropdowns={closeAllDropdowns}
        />
        <Backend
          isOpen={backendOpen}
          setBackendOpen={setBackendOpen}
          closeDropdowns={closeAllDropdowns}
        />
        <Database
          isOpen={databaseOpen}
          setDatabaseOpen={setDatabaseOpen}
          closeDropdowns={closeAllDropdowns}
        />
        <Devops
          isOpen={devopsOpen}
          setDevopsOpen={setDevopsOpen}
          closeDropdowns={closeAllDropdowns}
        />
        <Languages
          isOpen={languagesOpen}
          setLanguagesOpen={setLanguagesOpen}
          closeDropdowns={closeAllDropdowns}
        />
        <Others
          isOpen={othersOpen}
          setOthersOpen={setOthersOpen}
          closeDropdowns={closeAllDropdowns}
        />
      </div>
    </div>
  );
};

export default WhatIKnow;
