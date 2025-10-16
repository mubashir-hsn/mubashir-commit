"use client";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="py-5 md:py-10 bg-white text-gray-700 flex items-center justify-center md:rounded-2xl"
        >
            <div className="w-full lg:max-w-7xl md:px-4 lg:px-12 mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Content */}
                <div data-aos="fade-right" className="space-y-6 pt-4 px-4">
                    <h2 className="text-2xl md:text-4xl font-medium pb-3 text-orange-400 heading line">About Me</h2>
                    <p className="pt-4 leading-6 text-justify">
                        I am <span className="font-semibold text-orange-400">Mubashar Hassan</span>,
                        a passionate Software Engineering student and full-stack developer based in Punjab, Pakistan.
                        I'm passionate about developing full-stack web applications with a strong focus on clean UI and optimized backend logic.
                        I have hands-on experience in React, Node.js, Express, MongoDB, and MySQL.
                        Alongside, I also work with PHP, C#, and have a basic understanding of Python and C++.
                        I enjoy turning ideas into reality through elegant code and creative design.
                    </p>

                    {/* Education & Experience */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <FaGraduationCap className="text-orange-400 text-3xl mt-1" />
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Education</h3>
                                <p>
                                    BS Software Engineering at PMAS - Arid University, <br />Rawalpindi (2022–Present)
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaBriefcase className="text-orange-400 text-3xl mt-1" />
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Experience</h3>
                                <p>UI/UX & MERN Intern at SFH</p>
                                <p>Developed full-stack projects and designed intuitive UIs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content – Skills */}
                <div data-aos="fade-left" className="space-y-6 shadow-md bg-orange-400/60 py-10 px-3 md:px-6 md:rounded-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold text-white pb-3 line1">Technical Skills</h2>

                    <div className="space-y-4">
                        {/* Programming */}
                        <div className="bg-orange-200 px-3 md:px-6 py-4 rounded-2xl space-y-3 hover:-translate-y-2 duration-500">
                            <h3 className="text-lg md:text-xl font-medium text-gray-700 heading">Programming</h3>
                            <div className="flex flex-wrap gap-2">
                                {["C++", "Python", "JavaScript", "PHP", "SQL"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white text-orange-400 px-3 py-2 rounded-full font-medium hover:-translate-y-1.5 duration-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="bg-orange-200 px-3 md:px-6 py-4 rounded-2xl space-y-3 hover:-translate-y-2 duration-500">
                            <h3 className="text-lg md:text-xl font-medium text-gray-700 heading">Frontend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Html/Css", "Javascript", "React.js", "Bootstrap", "Tailwind"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white text-orange-400 px-3 py-2 rounded-full font-medium hover:-translate-y-1.5 duration-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-orange-200 px-3 md:px-6 py-4 rounded-2xl space-y-3 hover:-translate-y-2 duration-500">
                            <h3 className="text-lg md:text-xl font-medium text-gray-700 heading">Backend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "Node/Express.js", "MongoDB", "MySQL", "PHP"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white text-orange-400 px-3 py-2 rounded-full font-medium hover:-translate-y-1.5 duration-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Other Skills */}
                        <div className="bg-orange-200 px-3 md:px-6 py-4 rounded-2xl space-y-3 hover:-translate-y-2 duration-500">
                            <h3 className="text-lg md:text-xl font-medium text-gray-700 heading">Other Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["UI/UX Design", "JWT/NextAuth", "REST APIs", "Git & GitHub", "AI Integration"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white text-orange-400 px-3 py-2 rounded-full font-medium hover:-translate-y-1.5 duration-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
