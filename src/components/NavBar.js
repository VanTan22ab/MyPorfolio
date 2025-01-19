import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GradientText from "./GradientText";
import { Link } from "react-scroll";

export default function NavBar() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-slate-900/70");
      } else {
        setNavbarBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div
      className={`fixed z-50 w-full max-sm:px-20 px-6 font-semibold transition-colors duration-300 ${navbarBg}`}
    >
      <div className="flex justify-between items-center py-3 mx-4 max-sm:mx-2">
        <h1 className="text-cyan-400 text-2xl cursor-pointer">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            vanTan22ab();
          </GradientText>
        </h1>

        {/* Nút menu cho mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CloseIcon fontSize="large" className="text-white" />
            ) : (
              <MenuIcon fontSize="large" className="text-white" />
            )}
          </button>
        </div>

        {/* Menu chính */}
        <ul
          className={`hidden sm:flex space-x-12 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {["home", "about", "project", "blog"].map((section) => (
            <li key={section} className="relative">
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={section === "about" ? -50 : 0}
                className={`cursor-pointer transition-all duration-500 ${
                  activeSection === section
                    ? "border-gradient-to-r from-cyan-400 to-rose-400"
                    : "border-transparent"
                }`}
              >
                <span
                  className={`transition-all duration-500 text-slate-300 ${
                    activeSection === section ? "text-cyan-50" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
              {activeSection === section && (
                <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 animate-slide"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Menu dropdown cho mobile */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-slate-900/90 py-4 space-y-4 text-center">
            {["home", "about", "project", "blog"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={section === "about" ? -50 : 0}
                className="block text-slate-300 hover:text-cyan-50 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        )}

        <button className="block max-sm:hidden">
          <GitHubIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
