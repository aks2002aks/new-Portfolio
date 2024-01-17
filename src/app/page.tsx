"use client";

import WhatIKnow from "@/components/home/whatIKnow/whatIKnow";
import Intro from "@/components/home/intro/intro";
import Projects from "@/components/home/projects/projects";
import Experience from "@/components/home/experience/experience";
import Education from "@/components/home/education/education";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const introRef = useRef<HTMLDivElement>(null);
  const whatIKnowRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const view = searchParams.get("view")?.replaceAll('"', "");
    if (view === "what_i_know") {
      whatIKnowRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (view === "experience") {
      experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (view === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (view === "education") {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      introRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <main>
      <Intro introRef={introRef} />
      <WhatIKnow whatIKnowRef={whatIKnowRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Education educationRef={educationRef} />
    </main>
  );
}
