import React from "react";
import {
  User,
  Phone,
  Mail,
  Shield,
  ShieldCheck,
  Landmark,
  Users,
  Calendar,
  Award,
  Building,
  MapPin,
} from "lucide-react";

// Data arrays (mock – replace with actual imports)
const DIRECTORS = [
  {
    name: "Mr P. Murugesan",
    role: "Chief Lic Advisor, Star Health Insurance",
    phone: "+91 98765 43210",
    email: "shengaippmchits@gmail.com",
    photo: "/images/murugesan.JPG",
  },
  {
    name: "Mrs M. Arumugathammal Murugesan",
    role: "Director",
    phone: "+91 98765 43211",
    email: "ps@ppmchits.com",
    photo: "/images/mrs_murugesan.png",
  },
];

const LEGAL_INFO = [
  { label: "CIN", value: "U65992TN1997PTC038178" },
  { label: "Registration No", value: "038178" },
  { label: "Date of Incorporation", value: "13 May 1997" },
  { label: "ROC", value: "Chennai" },
];

const STATS = [
  { value: "₹10L+", label: "Total Assets", icon: Calendar },
  { value: "5K+", label: "Policyholders", icon: Users },
  { value: "20+", label: "Agents", icon: Award },
  { value: "2", label: "Branches", icon: ShieldCheck },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Every auction and transaction is fully documented and open to our subscribers.",
  },
  {
    icon: Landmark,
    title: "Financial Discipline",
    description:
      "Helping you build structured savings habits backed by strict regulatory compliance.",
  },
  {
    icon: Users,
    title: "Customer Centricity",
    description:
      "Tailored schemes built around the unique financial goals of families and business owners.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-50/80 min-h-screen pb-20 font-sans">
      {/* ===== HERO BANNER ===== */}
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
            About Us
          </h1>
          <p className="text-blue-200/80 text-sm md:text-base mt-3 max-w-xl mx-auto font-light tracking-wider">
            Shengai P.P.M Chits Private Limited — Trusted since 1997
          </p>
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

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-16">
        {/* ===== LEGACY + STATS (split layout) ===== */}
        <section className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#163F88] tracking-tight">
                Our Legacy
              </h2>
            </div>
            <div className="w-14 h-1 bg-[#F7B500] rounded-full"></div>

            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p className="bg-white p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-[#F7B500]">
                <span className="font-semibold text-[#163F88] text-base">
                  Shengai P.P.M Chits Private Limited
                </span>{" "}
                is a trusted and legally registered chit fund company operating
                in Sengottai, Tenkasi District, Tamil Nadu. The company was
                incorporated on{" "}
                <span className="font-semibold text-[#163F88]">
                  13 May 1997
                </span>{" "}
                under the Companies Act and has been successfully serving
                customers for more than{" "}
                <span className="font-bold text-[#F7B500]">29 years</span>.
              </p>
              <p className="bg-white p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-[#F7B500]">
                With a strong commitment to financial discipline, transparency,
                and customer satisfaction, the company has earned the confidence
                of thousands of subscribers over the years. Our chit fund
                schemes are designed to help individuals, families, and business
                owners achieve their financial goals through systematic savings
                and reliable financial support.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:pt-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-100 rounded-2xl text-center py-6 px-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-1.5">
                  <stat.icon className="w-5 h-5 text-[#F7B500] group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-2xl font-black text-[#163F88] group-hover:text-[#F7B500] transition-colors">
                  {stat.value}
                </p>
                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== DIRECTORS ===== */}
        <section>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#163F88] tracking-tight">
                Board of Directors
              </h2>
            </div>
            <div className="w-14 h-1 bg-[#F7B500] rounded-full"></div>
            <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F7B500]"></span>
              Their leadership and dedication have contributed significantly to
              the growth and success of the organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {DIRECTORS.map((director) => (
              <div
                key={director.name}
                alt={director.name}
                title={director.name}
                className="group bg-gradient-to-br from-[#163F88] to-[#1a4d9e] rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-white/10"
              >
                {/* Decorative background glow */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#F7B500]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                {/* Avatar */}
                <div className="relative z-10 w-20 h-20 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center overflow-hidden shrink-0 shadow-inner group-hover:border-[#F7B500]/50 transition-colors duration-300">
                  {director.photo ? (
                    <img
                      src={director.photo}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-white/70 group-hover:text-[#F7B500] transition-colors" />
                  )}
                </div>

                {/* Info */}
                <div className="relative z-10 space-y-1.5">
                  <p className="text-white font-bold text-lg tracking-wide leading-tight">
                    {director.name}
                  </p>
                  {director.role && (
                    <p className="text-[#F7B500] text-xs font-semibold bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                      {director.role}
                    </p>
                  )}
                  {director.phone && (
                    <p className="text-blue-100/80 text-xs flex items-center gap-1.5 pt-1 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#F7B500]" />
                      {director.phone}
                    </p>
                  )}
                  {director.email && (
                    <p className="text-blue-100/80 text-xs flex items-center gap-1.5 hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 text-[#F7B500]" />
                      <span className="opacity-70">Email:</span>{" "}
                      {director.email}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== MISSION, VISION, LEGAL (3 columns) ===== */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-[#163F88] group-hover:bg-[#163F88] group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Our Mission
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide secure, transparent, and customer-friendly chit fund
              services that encourage disciplined savings and help customers
              meet their financial requirements efficiently.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 text-[#F7B500] group-hover:bg-[#F7B500] group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To become one of the most trusted chit fund organizations by
              delivering reliable financial solutions, maintaining transparency,
              and creating long-term value for our customers.
            </p>
          </div>

          {/* Legal Information */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-3">
              Legal Information
            </h3>
            <div className="space-y-2.5 text-sm">
              {LEGAL_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-gray-400 font-medium">
                    {item.label}
                  </span>
                  <span className="text-gray-800 font-semibold text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP VALUES ===== */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#163F88] tracking-tight">
              Our Leadership Values
            </h2>
            <div className="w-14 h-1 bg-[#F7B500] rounded-full mt-2"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 hover:border-t-[#163F88] border-t-[#F7B500]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-amber-50 group-hover:bg-[#163F88] transition-colors">
                    <Icon className="w-5 h-5 text-[#F7B500] group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{title}</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ADDRESS BLOCK ===== */}
        {/* <section className="bg-white border border-gray-100 rounded-3xl  p-6 md:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 bg-blue-50 rounded-full -mr-20 -mt-20 opacity-40"></div>
          <div className="absolute left-0 bottom-0 h-32 w-32 bg-amber-50 rounded-full -ml-16 -mb-16 opacity-30"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shrink-0 shadow-sm">
              <img
                src="/images/PPM-Logo.jpeg"
                alt="Shengai PPM Chits logo"
                title="Shengai PPM Chit Funds Pvt Ltd"
                className="w-20 h-20 object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex-1 space-y-4 w-full text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl tracking-wide flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-5 h-5 text-[#F7B500]" />
                Registered & Operational Presence
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 leading-relaxed">
                <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-100 hover:border-[#F7B500]/30 transition-colors">
                  <p className="font-bold text-[#163F88] uppercase tracking-wider mb-1.5 text-xs flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Registered Office
                  </p>
                  <p className="text-gray-900 font-medium mb-1">
                    57/2, Upstairs,
                  </p>
                  <p className="mb-1">Vaniyar Street, Gandhi Road,</p>
                  <p className="mb-1">Sengottai, Tenkasi District – 627809,</p>
                  <p className="font-medium text-gray-950">Tamil Nadu.</p>
                </div>
                <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-100 hover:border-[#F7B500]/30 transition-colors">
                  <p className="font-bold text-[#163F88] uppercase tracking-wider mb-1.5 text-xs flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Branch / Operational Office
                  </p>
                  <p className="text-gray-900 font-medium mb-1">No. 340,</p>
                  <p className="mb-1">K.C. Road,</p>
                  <p className="mb-1">Sengottai – 627809,</p>
                  <p className="font-medium text-gray-950 mb-1">Tamil Nadu.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          {/* Animated background blobs */}
          <div className="absolute right-0 top-0 h-48 w-48 bg-blue-100 rounded-full -mr-20 -mt-20 opacity-40 group-hover:scale-125 group-hover:opacity-60 transition-all duration-700 ease-in-out"></div>
          <div className="absolute left-0 bottom-0 h-32 w-32 bg-amber-100 rounded-full -ml-16 -mb-16 opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-700 ease-in-out delay-100"></div>

          {/* Amber top accent line that slides in on hover */}
          <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#163F88] to-[#F7B500] group-hover:w-full transition-all duration-500 ease-in-out rounded-t-3xl"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Logo */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shrink-0 shadow-sm group-hover:shadow-md group-hover:border-[#F7B500]/40 group-hover:-translate-y-1 transition-all duration-300">
              <img
                src="/images/PPM-Logo.jpeg"
                alt="Shengai PPM Chits logo"
                title="Shengai PPM Chit Funds Pvt Ltd"
                className="w-20 h-20 object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex-1 space-y-4 w-full text-center sm:text-left">
              <h3 className="font-bold text-gray-900 text-xl tracking-wide flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-5 h-5 text-[#F7B500] group-hover:animate-bounce" />
                Registered & Operational Presence
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 leading-relaxed">
                {/* Registered Office */}
                <div className="relative bg-gray-50/70 p-4 rounded-xl border border-gray-100 hover:border-[#163F88]/30 hover:bg-blue-50/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden group/card">
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#163F88] group-hover/card:w-full transition-all duration-500"></div>
                  <p className="font-bold text-[#163F88] uppercase tracking-wider mb-1.5 text-xs flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Registered Office
                  </p>
                  <p className="text-gray-900 font-medium mb-1">
                    57/2, Upstairs,
                  </p>
                  <p className="mb-1">Vaniyar Street, Gandhi Road,</p>
                  <p className="mb-1">Sengottai, Tenkasi District – 627809,</p>
                  <p className="font-medium text-gray-950">Tamil Nadu.</p>
                </div>

                {/* Branch Office */}
                <div className="relative bg-gray-50/70 p-4 rounded-xl border border-gray-100 hover:border-[#F7B500]/40 hover:bg-amber-50/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden group/card">
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F7B500] group-hover/card:w-full transition-all duration-500"></div>
                  <p className="font-bold text-[#163F88] uppercase tracking-wider mb-1.5 text-xs flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Branch / Operational Office
                  </p>
                  <p className="text-gray-900 font-medium mb-1">No. 340,</p>
                  <p className="mb-1">K.C. Road,</p>
                  <p className="mb-1">Sengottai – 627809,</p>
                  <p className="font-medium text-gray-950">Tamil Nadu.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F7B500]"></span>
            Incorporated in 1997 · Serving Sengottai & beyond
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F7B500]"></span>
          </p>
        </div>
      </main>
    </div>
  );
}
