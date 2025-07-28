import React from "react";
import Navbar from "../components/Navbar";
import TechItem from "../components/TechItem";

function Home() {
  const techStack = [
    { name: "React", icon: "/react-icon.svg" },
    { name: "Next JS", icon: "/next-icon.svg" },
    { name: "JavaScript", icon: "/javascript-icon.svg" },
    { name: "TypeScript", icon: "/typescript-icon.svg" },
    { name: "Tailwind", icon: "/tailwind-icon.svg" },
    { name: "HTML", icon: "/html-icon.svg" },
    { name: "CSS", icon: "/css-icon.svg" },
  ];

  return (
    <div className="bg-[#0c0f11] min-h-screen text-white  font-['Roboto'] antialiased" id="home">
      <Navbar />

      <main className="w-full min-h-screen h-full flex justify-center pb-10 pt-20">
        <div className="h-full w-full max-w-[47.7rem] mx-auto px-6">
          <section id="hero" className="flex flex-col md:flex-row md:items-start gap-10 text-center md:text-left pt-16 pb-20">
            <div className="relative w-44 h-44 min-w-[11rem] min-h-[11rem] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-[#0c0f11] rounded-full">
                  <img
                    src="/image.png"
                    width="170"
                    height="170"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <h1 className="text-[#a0a0a0] font-bold text-[28px] md:text-[34px] tracking-[0.03em] relative">
                <span className="text-white">Hey, I'm Tinsae.</span> I'm a{" "}
                <br className="block md:hidden"/> Frontend Software Developer.
                <div className="md:absolute md:right-0 md:bottom-1.5 md:whitespace-nowrap inline-block mt-4 md:mt-0 bg-green-600/20 text-green-600 text-sm px-3 py-1 rounded-full hover:bg-green-500/20 hover:text-green-500 transition-colors duration-200">
                  <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
                  Open to work
                </div>
              </h1>
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
                <a
                  target="_blank"
                  className="text-[#a0a0a0] whitespace-nowrap hover:text-white transition-colors duration-200"
                 href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
                  rel="noopener noreferrer"
                >
                  🏠 Addis Ababa, Ethiopia.
                </a>
                <div className="w-full md:w-auto flex items-center justify-center md:justify-end gap-5 text-base text-[#a0a0a0]">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/tinsae-jembere-8157642b9"
                    className="flex items-center gap-1 hover:text-white transition-colors duration-200"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="24"
                      height="24"
                      src="/linkedin-icon.svg"
                    />
                    LinkedIn
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/TinsuJembere"
                    className="flex items-center gap-1 hover:text-white transition-colors duration-200"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="20"
                      height="20"
                      src="/github-icon.svg"
                    />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="flex flex-col mt-7">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
              Tech stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {techStack.map((tech) => (
                <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;