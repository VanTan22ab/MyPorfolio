import React, { useState } from "react";

export default function ContactSection() {
  const blogs = [
    {
      id: 1,
      date: "01-01-2025",
      name: "Tailwind CSS - CSS framework",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNFlxi8Kz8qUv85wrcESdxTWlfkDB-zVUxw&s",
      des: "Tailwind CSS is a utility-first CSS framework that has gained immense popularity for its simplicity and flexibility. It allows developers to build responsive and highly customizable web interfaces with ease.",
    },
    {
      id: 2,
      date: "03-01-2025",
      name: "React Bits - Animated UI Components For React",
      image: "./reactbits.png",
      des: "React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow. From simple text animations to complex 3D components, React Bits provides everything you need to create unique and impactful websites.",
    },
    {
      id: 3,
      date: "04-01-2025",
      name: "MUI - Material UI Library For React",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnj7J_0VrAptr3mQ882fwkCXkb_p7NZDQxEw&s",
      des: "MUI or Material UI is an open-source React Components library that is based on Google's Material Design and provides the predefined UI components for React.",
    },
  ];

  const language = [
    {
      id: 1,
      date: "01-01-2025",
      name: "JavaScript",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJA6UFV6kBwQkGnmhpKTjNlTnO2WTq9WdjxA&s",
      des: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, ...",
    },
    {
      id: 2,
      date: "02-01-2025",
      name: "HTML - Hyper Text Markup Language",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQ9l9mVgAOgo-fs2QddCtiPoItDk11gdDgg&s",
      des: "Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    },
    {
      id: 3,
      date: "06-01-2025",
      name: "CSS - Cascading Style Sheets",
      image:
        "https://i.ytimg.com/vi/o1ve0GvhL2E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXJEOqTI1jH9afECkzHFIkDjplSw",
      des: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    },
  ];

  const [currentData, setCurrentData] = useState(blogs);

  return (
    <div className="grid grid-cols-3 gap-4 h-full pt-20 max-sm:flex max-sm:flex-col">
      {/* Buttons */}
      <div className="w-full h-full flex flex-col gap-2 py-10 px-10 text-slate-300 sm:order-last">
        <div>
          <p>Let's share experiences, stories and knowledge together.</p>
          <div className="h-[1px] rounded-[50%] border-2 border-slate-500 w-[30%] my-4"></div>
        </div>
        <div>
          <p className="text-2xl text-slate-200 font-semibold mb-6">Topics</p>
          <button
            className="animate-slideIn py-2 px-4 text-white rounded-lg border border-slate-600 mr-2 text-slate-400 hover:bg-slate-800"
            onClick={() => setCurrentData(blogs)}
          >
            Library
          </button>
          <button
            className="animate-fadeIn py-2 px-4 text-white rounded-lg border border-slate-600 mr-2 text-slate-400 hover:bg-slate-800"
            onClick={() => setCurrentData(language)}
          >
            Language
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="col-span-2 text-slate-300 flex flex-col w-full gap-4 animate-fadeIn sm:order-first">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between space-x-2 w-full h-fit items-center py-2 px-4 border-4 border-slate-500 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            <div className="grid grid-rows-5 gap-2">
              <p className="row-span-1 text-sm text-slate-400">{item.date}</p>
              <div className="row-span-4">
                <p className="text-xl font-medium">{item.name}</p>
                <p className="line-clamp-3 text-slate-400">{item.des}</p>
              </div>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-[200px] h-32 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
