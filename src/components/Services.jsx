"use client";
import { FaCode, FaServer, FaDatabase, FaCubes, FaPaintBrush } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-orange-400" />,
      title: "Frontend Development",
      description:
        "Building responsive, modern, and visually appealing web interfaces using React, Next.js, Tailwind, and Bootstrap.",
      features: [
        "Responsive UI Design",
        "Next.js Optimization",
        "Reusable Components",
        "Cross-Browser Compatibility",
      ],
    },
    {
      icon: <FaServer className="text-4xl text-orange-400" />,
      title: "Backend Development",
      description:
        "Developing secure and scalable backend systems with Node.js, Express, and PHP to power dynamic web apps.",
      features: [
        "RESTful API Development",
        "Authentication with JWT",
        "Error Handling & Validation",
        "Server Optimization",
      ],
    },
    {
      icon: <FaDatabase className="text-4xl text-orange-400" />,
      title: "Database Management",
      description:
        "Designing efficient and optimized database architectures using MongoDB and MySQL.",
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Database Management",
      ],
    },
    {
      icon: <FaCubes className="text-4xl text-orange-400" />,
      title: "Full Stack Development",
      description:
        "Integrating frontend and backend technologies to create seamless, full-stack web applications.",
      features: [
        "MERN Stack Development",
        "API Integration",
        "Authentication & Authorization",
        "Deployment & DevOps",
      ],
    },
    {
      icon: <FaPaintBrush className="text-4xl text-orange-400" />,
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive, and user-friendly interfaces that enhance the user experience.",
      features: [
        "Wireframing & Prototyping",
        "Color & Typography Systems",
        "User-Centered Design",
        "Figma & Adobe XD Expertise",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-12 mt-[6rem] bg-orange-400/50 rounded-2xl text-gray-700 flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-medium heading line1 pb-3 text-white mb-15">
          My Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-200 hover:bg-orange-100/90 rounded-2xl px-6 py-8 shadow-md hover:-translate-y-2.5 transition-all duration-400 text-left"
            >
              <div className="mb-4 flex items-center justify-start">
                <div className="p-3 bg-orange-100 rounded-full">{service.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="text-orange-400">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
