"use client";

import React, { useState, createContext, useContext } from "react";
import { LINKS } from "@/lib/constants";

type SectionName = (typeof LINKS)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  scrollPercentage: number;
  setScrollPercentage: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<string>(LINKS[0].href);
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        scrollPercentage,
        setScrollPercentage,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
