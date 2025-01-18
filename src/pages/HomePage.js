import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

export default function HomePage() {
  return (
    <div className="font-semibold mx-20">
      <section
        id="home"
        className="h-screen text-white flex justify-center items-center"
      >
        <HomeSection />
      </section>
      <section id="about" className="h-fit flex justify-center items-center">
        <AboutSection />
      </section>
      <section
        id="project"
        className="h-screen text-white py-20 flex justify-center items-center"
      >
        <ProjectSection />
      </section>
      <section
        id="blog"
        className="h-fit py-20 text-white flex justify-center items-center"
      >
        <ContactSection />
      </section>
    </div>
  );
}
