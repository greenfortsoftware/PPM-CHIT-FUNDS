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
} from "lucide-react";

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

const FIELDS = [
  { key: "name", label: "Your Name", type: "text", as: "input" },
  { key: "mobile", label: "Mobile Number", type: "tel", as: "input" },
  { key: "email", label: "Email Address", type: "email", as: "input" },
  { key: "enquiryType", label: "Type of Enquiry", type: "text", as: "input" },
  { key: "message", label: "Your Message", as: "textarea" },
];

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

  const VISIBLE_COUNT = 5;
  const visiblePlans = showAll
    ? POLICY_PLANS
    : POLICY_PLANS.slice(0, VISIBLE_COUNT);

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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

    // Reset the actual form elements
    form.current.reset();

  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send enquiry.");
  }
  
};

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Our Policy Plans */}
        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="flex items-start justify-between gap-4 px-6 pt-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-950">
                Our Policy Plans
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />
            </div>
            <button
              type="button"
              className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              More Details
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="mt-4 divide-y divide-slate-100">
            {visiblePlans.map(({ title, description, icon: Icon, bg, fg }) => (
              <div
                key={title}
                className="flex items-start gap-3 px-6 py-2.5 transition-colors hover:bg-slate-50"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bg}`}
                >
                  <Icon className={`h-5 w-5 ${fg}`} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-semibold text-blue-950">{title}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

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

        {/* Enquiry Form */}
        <section className="rounded-2xl bg-blue-950 p-6 text-white md:p-8">
          <h2 className="text-2xl font-bold">Enquiry</h2>
          <p className="mt-1 text-sm text-blue-200">
            We will get back to you soon!
          </p>
          <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />

          <form ref={form} onSubmit={handleSubmit} className="mt-6 space-y-5">
            {FIELDS.map(({ key, label, type, as }) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="mb-1.5 block text-sm text-blue-200"
                >
                  {label}
                </label>
                {as === "textarea" ? (
                  <textarea
                    id={key}
                    name="message"
                    rows={4}
                    value={formData[key]}
                    onChange={handleChange(key)}
                    className="w-full resize-none rounded-md border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-white placeholder-blue-300 outline-none transition-colors focus:border-amber-400"
                  />
                ) : (
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
                    className="w-full rounded-md border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-white placeholder-blue-300 outline-none transition-colors focus:border-amber-400"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full rounded-md bg-amber-400 py-3 text-sm font-bold uppercase tracking-wide text-blue-950 transition-colors hover:bg-amber-300"
            >
              Submit Enquiry
            </button>

            {submitted && (
              <p className="text-center text-sm text-emerald-300">
                Thanks! We've received your enquiry.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
