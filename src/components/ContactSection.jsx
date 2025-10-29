"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocationOn, MdCall } from "react-icons/md";
import Link from "next/link";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [isloading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;
  const template_confirmation_user = process.env.NEXT_PUBLIC_CONFIRMATION_TEMPLATE_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, subject, message } = formData;
  
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (name.trim().length < 3) {
      toast.error("Please enter a valid name.");
      return;
    }
  
    if (subject.trim().length < 3) {
      toast.error("Please enter a valid subject.");
      return;
    }
  
    if (message.trim().length < 10) {
      toast.error("Message must be greater than 10 characters.");
      return;
    }
  
    setIsLoading(true);
    emailjs.init(publicKey);
  
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((result) => {
        console.log("Email sent:", result.text);
        toast.success("Your message has been sent successfully.");
  
        // Send confirmation email to user
        return emailjs.send(serviceID, template_confirmation_user, formData, publicKey);
      })
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Email failed:", error.text);
        toast.error("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  


  return (
    <section className="py-16 px-6 mt-14" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium heading pb-3 text-gray-700 line mb-12">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">
              Let's Connect
            </h3>
            <p className="text-gray-500 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <MdLocationOn className="w-7 h-7 text-orange-400" />
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">Location</h4>
                  <p className="text-gray-500">Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-4">
                <MdOutlineMailOutline className="w-7 h-7 text-orange-400" />
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">Email</h4>
                  <p className="text-gray-500">cmubashar369@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MdCall className="w-7 h-7 text-orange-400" />
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">Phone</h4>
                  <p className="text-gray-500">+92-3257547022</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-5 mt-8">
              <Link
                href="https://www.github.com/mubashir-hsn"
                target="_blank"
                className="bg-white text-gray-800 w-10 h-10 flex items-center justify-center hover:bg-orange-400 hover:text-white hover:-translate-y-1 duration-300 transition-all rounded-full text-2xl "
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:mubazi80@gmail.com"
                className="bg-white text-gray-800 w-10 h-10 flex items-center justify-center hover:bg-orange-400 hover:text-white hover:-translate-y-1 duration-300 transition-all rounded-full text-2xl "
              >
                <MdOutlineMailOutline className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mubashir-hsn"
                target="_blank"
                className="bg-white text-gray-800 w-10 h-10 flex items-center justify-center hover:bg-orange-400 hover:text-white hover:-translate-y-1 duration-300 transition-all rounded-full text-2xl "
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2" data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-600 text-white py-2 focus:outline-none focus:border-orange-400 peer"
                />
                <label
                  className={`absolute left-0 text-gray-400 transition-all duration-200 
                    ${formData.name ? "text-orange-400 -top-5 text-sm" : "top-2"}`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-600 text-white py-2 focus:outline-none focus:border-orange-400 peer"
                />
                <label
                  className={`absolute left-0 text-gray-400 transition-all duration-200 
                    ${formData.email ? "text-orange-400 -top-5 text-sm" : "top-2"}`}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-600 text-white py-2 focus:outline-none focus:border-orange-400 peer"
                />
                <label
                  className={`absolute left-0 text-gray-400 transition-all duration-200 
                    ${formData.subject ? "text-orange-400 -top-5 text-sm" : "top-2"}`}
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-600 text-white py-2 focus:outline-none focus:border-orange-400 peer resize-none"
                ></textarea>
                <label
                  className={`absolute left-0 text-gray-400 transition-all duration-200 
                    ${formData.message ? "text-orange-400 -top-5 text-sm" : "top-2"}`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isloading}
                className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white font-medium px-6 py-3 rounded-lg w-full transition"
              >
                {
                  isloading ? "Sending Message...." : "Send Message"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
