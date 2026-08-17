"use client";

import { useEffect, useState } from "react";
import AboutSection from "@/components/portfolio/about-section";
import BooksSection from "@/components/portfolio/books-section";
import ContactSection from "@/components/portfolio/contact-section";
import CustomCursor from "@/components/portfolio/custom-cursor";
import Header from "@/components/portfolio/header";
import InsightsSection from "@/components/portfolio/insights-section";
import IntroSection from "@/components/portfolio/intro-section";
import SectionNav, {
  portfolioSections,
} from "@/components/portfolio/section-nav";
import WorkSection from "@/components/portfolio/work-section";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-32% 0px -48%", threshold: [0, 0.2, 0.5] },
    );

    portfolioSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <div className="min-h-screen bg-(--paper) font-sans text-(--ink) transition-colors duration-300 w-full overflow-x-hidden">
        <CustomCursor />
        <Header
          dark={dark}
          onHome={() => scrollTo("intro")}
          onThemeChange={() => setDark((value) => !value)}
        />
        <SectionNav
          items={portfolioSections}
          activeId={active}
          onNavigate={scrollTo}
        />

        <main>
          <IntroSection onNavigate={scrollTo} />
          <WorkSection />
          <InsightsSection />
          <AboutSection />
          <BooksSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
