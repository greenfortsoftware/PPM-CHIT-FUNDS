import {
  TrendingUp,
  Users,
  Shield,
  Baby,
  Heart,
  Wallet,
  Landmark,
} from "lucide-react";

const POLICIES = [
  {
    title: "ULIP",
    icon: TrendingUp,
    color: "text-purple-600",
    headerBg: "bg-purple-50",
    headerText: "text-purple-600",
    data: [
      { name: "Nivesh Plus", plan: 749, category: "ULIP", age: "0–70 yrs" },
      { name: "Index Plus", plan: 873, category: "ULIP", age: "0–60 yrs" },
      { name: "SIIP", plan: 752, category: "ULIP", age: "0–65 yrs" },
      {
        name: "New Pension Plus",
        plan: 867,
        category: "ULIP",
        age: "25–75 yrs",
      },
      {
        name: "Protection Plus",
        plan: 886,
        category: "ULIP",
        age: "18–65 yrs",
      },
    ],
  },
  {
    title: "Annuity",
    icon: Users,
    color: "text-green-600",
    headerBg: "bg-green-50",
    headerText: "text-green-600",
    data: [
      {
        name: "Jeevan Akshay-VII",
        plan: 857,
        category: "Annuity",
        age: "25–100 yrs",
      },
      {
        name: "New Jeevan Shanti",
        plan: 758,
        category: "Annuity",
        age: "30–79 yrs",
      },
      {
        name: "Smart Pension",
        plan: 879,
        category: "Annuity",
        age: "18–100 yrs",
      },
      {
        name: "Saral Pension",
        plan: 862,
        category: "Annuity",
        age: "40–80 yrs",
      },
    ],
  },
  {
    title: "Term",
    icon: Shield,
    color: "text-blue-600",
    headerBg: "bg-blue-50",
    headerText: "text-blue-600",
    data: [
      {
        name: "New Jeevan Amar",
        plan: 955,
        category: "Term",
        age: "18–65 yrs",
      },
      { name: "YUVA TERM", plan: 875, category: "Term", age: "18–45 yrs" },
      {
        name: "Yuva Credit Life",
        plan: 877,
        category: "Term",
        age: "18–45 yrs",
      },
      { name: "Bima Kavach", plan: 887, category: "Term", age: "18–65 yrs" },
      {
        name: "Saral Jeevan Bima",
        plan: 859,
        category: "Term",
        age: "18–65 yrs",
      },
    ],
  },
  {
    title: "Child",
    icon: Baby,
    color: "text-pink-500",
    headerBg: "bg-pink-50",
    headerText: "text-pink-600",
    data: [
      {
        name: "New Children's Money Back",
        plan: 732,
        category: "Child",
        age: "0–12 yrs",
      },
      { name: "Jeevan Tarun", plan: 734, category: "Child", age: "0–12 yrs" },
      { name: "Amrit Baal", plan: 774, category: "Child", age: "0–13 yrs" },
    ],
  },
  {
    title: "Whole Life",
    icon: Heart,
    color: "text-orange-500",
    headerBg: "bg-orange-50",
    headerText: "text-orange-600",
    data: [
      {
        name: "Jeevan Umang",
        plan: 745,
        category: "Whole Life",
        age: "0–55 yrs",
      },
      {
        name: "Jeevan Utsav",
        plan: 771,
        category: "Whole Life",
        age: "0–65 yrs",
      },
      {
        name: "Jeevan Utsav (Single Premium)",
        plan: 883,
        category: "Whole Life",
        age: "0–65 yrs",
      },
    ],
  },
  {
    title: "Money Back",
    icon: Wallet,
    color: "text-teal-600",
    headerBg: "bg-teal-50",
    headerText: "text-teal-600",
    data: [
      {
        name: "Money Back (20 Year)",
        plan: 720,
        category: "Moneyback",
        age: "13–50 yrs",
      },
      {
        name: "Money Back (25 Year)",
        plan: 721,
        category: "Moneyback",
        age: "13–45 yrs",
      },
      { name: "Bima Shree", plan: 748, category: "Moneyback", age: "8–55 yrs" },
      {
        name: "Bima Lakshmi",
        plan: 881,
        category: "Moneyback",
        age: "18–50 yrs",
      },
    ],
  },
  {
    title: "Endowment",
    icon: Landmark,
    color: "text-indigo-600",
    headerBg: "bg-indigo-50",
    headerText: "text-indigo-600",
    data: [
      {
        name: "Jeevan Anand",
        plan: 715,
        category: "Endowment",
        age: "18–50 yrs",
      },
      {
        name: "Single Premium Endowment",
        plan: 717,
        category: "Endowment",
        age: "0–65 yrs",
      },
      {
        name: "Jeevan Lakshya",
        plan: 733,
        category: "Endowment",
        age: "18–50 yrs",
      },
      {
        name: "Jeevan Labh",
        plan: 736,
        category: "Endowment",
        age: "8–59 yrs",
      },
      { name: "Bima Jyoti", plan: 760, category: "Endowment", age: "0–60 yrs" },
      {
        name: "Nav Jeevan Shree (Limited)",
        plan: 912,
        category: "Endowment",
        age: "0–60 yrs",
      },
      {
        name: "New Jeevan Sathi (Single)",
        plan: 888,
        category: "Endowment",
        age: "18–60 yrs",
      },
      {
        name: "New Jeevan Sathi (Limited)",
        plan: 889,
        category: "Endowment",
        age: "18–50 yrs",
      },
    ],
  },
];

const PolicyTable = ({ data, headerBg, headerText }) => (
  <>
    <table className="w-full text-sm">
      <thead>
        <tr className={`${headerBg}`}>
          <th className={`text-left px-3 py-2 font-semibold ${headerText}`}>
            Policy Name
          </th>
          <th className={`text-left px-3 py-2 font-semibold ${headerText}`}>
            Plan No.
          </th>
          <th className={`text-left px-3 py-2 font-semibold ${headerText}`}>
            Category
          </th>
          <th className={`text-left px-3 py-2 font-semibold ${headerText}`}>
            Entry Age
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <td className="px-3 py-2.5 text-gray-800">{row.name}</td>
            <td className="px-3 py-2.5 text-gray-600">{row.plan}</td>
            <td className="px-3 py-2.5 text-gray-600">{row.category}</td>
            <td className="px-3 py-2.5 text-gray-600">{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const Policies = () => {
  return (
    <>
      {/* <div className="w-full border-t-4 border-[#F7B500] bg-[#163F88] py-5 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Policies
        </h1>
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
            Policies
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

      <main className="bg-gray-50 min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            LIC Policies Master List
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Explore a wide range of LIC policies designed for every stage of
            your life.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {POLICIES.map(
            ({ title, icon: Icon, color, headerBg, headerText, data }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 px-5 py-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-opacity-10 flex items-center justify-center ${headerBg}`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h2 className={`text-lg font-bold ${color}`}>{title}</h2>
                </div>

                {/* Table */}

                <div className="overflow-x-auto">
                  <PolicyTable
                    data={data}
                    headerBg={headerBg}
                    headerText={headerText}
                  />
                </div>
              </div>
            ),
          )}

          {/* CTA card */}
          <div className="bg-[#163F88] rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between p-6 gap-6">
            <div>
              <h2 className="text-white text-2xl font-bold leading-snug">
                Plan Today for a<br />
                Secure Tomorrow
              </h2>
              <p className="text-blue-200 text-sm mt-3 leading-relaxed">
                LIC offers a variety of plans to help you protect what matters
                most and build a better future for your loved ones.
              </p>
            </div>
            {/* <button className="flex items-center gap-2 bg-[#163F88] border-2 border-white text-white font-semibold px-5 py-2.5 rounded-lg w-fit hover:bg-white hover:text-[#163F88] transition-colors text-sm">
              Explore Policies →
            </button> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Policies;
