// Contact.jsx

import { Phone, MessageCircle, Mail, MapPinned} from "lucide-react";

const contactItems = [
  {
    icon: <Phone size={22} className="text-[#1F3F77]" />,
    title: "Call Us",
    value:  (<>+91 94437 35490<br />
              +91 97888 62013 <br />
              +91 94438 62790
            </>),
    subtitle: "Mon–Sat, 10AM–6PM",
    border: "border-[#1F3F77]",
  },
  {
    icon: <MessageCircle size={22} className="text-green-600" />,
    title: "WhatsApp",
    value: "+91 94437 35490",
    subtitle: "",
    border: "border-green-500",
  },
  {
    icon: <Mail size={22} className="text-green-600" />,
    title: "Email",
    value: "shengaippmchits@gmail.com",
    subtitle: "Reply within 24hrs",
    border: "border-green-500",
  },
  {
    icon: <MapPinned size={22} className="text-purple-600" />,
    title: "At Office",
    value: (
    <>
      57/2, Vaniyar Street (Upstairs),<br />
      Gandhi Road, Sengottai,<br />
      Tenkasi District – 627809,<br />
      Tamil Nadu.
    </>
  ),
    subtitle:"Mon–Sat, 10AM–6PM",
    border: "border-purple-500",
  },
];

export default function Contact() {
  return (
    <section className="bg-gray-100">
      {/* Header */}
      {/* <div className="w-full bg-[#1F3F77] py-8">
        <h2 className="text-4xl font-bold text-center text-white">
          Contact Us
        </h2>
      </div> */}

      <div className="relative w-full bg-gradient-to-br from-[#163F88] via-[#1a4d9e] to-[#0f2b5c] py-16 md:py-20 flex flex-col items-center justify-center overflow-hidden border-t-4 border-[#F7B500]">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Glowing orbs */}
        <div className="absolute h-72 w-72 rounded-full bg-blue-400/20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl -bottom-20 -right-20"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-4">
            <span className="inline-block h-1 w-16 bg-[#F7B500] rounded-full"></span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <div className="mt-6 flex justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"></span>
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></span>
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Heading */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-[#1F3F77] inline-block relative">
            Get in Touch
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-yellow-400 rounded"></span>
          </h3>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 border-l-4 ${item.border} hover:shadow-lg transition duration-300`}
            >
              <div className="flex items-start gap-4">
                <div>{item.icon}</div>

                <div>
                  <h4 className="font-semibold text-[#1F3F77]">{item.title}</h4>

                  <p className="text-gray-700 text-sm mt-1">{item.value}</p>

                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Additional Info */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-[#1F3F77] mb-4">
            We're Here to Help
          </h3>

          <p className="text-gray-600 leading-7">
            Have questions about our services? Reach out to us through any of
            the contact methods above. Our team is always ready to assist you
            with your enquiries, provide guidance, and offer the support you
            need.
          </p>
        </div>
      </div>
    </section>
  );
}
