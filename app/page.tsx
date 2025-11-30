"use client";

import { Navbar } from "@/components/layout/navbar";
import { Header } from "@/components/layout/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { StarSpotlight } from "@/components/ui/star-spotlight";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { LINKS } from "@/lib/constants";
import { useActiveSectionContext } from "@/context/active-section-context";

const SectionWrapper = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { ref } = useScrollSpy(id, 0.5);
  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default function Home() {
  const { setScrollProgress } = useActiveSectionContext();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const progress = target.scrollTop;
    setScrollProgress(progress);
  };

  return (
    <div className="w-svw min-h-svh">
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row">
        <Header />
        <main className="flex-1 xl:h-svh relative">
          <StarSpotlight />
          <ScrollArea className="h-full" onScroll={handleScroll}>
            <div className="w-full lg:max-w-[750px] mx-auto pb-16 px-6">
              <SectionWrapper id={LINKS[0].href}>
                <About />
              </SectionWrapper>
              <SectionWrapper id={LINKS[1].href}>
                <Experience />
              </SectionWrapper>
              <SectionWrapper id={LINKS[2].href}>
                <Projects />
              </SectionWrapper>
              <SectionWrapper id={LINKS[3].href}>
                <Education />
              </SectionWrapper>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
