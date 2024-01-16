import WhatIKnow from "@/components/home/whatIKnow/whatIKnow";
import Intro from "@/components/home/intro/intro";
import Projects from "@/components/home/projects/projects";
import Experience from "@/components/home/experience/experience";

export default function Home() {
  return (
    <main>
      <Intro />
      <WhatIKnow />
      <Experience/>
      <Projects />
    </main>
  );
}
