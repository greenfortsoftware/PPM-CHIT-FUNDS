// import React from "react";

// const Policies = () => {
//   return <div>Policies</div>;
// };

// export default Policies;

// import React from "react";

// const Policies = () => {
//   const policies = [
//     {
//       title: "ULIP",
//       color: "purple",
//       policies: [
//         { name: "Nivesh Plus", plan: "749", category: "ULIP", age: "0-70 yrs" },
//         { name: "Index Plus", plan: "873", category: "ULIP", age: "0-60 yrs" },
//         { name: "SIIP", plan: "752", category: "ULIP", age: "0-65 yrs" },
//         {
//           name: "Protection Plus",
//           plan: "886",
//           category: "ULIP",
//           age: "18-65 yrs",
//         },
//       ],
//     },
//     {
//       title: "Money Back",
//       color: "blue",
//       policies: [
//         {
//           name: "Money Back (20 Year)",
//           plan: "720",
//           category: "Moneyback",
//           age: "13-50 yrs",
//         },
//         {
//           name: "Money Back (25 Year)",
//           plan: "721",
//           category: "Moneyback",
//           age: "13-45 yrs",
//         },
//         {
//           name: "Bima Shree",
//           plan: "748",
//           category: "Moneyback",
//           age: "8-55 yrs",
//         },
//       ],
//     },
//     {
//       title: "Annuity",
//       color: "green",
//       policies: [
//         {
//           name: "Jeevan Akshay VII",
//           plan: "857",
//           category: "Annuity",
//           age: "25-100 yrs",
//         },
//         {
//           name: "Smart Pension",
//           plan: "879",
//           category: "Annuity",
//           age: "18-100 yrs",
//         },
//       ],
//     },
//     {
//       title: "Term",
//       color: "indigo",
//       policies: [
//         {
//           name: "New Jeevan Amar",
//           plan: "955",
//           category: "Term",
//           age: "18-65 yrs",
//         },
//         {
//           name: "YUVA TERM",
//           plan: "875",
//           category: "Term",
//           age: "18-45 yrs",
//         },
//       ],
//     },
//     {
//       title: "Child",
//       color: "pink",
//       policies: [
//         {
//           name: "New Children's Money Back",
//           plan: "732",
//           category: "Child",
//           age: "0-12 yrs",
//         },
//         {
//           name: "Jeevan Tarun",
//           plan: "734",
//           category: "Child",
//           age: "0-12 yrs",
//         },
//       ],
//     },
//     {
//       title: "Endowment",
//       color: "cyan",
//       policies: [
//         {
//           name: "Jeevan Anand",
//           plan: "715",
//           category: "Endowment",
//           age: "18-50 yrs",
//         },
//         {
//           name: "Jeevan Lakshya",
//           plan: "733",
//           category: "Endowment",
//           age: "18-50 yrs",
//         },
//         {
//           name: "Bima Jyoti",
//           plan: "760",
//           category: "Endowment",
//           age: "0-60 yrs",
//         },
//       ],
//     },
//   ];

//   const colors = {
//     purple: {
//       text: "text-purple-600",
//       bg: "bg-purple-100",
//     },
//     blue: {
//       text: "text-blue-600",
//       bg: "bg-blue-100",
//     },
//     green: {
//       text: "text-green-600",
//       bg: "bg-green-100",
//     },
//     indigo: {
//       text: "text-indigo-600",
//       bg: "bg-indigo-100",
//     },
//     pink: {
//       text: "text-pink-600",
//       bg: "bg-pink-100",
//     },
//     cyan: {
//       text: "text-cyan-600",
//       bg: "bg-cyan-100",
//     },
//   };

//   const PolicyCard = ({ title, color, policies }) => (
//     <div className="bg-white border rounded-xl shadow-sm p-4">
//       <div className="flex items-center gap-3 mb-4">
//         <div
//           className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${colors[color].bg} ${colors[color].text}`}
//         >
//           ★
//         </div>

//         <h2 className={`text-xl font-bold ${colors[color].text}`}>{title}</h2>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="bg-slate-100">
//               <th className="p-2 text-left">Policy Name</th>
//               <th className="p-2">Plan No.</th>
//               <th className="p-2">Category</th>
//               <th className="p-2">Entry Age</th>
//             </tr>
//           </thead>

//           <tbody>
//             {policies.map((item, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-2">{item.name}</td>
//                 <td className="p-2 text-center">{item.plan}</td>
//                 <td className="p-2 text-center">{item.category}</td>
//                 <td className="p-2 text-center">{item.age}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   return (
//     <section className="bg-slate-50 py-10 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
//             LIC Policies Master List
//           </h1>

//           <p className="text-gray-500 mt-3">
//             Explore a wide range of LIC policies designed for every stage of
//             your life.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid lg:grid-cols-2 gap-6">
//           {policies.map((item, index) => (
//             <PolicyCard key={index} {...item} />
//           ))}

//           {/* Banner Card */}
//           <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm p-6 flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-blue-900">
//               Plan Today for a Secure Tomorrow
//             </h2>

//             <p className="mt-4 text-gray-600">
//               LIC offers a variety of plans to help protect what matters most
//               and build a better future for your loved ones.
//             </p>

//             <button className="mt-6 w-fit bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
//               Explore Policies →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Policies;

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
);

const Policies = () => {
  return (
    <main className="bg-gray-50 min-h-screen px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          LIC Policies Master List
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Explore a wide range of LIC policies designed for every stage of your
          life.
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
          <button className="flex items-center gap-2 bg-[#163F88] border-2 border-white text-white font-semibold px-5 py-2.5 rounded-lg w-fit hover:bg-white hover:text-[#163F88] transition-colors text-sm">
            Explore Policies →
          </button>
        </div>
      </div>
    </main>
  );
};

export default Policies;
