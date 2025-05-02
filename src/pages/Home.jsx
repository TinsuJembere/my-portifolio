import React from "react";
import Navbar from "../components/Navbar";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <div id="home">
      <Navbar/>
      <div className="bg-[url('src/images/homeBg.jpg')] flex flex-col bg-cover bg-center h-120 w-full items-center justify-center">
      <h1 className="text-white text-6xl font-semibold pb-5">
            Hi, I'm Tinsae Jembere
          </h1>
          <h1 className="text-white text-4xl pb-7">Website Developer</h1>
          <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    <button className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600">
                      Contact Me
                    </button>
                  </ScrollLink>
      </div>
    </div>
  );
}

export default Home;
