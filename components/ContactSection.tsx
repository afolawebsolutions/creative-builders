"use client"; // Ensure this is a client component

import { forwardRef, useState } from "react";
import Image from "next/image";
import { CornerDownRight } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    organization: "",
    description: "",
    value: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const serviceID = "service_bznlphy";
    // const templateID = "template_ox7g9cq";
    // const publicKey = "_4lSuctybktBQ9OET";

    try {
      await emailjs.send(
        serviceID!,
        templateID!,
        
        {
          firstname: formData.firstname,
          surname: formData.surname,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          description: formData.description,
          value: formData.value,
        },
        publicKey,
      );
      toast.success("Your message has been sent successfully!");
      setFormData({
        firstname: "",
        surname: "",
        email: "",
        phone: "",
        organization: "",
        description: "",
        value: "",
      });
    } catch (error) {
      console.error("Failed to send the message:", error);
      toast.error("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section ref={ref} className="bg-white py-12 px-8 md:px-[5%] lg:px-[8%] flex flex-col md:flex-row">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in touch with our <span className="text-green-500">team</span>
        </h2>
        <p className="text-center text-black mb-12">
          The all-in-one powerhouse team to help you launch & scale faster
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/Assets/map.png"
              alt="Dotted World Map"
              width={1000}
              height={1000}
              className="w-full h-auto"
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-gray-200 rounded-[80px] p-8 md:py-8 md:px-[15%] lg:px-[5%] relative">
            <h3 className="md:text-2xl text-lg font-semibold mb-6 text-center font-cascadia">
              Let&apos;s get to know <span className="text-teal-600">you</span>
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="organization"
                placeholder="Name of Organization"
                className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                value={formData.organization}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Tell us more about your organization"
                rows={4}
                className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <textarea
                name="value"
                placeholder="What value do you aim to achieve with us?"
                rows={2}
                className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                value={formData.value}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold text-lg py-3 rounded-[20px] hover:bg-green-600 transition duration-300 flex justify-center"
              >
                <CornerDownRight />
                Submit
              </button>
            </form>
            <div className="absolute -bottom-[-75px] -left-36 w-56 h-56 lg:w-48 lg:h-48">
              <Image
                src="/Assets/Contact Us 1.png"
                alt="Person carrying envelope"
                width={400}
                height={500}
                className="w-full h-auto hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
