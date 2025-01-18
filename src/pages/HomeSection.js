import React from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TikTokOutlined } from "@ant-design/icons";
import TrueFocus from "../components/TrueFocus";

export default function HomeSection() {
  const icons = [
    {
      component: <InstagramIcon style={{ fontSize: 35 }} />,
      colors: "from-purple-500 to-pink-500",
      ringColor: "ring-purple-500",
      link: "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fluji._o01%3Figsh%3DNW95bG81MmtzYXlm&h=AT2ejmFzlXoooH9ycafKikAQBGxRkwY3FNX_zcHk4OWfY69jVgPE52trPXIDTmvcylmO2YIJIDuTFPoFzhWkpOZAAFRXTN8loI_4I_HLcN4_Rdu_oOkEzbedsZSxdX6yZXQkOzL5AnnmcBBgZAkhFA",
    },
    {
      component: <FacebookIcon style={{ fontSize: 35 }} />,
      colors: "from-sky-500 to-blue-800",
      ringColor: "ring-blue-500",
      link: "https://www.facebook.com/share/18Sto4LfM6/",
    },
    {
      component: <TikTokOutlined style={{ fontSize: 35 }} />,
      colors: "from-rose-500 to-pink-700",
      ringColor: "ring-teal-500",
      link: "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.tiktok.com%2F%40i_amvtan28%3F_t%3DZS-8tAfaZI0x3h%26_r%3D1&h=AT2ejmFzlXoooH9ycafKikAQBGxRkwY3FNX_zcHk4OWfY69jVgPE52trPXIDTmvcylmO2YIJIDuTFPoFzhWkpOZAAFRXTN8loI_4I_HLcN4_Rdu_oOkEzbedsZSxdX6yZXQkOzL5AnnmcBBgZAkhFA",
    },
    {
      component: <GitHubIcon style={{ fontSize: 35 }} />,
      colors: "from-gray-700 to-gray-900",
      ringColor: "ring-gray-700",
      link: "https://github.com/VanTan22ab",
    },
  ];

  return (
    <div className="flex justify-around px-10 text-slate-300 items-center w-full">
      <div className="text-2xl space-y-2 animate-slideOut">
        <h1>Hello World, I'm</h1>
        <p>
          <TrueFocus
            sentence="Nguyen Van Tan"
            manualMode={false}
            blurAmount={2}
            borderColor="cyan"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </p>
        <p className="text-4xl text-slate-100">Frontend Developer</p>
        <p className="flex items-center text-xl">
          Welcome to my personal website{" "}
          <WavingHandIcon className="mx-2" fontSize="small" />
        </p>
        <div className="flex space-x-8">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 flex items-center justify-center"
            >
              {/* Main icon with hover ring effect */}
              <div
                className={`absolute z-10 text-white bg-gradient-to-r ${icon.colors} p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform hover:ring-4 hover:${icon.ringColor} hover:ring-opacity-50`}
              >
                {icon.component}
              </div>

              {/* Reflection of the icon */}
              <div className="absolute mt-12 z-0 inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute flex items-center justify-center w-full h-full transform scale-y-[-1] translate-y-12 opacity-50">
                    {/* Icon reflection with original gradient */}
                    <div
                      className={`relative bg-gradient-to-r ${icon.colors} p-4 rounded-full shadow-lg`}
                    >
                      {icon.component}
                    </div>

                    {/* Faded gradient overlay for water-like reflection */}
                    <div className="absolute bg-gradient-to-b from-slate-950 via-slate-900 to-transparent p-4 rounded-full shadow-lg opacity-60">
                      {icon.component}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="h-80 rounded-[50%] border-4 w-fit animate-slideIn">
        <img
          src="./avt.jpg"
          className="h-full rounded-[50%] ring-8 ring-cyan-500 animate-glow"
        />
      </div>
    </div>
  );
}
