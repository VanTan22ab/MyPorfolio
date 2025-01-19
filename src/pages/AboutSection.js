import React, { useState } from "react";
import GradientText from "../components/GradientText";

export default function AboutSection() {
  const [isTechStack, setTechStack] = useState(true);

  const tools = [
    {
      id: 1,
      name: "Figma",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      id: 2,
      name: "VS Code",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      id: 3,
      name: "Git",
      image: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
    },
    {
      id: 4,
      name: "Github",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hlPBIuPNbNlLYa1j1Pl1R0PZaDHBK4dExA&s",
    },
  ];

  const technologies = [
    {
      id: 1,
      name: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      name: "TailwindCSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 3,
      name: "SASS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    },
    {
      id: 4,
      name: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      id: 5,
      name: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      id: 6,
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      id: 7,
      name: "Material UI",
      image:
        "https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png",
    },
    {
      id: 8,
      name: "React Bits",
      image:
        "https://raw.githubusercontent.com/DavidHDev/react-bits/98cccc16d0eaa9326418432924b8ac9dbaa114a4/public/favicon.svg",
    },
  ];

  return (
    <div className="flex h-full flex-col space-y-10 justify-center items-center">
      <div className="w-full flex items-center space-x-4">
        <div className="h-fit border-slate-500 rounded border-2 w-12"></div>
        <p className="text-2xl font-bold whitespace-nowrap ">About Me</p>
        <div className="h-fit border-slate-500 rounded border-2 w-full"></div>
      </div>
      <div className="flex bg-slate-800 py-4 rounded-2xl max-sm:flex-col">
        <div className="grid w-full place-items-center space-y-4">
          <div className="relative h-60 rounded-[50%] w-fit shadow-lg">
            <img src="./avt2.jpg" className="h-full rounded-[50%]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-400/60 to-transparent rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <p className="flex border-x-4 border-cyan-400 rounded px-4 mb-2">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="mr-2"
              >
                Email:
              </GradientText>
              nvtan2801@gmail.com
            </p>
            <p className="flex border-x-4 border-cyan-400 rounded px-4">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="mr-2"
              >
                Phone:
              </GradientText>
              0383093385
            </p>
          </div>
        </div>
        <div className="box-border mt-10 flex-col space-y-4 items-center justify-center flex max-sm:px-1 px-12">
          <p className="border-l-4 border-cyan-400 pl-4">
            As a highly motivated and eager learner, I'm excited to contribute
            my skills to a dynamic frontend development team. Through
            self-guided learning and personal projects, I've developed a strong
            foundation in HTML, CSS, JavaScript and am always seeking
            opportunities to expand my knowledge and create exceptional user
            experiences.
          </p>
          <p className="border-l-4 border-cyan-400 pl-4">
            With a passion for technology and a keen eye for detail, I'm eager
            to apply my skills and knowledge to a frontend development role. I'm
            particularly drawn to the fast-paced and innovative nature of the
            tech industry and am excited to contribute to creating exceptional
            digital experiences.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center space-x-4">
          <div className="h-fit border-slate-500 rounded border-2 w-12"></div>
          <p className="text-2xl font-bold">Skills</p>
          <div className="h-fit border-slate-500 rounded border-2 w-full"></div>
        </div>
        <ul className="flex space-x-2 my-2">
          <button
            onClick={() => {
              setTechStack(true);
            }}
          >
            {isTechStack ? (
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class py-2 px-4 animate-fadeIn"
              >
                Tech Stack
              </GradientText>
            ) : (
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class py-2 px-4"
              >
                Tech Stack
              </GradientText>
            )}
          </button>
          <button
            onClick={() => {
              setTechStack(false);
            }}
          >
            {!isTechStack ? (
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class py-2 px-4 animate-fadeIn"
              >
                Tools
              </GradientText>
            ) : (
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class py-2 px-4"
              >
                Tools
              </GradientText>
            )}
          </button>
        </ul>
        {isTechStack ? (
          <div className="h-fit text-slate-300 flex flex-wrap gap-4 mt-4 max-sm:justify-center animate-fadeIn">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex justify-center space-x-2 w-56 items-center p-4 border-4 border-slate-500 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-10 object-contain"
                />
                <p className="text-xl font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-slate-300 flex flex-wrap gap-4 max-sm:justify-center mt-4 animate-fadeIn">
            {tools.map((tech) => (
              <div
                key={tech.id}
                className="flex justify-center space-x-2 w-56 items-center p-4 border-4 border-slate-500 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-10 object-contain"
                />
                <p className="text-xl font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
