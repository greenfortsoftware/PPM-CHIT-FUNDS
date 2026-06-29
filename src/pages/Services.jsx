import {
  CreditCard,
  ClipboardList,
  RefreshCw,
  Download,
  Calculator,
  FileText,
  Building2,
  UserCheck,
  Lock,
} from "lucide-react";

const DIGITAL_SERVICES = [
  {
    icon: CreditCard,
    title: "Chit Funds",
    description:
      "Participate in chit funds, view your chit account, and make payments online.",
  },
  {
    icon: ClipboardList,
    title: "LIC",
    description:
      "View your LIC policy details, premium history, and download e-policy statements.",
  },
  {
    icon: RefreshCw,
    title: "Star Health",
    description:
      "View your Star Health policy details, premium history, and download e-policy statements.",
  },
  {
    icon: Download,
    title: "Others",
    description:
      "View your other policy details, premium history, and download e-policy statements.",
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero banner */}
      {/* <div className="bg-[#163F88] py-10 text-center border-b-4 border-[#F7B500]">
        <h1 className="text-3xl font-bold text-white">Our Services</h1>
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
            Services
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
      <div className="bg-gray-50 min-h-screen px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#163F88] mb-1">
          Digital Services
        </h2>
        <div className="w-14 h-1 bg-[#F7B500] rounded mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIGITAL_SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group relative bg-[#F4F7FC] rounded-2xl border border-gray-100
                shadow-sm p-6 flex flex-col gap-4 overflow-hidden
                cursor-pointer
                transition-all duration-300 ease-in-out
                hover:-translate-y-1.5 hover:shadow-xl hover:border-[#163F88]
              "
            >
              {/* Sliding background fill on hover */}
              <div
                className="
                absolute inset-0 bg-[#163F88]
                translate-y-full group-hover:translate-y-0
                transition-transform duration-300 ease-in-out
                rounded-2xl z-0
              "
              />

              {/* Icon */}
              <div
                className="
                relative z-10
                w-11 h-11 rounded-xl flex items-center justify-center
                bg-blue-100 group-hover:bg-white/20
                transition-colors duration-300
              "
              >
                <Icon className="w-5 h-5 text-[#163F88] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h5
                  className="
                  !font-bold text-base mb-1.5
                  !text-[#163F88] group-hover:!text-white
                  transition-colors duration-300
                "
                >
                  {title}
                </h5>
                <p
                  className="
                  text-sm leading-relaxed
                  text-gray-500 group-hover:text-blue-100
                  transition-colors duration-300
                "
                >
                  {description}
                </p>
              </div>

              {/* Animated bottom accent line */}
              <div
                className="
                absolute bottom-0 left-0 h-1 bg-[#F7B500]
                w-0 group-hover:w-full
                transition-all duration-500 ease-in-out
                rounded-b-2xl z-10
              "
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
