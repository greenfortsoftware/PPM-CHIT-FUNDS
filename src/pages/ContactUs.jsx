import { Phone, MessageCircle, Mail, MapPinned, MapPin, Building } from "lucide-react";

const contactItems = [
  {
    icon: <Phone size={22} className="text-[#1F3F77]" />,
    title: "Call Us",
    value: (
      <>
        +91 94437 35490
        <br />
        +91 97888 62013 <br />
        +91 94438 62790
      </>
    ),
    subtitle: "Mon–Sat, 9AM–7PM (Sunday Holiday)",
    border: "border-[#1F3F77]",
  },
  {
    icon: <MessageCircle size={22} className="text-green-600" />,
    title: "WhatsApp",
    value: "+91 94437 35490",
    subtitle: "Feel free to chat with us during working hours!",
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
    title: "Working Hours",
    value: (
      <>
        Mon–Sat, 9AM–7PM,
        <br />
        Sunday Holiday.
        <br />
        
      </>
    ),
    subtitle: "",
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
      <div className="max-w-screen-2xl mx-auto px-8 py-12">
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

        {/* ===== ADDRESS + MAP ===== */}
        <section className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="absolute right-0 top-0 h-48 w-48 bg-blue-100 rounded-full -mr-20 -mt-20 opacity-40 group-hover:scale-125 group-hover:opacity-60 transition-all duration-700"></div>
          <div className="absolute left-0 bottom-0 h-32 w-32 bg-amber-100 rounded-full -ml-16 -mb-16 opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-700 delay-100"></div>
          <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#163F88] to-[#F7B500] group-hover:w-full transition-all duration-500 rounded-t-3xl"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Logo */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:border-[#F7B500]/40 group-hover:-translate-y-1 transition-all duration-300">
              <img
                src="/images/PPM-Logo.jpeg"
                alt="Shengai PPM Chits logo"
                className="w-20 h-20 object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex-1 space-y-4 w-full text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl tracking-wide flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-5 h-5 text-[#F7B500] group-hover:animate-bounce" />
                Registered & Operational Presence
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 leading-relaxed">
                {/* Address card */}
                <div className="relative bg-gray-50/70 p-4 rounded-xl border border-gray-100 hover:border-[#163F88]/30 hover:bg-blue-50/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden group/card">
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#163F88] group-hover/card:w-full transition-all duration-500"></div>
                  <p className="font-bold text-[#163F88] uppercase tracking-wider mb-3 text-xs flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Registered Office
                  </p>
                  <p className="text-gray-900 font-medium mb-1">57/2, Vaniyar Street (Upstairs),</p>
                  <p className="mb-1">Gandhi Road, Sengottai,</p>
                  <p className="mb-1">Tenkasi District – 627809,</p>
                  <p className="font-medium text-gray-950 mb-4">Tamil Nadu.</p>

                  {/* ✅ Get Directions button */}
                  <a
                    href="https://www.google.com/maps/place/Shengai+PPM+Chits+Pvt.+Ltd/@8.973890991085316,77.24600887554071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#163F88] px-3 py-1.5 rounded-lg hover:bg-[#F7B500] hover:text-[#163F88] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>

                {/* ✅ Google Maps Embed */}
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm min-h-[220px]">
                  <iframe
                    title="Shengai PPM Chits Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9810424756793!2d77.24600887554071!3d8.973890991085316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06816d1c7d4bbf%3A0x204643cddc0ba6cd!2sShengai%20PPM%20Chits%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1784519754761!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
