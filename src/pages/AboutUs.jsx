import { Phone, Mail, User, Award, Leaf, Lightbulb } from "lucide-react";

const DIRECTORS = [
  {
    name: "Mr P. Murugesan",
    role: "Shengai ppm chits (p) ltd",
    phone: "+91 94437 35490",
    email: "shengaippmchits@gmail.com",
    photo: "/images/owner1.png",
  },
  {
    name: "Mrs M. Arumugathammal Murugesan",
    role: "Director",
    company: "Shengai ppm chits (p) ltd",
    photo: null,
  },
];

const LEGAL_INFO = [
  { label: "Company Status", value: "Active" },
  { label: "CIN", value: "U65991TN1997PTC038166" },
  { label: "Incorporation Date", value: "13 May 1997" },
  { label: "Paid-up Capital", value: "₹5,00,000" },
];

const STATS = [
  { value: "₹43L Cr+", label: "Total Assets" },
  { value: "290M+", label: "Policyholders" },
  { value: "13L+", label: "Agents" },
  { value: "2048", label: "Branches" },
];

const VALUES = [
  {
    icon: Award,
    title: "Trust & Integrity",
    description: "98%+ claim settlement ratio — one of India's highest.",
  },
  {
    icon: Leaf,
    title: "Social Commitment",
    description:
      "Funding rural welfare, affordable housing, and CSR activities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Full digital ecosystem: mobile app, online payments, e-services portal.",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full border-t-4 border-[#F7B500] bg-[#163F88] py-5 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          About Us
        </h1>
      </div>
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <section>
          <h1 className="text-2xl font-bold text-[#163F88]">Our Legacy</h1>
          <div className="w-12 h-1 bg-[#F7B500] rounded mt-2 mb-5"></div>

          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">
                Shengai P.P.M Chits Private Limited
              </span>{" "}
              is a trusted and legally registered chit fund company operating in
              Sengottai, Tenkasi District, Tamil Nadu. The company was
              incorporated on 13 May 1997 under the Companies Act and has been
              successfully serving customers for more than 29 years.
            </p>
            <p>
              With a strong commitment to financial discipline, transparency,
              and customer satisfaction, the company has earned the confidence
              of thousands of subscribers over the years. Our chit fund schemes
              are designed to help individuals, families, and business owners
              achieve their financial goals through systematic savings and
              reliable financial support.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            The company is guided by experienced directors:
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            Their leadership and dedication have contributed significantly to
            the growth and success of the organization.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {DIRECTORS.map((director) => (
              <div
                key={director.name}
                className="bg-[#163F88] rounded-xl p-4 flex items-center gap-3 overflow-hidden"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                  {director.photo ? (
                    <img
                      src={director.photo}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold">{director.name}</p>
                  {director.role && (
                    <p className="text-[#F7B500] text-sm mt-0.5">
                      {director.role}
                    </p>
                  )}
                  {director.company && (
                    <p className="text-[#F7B500] text-sm">{director.company}</p>
                  )}
                  {director.phone && (
                    <p className="text-[#F7B500] text-sm flex items-center gap-1.5 mt-0.5">
                      <Phone className="w-3.5 h-3.5" />
                      {director.phone}
                    </p>
                  )}
                  {director.email && (
                    <p className="text-[#F7B500] text-sm flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="text-[#F7B500] font-bold">
                        Email:
                      </span>{" "}
                      {director.email}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">
            Legal Information
          </h2>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            {LEGAL_INFO.map((item) => (
              <li key={item.label}>
                {item.label}: {item.value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Our Mission</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            To provide secure, transparent, and customer-friendly chit fund
            services that encourage disciplined savings and help customers meet
            their financial requirements efficiently.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-2">Our Vision</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            To become one of the most trusted chit fund organizations by
            delivering reliable financial solutions, maintaining transparency,
            and creating long-term value for our customers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-3">
            Registered Office Address:
          </h2>
          <div className="flex items-start gap-5">
            <img
              src="/images/PPM-Logo.jpeg"
              alt="Shengai PPM Chits logo"
              className="w-20 h-20 object-contain shrink-0"
            />
            <p className="text-sm text-gray-700 leading-relaxed">
              57/2, Muthalavathu Thalam,
              <br />
              Vaniyar Theru, Gandhi Road,
              <br />
              Sengottai, Tenkasi District – 627809, Tamil Nadu.
              <br />
              <br />
              Branch / Operational Office:
              <br />
              No. 340, K.C. Road,
              <br />
              Sengottai – 627809, Tamil Nadu.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 border border-gray-100 rounded-xl text-center py-6"
            >
              <p className="text-lg font-bold text-[#163F88]">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#163F88]">
            Our Leadership Values
          </h2>
          <div className="w-12 h-1 bg-[#F7B500] rounded mt-2 mb-5"></div>

          <div className="grid sm:grid-cols-3 gap-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#F7B500]" />
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
