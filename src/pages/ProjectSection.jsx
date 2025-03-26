import React from "react";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      name: "Personal Website",
      image: "./project.png",
      des: "Portfolio Project is a personal website designed to showcase my skills, experience, and projects in a professional and visually appealing way. Built using modern technologies like React and TailwindCSS, this project highlights responsive design, smooth navigation, and a focus on delivering a seamless user experience. The portfolio reflects my journey as a developer and serves as a hub for potential collaborators and employers to explore my work.",
    },
    {
      id: 2,
      name: "Code Arena",
      image: "./project1.jpg",
      des: "The Online Course Platform project is a responsive and user-friendly website designed to sell and manage educational courses. It provides a clean and modern interface where users can browse courses, view detailed information, and enroll seamlessly. Built with technologies like React and TailwindCSS, the platform ensures fast performance and a visually appealing design. Features include course categorization, user authentication, secure payment integration, and progress tracking, creating a complete and engaging learning experience for students. This project demonstrates my ability to develop scalable, functional, and interactive web applications tailored to real-world needs.",
    },
  ];

  return (
    <div className="h-fit max-sm:w-screen  max-sm:px-4">
      <div className="grid place-items-center text-slate-300 text-xl">
        <p className="text-3xl font-bold max-sm:text-2xl">My Project Experience Posts</p>
        <p className="max-sm:text-lg">Explore projects I've worked in 2025</p>
      </div>
      <div className="text-slate-300 flex flex-wrap gap-4 mt-4 animate-fadeIn">
        {projects.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col justify-center space-x-2 w-[400px] items-center p-4 border-4 border-slate-500 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-auto object-contain mb-2"
            />
            <p className="text-2xl my-2 font-medium ">{tech.name}</p>
            <p className="line-clamp-4 text-slate-400">{tech.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
