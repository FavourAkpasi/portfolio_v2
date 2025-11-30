import { useActiveSectionContext } from "@/context/active-section-context";

export const useActiveLink = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const setActiveLink = (href: string) => {
    setActiveSection(href);
    setTimeOfLastClick(Date.now());
  };

  return { activeLink: activeSection, setActiveLink };
};
