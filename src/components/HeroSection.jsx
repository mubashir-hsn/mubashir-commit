"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pb-24 lg:pb-0 lg:min-h-screen px-6 md:px-16"
    >
     <div className="flex flex-col md:flex-row items-center justify-between pt-28">
         {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm <span className="bg-gradient-to-b from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent heading font-medium">Mubashar Hassan</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          <Typewriter
            words={[
              "Full Stack Developer 💻",
              "UI/UX Enthusiast 🎨",
              "MERN Stack Engineer ⚙️",
              "Creative Coder 🚀",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
          I build modern, responsive, and intelligent web applications using
          React, Next.js, Node.js, and MongoDB — blending creativity with
          technology to deliver clean, functional designs.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a
            download={true}
            href="/CV_Mubashar.pdf"
            className="bg-white text-orange-400 font-medium px-6 py-3 rounded-full shadow hover:bg-orange-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="font-medium text-white bg-orange-400 px-6 py-3 rounded-full hover:bg-white hover:text-orange-400 transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 hidden md:flex justify-center mt-10 md:mt-0">
        <Image
          src="/hero-image.png"
          alt="Mubashar"
          width={450}
          height={200}
          className=""
          priority
        />
      </div>
     </div>
    </section>
  );
}
