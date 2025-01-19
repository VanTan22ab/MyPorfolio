import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

export default function HomePage() {
  return (
    <div className="h-full bg-slate-900 font-semibold mx-20 box-border max-sm:px-2">
      <section
        id="home"
        className="h-screen max-sm:h-fit text-white flex justify-center items-center max-sm:py-20"
      >
        <HomeSection />
      </section>
      <section id="about" className="max-sm:h-fit h-screen flex justify-center items-center">
        <AboutSection />
      </section>
      <section
        id="project"
        className="h-screen max-sm:h-fit text-white py-20 flex justify-center items-center"
      >
        <ProjectSection />
      </section>
      <section
        id="blog"
        className="h-screen text-white flex justify-center items-center max-sm:h-fit"
      >
        <ContactSection />
      </section>
    </div>
  );
}
