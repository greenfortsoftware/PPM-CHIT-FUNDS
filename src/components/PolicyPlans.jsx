// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   TrendingUp,
//   Landmark,
//   Shield,
//   Baby,
//   HeartPulse,
//   Wallet,
//   PiggyBank,
//   ChevronDown,
//   ChevronUp,
//   ArrowRight,
// } from "lucide-react";

// const POLICY_PLANS = [
//   {
//     title: "ULIP",
//     description:
//       "Pure term plan offering high life coverage at affordable premiums. Available online only.",
//     icon: TrendingUp,
//     bg: "bg-blue-100",
//     fg: "text-blue-600",
//   },
//   {
//     title: "Annuity",
//     description:
//       "Participating non-linked endowment plan providing savings and life protection. Annual bonuses.",
//     icon: Landmark,
//     bg: "bg-amber-100",
//     fg: "text-amber-600",
//   },
//   {
//     title: "Term",
//     description:
//       "Periodic money-back payouts to fund education and milestones for children.",
//     icon: Shield,
//     bg: "bg-emerald-100",
//     fg: "text-emerald-600",
//   },
//   {
//     title: "Child",
//     description:
//       "Survival benefits at ages 18, 20, 22 years, with maturity at 25 for education support.",
//     icon: Baby,
//     bg: "bg-purple-100",
//     fg: "text-purple-600",
//   },
//   {
//     title: "Whole Life",
//     description:
//       "Non-participating health plan covering hospitalisation, surgical procedures, and critical illness.",
//     icon: HeartPulse,
//     bg: "bg-rose-100",
//     fg: "text-rose-600",
//   },
//   {
//     title: "Money Back",
//     description:
//       "Single-premium annuity plan guaranteeing a regular income for life.",
//     icon: Wallet,
//     bg: "bg-cyan-100",
//     fg: "text-cyan-600",
//   },
//   {
//     title: "Endowment",
//     description:
//       "Single-premium annuity plan guaranteeing a regular income for life.",
//     icon: PiggyBank,
//     bg: "bg-pink-100",
//     fg: "text-pink-600",
//   },
// ];

// const FIELDS = [
//   { key: "name", label: "Your Name", type: "text", as: "input" },
//   { key: "mobile", label: "Mobile Number", type: "tel", as: "input" },
//   { key: "email", label: "Email Address", type: "email", as: "input" },
//   { key: "enquiryType", label: "Type of Enquiry", type: "text", as: "input" },
//   { key: "message", label: "Your Message", as: "textarea" },
// ];

// export default function PolicyPlansEnquiry() {
//   const form = useRef(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     enquiryType: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [showAll, setShowAll] = useState(false);

//   const VISIBLE_COUNT = 5;
//   const visiblePlans = showAll
//     ? POLICY_PLANS
//     : POLICY_PLANS.slice(0, VISIBLE_COUNT);

//   const handleChange = (key) => (e) => {
//     setFormData((prev) => ({ ...prev, [key]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       );

//       console.log("SUCCESS:", result);

//       setSubmitted(true);

//       setFormData({
//         name: "",
//         mobile: "",
//         email: "",
//         enquiryType: "",
//         message: "",
//       });

//       // Reset the actual form elements
//       form.current.reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send enquiry.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-8">
//       <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
//         {/* Our Policy Plans */}
//         <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
//           <div className="flex items-start justify-between gap-4 px-6 pt-6">
//             <div>
//               <h2 className="text-2xl font-bold text-blue-950">
//                 Our Policy Plans
//               </h2>
//               <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />
//             </div>
//             <button
//               type="button"
//               className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
//             >
//               More Details
//               <ArrowRight className="h-3.5 w-3.5" />
//             </button>
//           </div>
//           <div className="mt-4 divide-y divide-slate-100">
//             {visiblePlans.map(({ title, description, icon: Icon, bg, fg }) => (
//               <div
//                 key={title}
//                 className="flex items-start gap-3 px-6 py-2.5 transition-colors hover:bg-slate-50"
//               >
//                 <div
//                   className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bg}`}
//                 >
//                   <Icon className={`h-5 w-5 ${fg}`} strokeWidth={2} />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-blue-950">{title}</p>
//                   <p className="mt-0.5 text-sm text-slate-500">{description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {POLICY_PLANS.length > VISIBLE_COUNT && (
//             <button
//               type="button"
//               onClick={() => setShowAll((prev) => !prev)}
//               className="flex w-full items-center justify-center gap-1.5 border-t border-slate-100 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-slate-50 hover:text-blue-900"
//             >
//               {showAll ? "View Less" : "View More"}
//               {showAll ? (
//                 <ChevronUp className="h-4 w-4" />
//               ) : (
//                 <ChevronDown className="h-4 w-4" />
//               )}
//             </button>
//           )}
//         </section>

//         {/* Enquiry Form */}
//         <section className="rounded-2xl bg-blue-950 p-6 text-white md:p-8">
//           <h2 className="text-2xl font-bold">Enquiry</h2>
//           <p className="mt-1 text-sm text-blue-200">
//             We will get back to you soon!
//           </p>
//           <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />

//           <form ref={form} onSubmit={handleSubmit} className="mt-6 space-y-5">
//             {FIELDS.map(({ key, label, type, as }) => (
//               <div key={key}>
//                 <label
//                   htmlFor={key}
//                   className="mb-1.5 block text-sm text-blue-200"
//                 >
//                   {label}
//                 </label>
//                 {as === "textarea" ? (
//                   <textarea
//                     id={key}
//                     name="message"
//                     rows={4}
//                     value={formData[key]}
//                     onChange={handleChange(key)}
//                     className="w-full resize-none rounded-md border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-white placeholder-blue-300 outline-none transition-colors focus:border-amber-400"
//                   />
//                 ) : (
//                   <input
//                     id={key}
//                     name={
//                       key === "name"
//                         ? "user_name"
//                         : key === "mobile"
//                           ? "user_phone"
//                           : key === "email"
//                             ? "user_email"
//                             : key === "enquiryType"
//                               ? "enquiry_type"
//                               : key
//                     }
//                     type={type}
//                     value={formData[key]}
//                     onChange={handleChange(key)}
//                     className="w-full rounded-md border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-white placeholder-blue-300 outline-none transition-colors focus:border-amber-400"
//                   />
//                 )}
//               </div>
//             ))}

//             <button
//               type="submit"
//               className="w-full rounded-md bg-amber-400 py-3 text-sm font-bold uppercase tracking-wide text-blue-950 transition-colors hover:bg-amber-300"
//             >
//               Submit Enquiry
//             </button>

//             {submitted && (
//               <p className="text-center text-sm text-emerald-300">
//                 Thanks! We've received your enquiry.
//               </p>
//             )}
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  TrendingUp,
  Landmark,
  Shield,
  Baby,
  HeartPulse,
  Wallet,
  PiggyBank,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const POLICY_PLANS = [
  {
    title: "ULIP",
    description:
      "Pure term plan offering high life coverage at affordable premiums. Available online only.",
    icon: TrendingUp,
    bg: "bg-blue-100",
    fg: "text-blue-600",
  },
  {
    title: "Annuity",
    description:
      "Participating non-linked endowment plan providing savings and life protection. Annual bonuses.",
    icon: Landmark,
    bg: "bg-amber-100",
    fg: "text-amber-600",
  },
  {
    title: "Term",
    description:
      "Periodic money-back payouts to fund education and milestones for children.",
    icon: Shield,
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
  },
  {
    title: "Child",
    description:
      "Survival benefits at ages 18, 20, 22 years, with maturity at 25 for education support.",
    icon: Baby,
    bg: "bg-purple-100",
    fg: "text-purple-600",
  },
  {
    title: "Whole Life",
    description:
      "Non-participating health plan covering hospitalisation, surgical procedures, and critical illness.",
    icon: HeartPulse,
    bg: "bg-rose-100",
    fg: "text-rose-600",
  },
  {
    title: "Money Back",
    description:
      "Single-premium annuity plan guaranteeing a regular income for life.",
    icon: Wallet,
    bg: "bg-cyan-100",
    fg: "text-cyan-600",
  },
  {
    title: "Endowment",
    description:
      "Single-premium annuity plan guaranteeing a regular income for life.",
    icon: PiggyBank,
    bg: "bg-pink-100",
    fg: "text-pink-600",
  },
];

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "support@company.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 9am–6pm" },
];

const FIELDS = [
  { key: "name", label: "Your Name", type: "text", as: "input", col: true },
  {
    key: "mobile",
    label: "Mobile Number",
    type: "tel",
    as: "input",
    col: true,
  },
  {
    key: "email",
    label: "Email Address",
    type: "email",
    as: "input",
    col: true,
  },
  {
    key: "enquiryType",
    label: "Type of Enquiry",
    type: "text",
    as: "input",
    col: true,
  },
  { key: "message", label: "Your Message", as: "textarea", col: false },
];

const VISIBLE_COUNT = 4;

export default function PolicyPlansEnquiry() {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [errors, setErrors] = useState({});

  const visiblePlans = showAll
    ? POLICY_PLANS
    : POLICY_PLANS.slice(0, VISIBLE_COUNT);

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      console.log("SUCCESS:", result);
      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        enquiryType: "",
        message: "",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send enquiry.");
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.enquiryType.trim()) {
      newErrors.enquiryType = "Please select a type of enquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* Policy Plans*/}
        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-6 md:px-8 pt-6 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-950">
                Our Policy Plans
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />
            </div>
            <Link
              to="/policies"
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 text-decoration-none"
            >
              More Details
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 2-column plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-100">
            {visiblePlans.map(
              ({ title, description, icon: Icon, bg, fg }, i) => (
                <div
                  key={title}
                  className={[
                    "flex items-start gap-3 px-6 md:px-8 py-4 transition-colors hover:bg-slate-50",
                    "border-b border-slate-100",
                    // right border for left-column cells on md+
                    i % 2 === 0 ? "md:border-r md:border-r-slate-100" : "",
                  ].join(" ")}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}
                  >
                    <Icon className={`h-5 w-5 ${fg}`} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">{title}</p>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* View more / less */}
          {POLICY_PLANS.length > VISIBLE_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="flex w-full items-center justify-center gap-1.5 border-t border-slate-100 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-slate-50 hover:text-blue-900"
            >
              {showAll ? "View Less" : "View More"}
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          )}
        </section>

        {/*  Enquiry */}
        <section className="overflow-hidden rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3">
          {/* Left info panel */}
          <div className="bg-blue-900 p-8 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Enquiry</h2>
              <p className="mt-1 text-sm text-blue-300">
                We will get back to you soon!
              </p>
              <div className="mt-3 h-1 w-12 rounded-full bg-amber-400" />
            </div>

            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-blue-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-blue-400 font-medium">
                      {label}
                    </p>
                    <p className="text-sm text-white mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form — takes 2 of 3 columns */}
          <div className="md:col-span-2 bg-blue-950 p-8">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* 2-col input grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FIELDS.filter((f) => f.col).map(({ key, label, type }) => (
                  <div key={key}>
                    <label
                      htmlFor={key}
                      className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400"
                    >
                      {label}
                    </label>
                    <input
                      id={key}
                      name={
                        key === "name"
                          ? "user_name"
                          : key === "mobile"
                            ? "user_phone"
                            : key === "email"
                              ? "user_email"
                              : key === "enquiryType"
                                ? "enquiry_type"
                                : key
                      }
                      type={type}
                      value={formData[key]}
                      onChange={handleChange(key)}
                      className="w-full rounded-lg border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-sm text-white placeholder-blue-400 outline-none transition-colors focus:border-amber-400"
                    />
                    {/* ← Error goes here */}
                    {errors[key] && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <span>⚠</span> {errors[key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message full-width */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none rounded-lg border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-sm text-white placeholder-blue-400 outline-none transition-colors focus:border-amber-400"
                />
                {/* ← Error goes here */}
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-400 py-3 text-sm font-bold uppercase tracking-wider text-blue-950 transition-colors hover:bg-amber-300"
              >
                Submit Enquiry
              </button>

              {submitted && (
                <p className="text-center text-sm text-emerald-400">
                  Thanks! We've received your enquiry.
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
