import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GradientText from "./GradientText";
import { Link } from "react-scroll";

export default function NavBar() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Xử lý thay đổi màu nền navbar khi cuộn
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-slate-900/70");
      } else {
        setNavbarBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Sử dụng IntersectionObserver để xác định section hiện tại
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Khi 60% section hiển thị thì trigger
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full px-20 font-semibold transition-colors duration-300 ${navbarBg}`}
    >
      <div className="flex justify-between items-center py-2 mx-4">
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
        <ul className="flex space-x-12 justify-center">
          {["home", "about", "project", "blog"].map((section) => (
            <li key={section} className="relative">
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={section === "about" ? -50 : 0} // Offset -50 chỉ áp dụng cho "about"
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
              {/* Hiệu ứng động */}
              {activeSection === section && (
                <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 animate-slide"></div>
              )}
            </li>
          ))}
        </ul>

        <button>
          <GitHubIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
