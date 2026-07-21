import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ChitPlans from "./ChitPlans";
import Reviews from "./Reviews";
import { supabase } from "../supabase";
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
  HandCoins,
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
  {
    title: "Micro",
    description:
      "Affordable micro insurance plan offering essential financial protection. Ideal for individuals and families with low premium payments.",
    icon: HandCoins,
    bg: "bg-orange-100",
    fg: "text-orange-600",
  },
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

/* Animated family / piggy-bank savings illustration, replaces phone/email/hours */
function EnquiryIllustration() {
  return (
    <div className="flex items-center justify-center py-2">
      <style>{`
        .ppm-illust .bg-circle {
          transform-origin: 150px 150px;
          animation: ppmBreathe 5s ease-in-out infinite;
        }
        @keyframes ppmBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .ppm-illust .shadow {
          transform-origin: 150px 235px;
          animation: ppmShadow 3.6s ease-in-out infinite;
        }
        @keyframes ppmShadow {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(0.9); opacity: 0.7; }
        }
        .ppm-illust .piggy {
          transform-origin: 150px 187px;
          animation: ppmBounce 3.2s ease-in-out infinite;
        }
        @keyframes ppmBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .ppm-illust .coin-left {
          transform-origin: 105px 150px;
          animation: ppmDropLeft 3.2s ease-in-out infinite;
        }
        @keyframes ppmDropLeft {
          0%, 10% { transform: translate(0, -25px); opacity: 0; }
          28%, 50% { transform: translate(20px, 15px); opacity: 1; }
          65%, 100% { transform: translate(20px, 15px); opacity: 0; }
        }
        .ppm-illust .coin-right {
          transform-origin: 205px 150px;
          animation: ppmDropRight 3.2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        @keyframes ppmDropRight {
          0%, 10% { transform: translate(0, -25px); opacity: 0; }
          28%, 50% { transform: translate(-15px, 15px); opacity: 1; }
          65%, 100% { transform: translate(-15px, 15px); opacity: 0; }
        }
        .ppm-illust .coin-top {
          transform-origin: 150px 140px;
          animation: ppmDropTop 3.2s ease-in-out infinite;
          animation-delay: 1s;
        }
        @keyframes ppmDropTop {
          0%, 10% { transform: translateY(-20px); opacity: 0; }
          28%, 50% { transform: translateY(15px); opacity: 1; }
          65%, 100% { transform: translateY(15px); opacity: 0; }
        }
        .ppm-illust .person-left {
          transform-origin: 90px 130px;
          animation: ppmSway 4.5s ease-in-out infinite;
        }
        .ppm-illust .person-right {
          transform-origin: 210px 140px;
          animation: ppmSway 4.5s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        .ppm-illust .person-top {
          transform-origin: 150px 110px;
          animation: ppmSway 4.5s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        @keyframes ppmSway {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(1.5deg) translateY(-4px); }
        }
        .ppm-illust .dash-arc {
          stroke-dasharray: 4 6;
          animation: ppmDash 3s linear infinite;
        }
        @keyframes ppmDash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
      <svg
        className="ppm-illust w-full max-w-[240px] h-auto"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="bg-circle" cx="150" cy="150" r="130" fill="#22307a" />
        <ellipse className="shadow" cx="150" cy="235" rx="95" ry="12" fill="#0f1a4d" />

        <g className="piggy">
          <rect x="95" y="150" width="110" height="75" rx="8" fill="#f5b825" />
          <rect x="95" y="150" width="110" height="18" rx="8" fill="#e0a916" />
          <circle cx="150" cy="188" r="14" fill="#0f1a4d" />
          <rect x="146" y="178" width="8" height="20" rx="2" fill="#f5b825" />
          <path
            d="M120 150 v-20 a30 30 0 0 1 60 0 v20"
            fill="none"
            stroke="#f5b825"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>

        <circle className="coin-left" cx="105" cy="150" r="6" fill="#ffe08a" />
        <circle className="coin-right" cx="205" cy="150" r="6" fill="#ffe08a" />
        <circle className="coin-top" cx="150" cy="140" r="6" fill="#ffe08a" />

        <g className="person-left">
          <circle cx="90" cy="95" r="22" fill="#7f8fd6" />
          <rect x="72" y="117" width="36" height="45" rx="10" fill="#7f8fd6" />
        </g>

        <g className="person-right">
          <circle cx="210" cy="100" r="18" fill="#5dcaa5" />
          <rect x="196" y="118" width="28" height="38" rx="9" fill="#5dcaa5" />
        </g>

        <g className="person-top">
          <circle cx="150" cy="70" r="24" fill="#f0997b" />
          <rect x="130" y="94" width="40" height="50" rx="10" fill="#f0997b" />
        </g>

        <path
          className="dash-arc"
          d="M60 210 q90 -40 180 0"
          fill="none"
          stroke="#f5b825"
          strokeWidth="3"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

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
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [enquiryId, setEnquiryId] = useState("");

  const visiblePlans = showAll
    ? POLICY_PLANS
    : POLICY_PLANS.slice(0, VISIBLE_COUNT);

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSendError("");
    setSending(true);

    const generateEnquiryId = async () => {
      const now = new Date();
      const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase();
      const year = String(now.getFullYear()).slice(-2);
      const { data, error } = await supabase.rpc("increment_enquiry_counter");
      if (error) throw error;
      return `PPM-${month}${year}-${data}`;
    };

    try {
      const id = await generateEnquiryId();
      setEnquiryId(id);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_phone: formData.mobile,
          user_email: formData.email,
          enquiry_type: formData.enquiryType,
          message: formData.message,
          enquiry_id: id,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID,
          {
            user_name: formData.name,
            user_phone: formData.mobile,
            user_email: formData.email,
            enquiry_type: formData.enquiryType,
            message: formData.message,
            enquiry_id: id,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (confirmErr) {
        console.warn("Customer confirmation failed:", confirmErr);
      }

      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", enquiryType: "", message: "" });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendError("Failed to send. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <ChitPlans />
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
                )
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
            {/* Left illustration panel — replaces phone / email / hours */}
            <div className="bg-blue-900 p-8 flex flex-col gap-6 justify-start">
              <div>
                <h2 className="text-2xl font-bold text-white">Enquiry</h2>
                <p className="mt-1 text-sm text-blue-300">
                  We will get back to you soon!
                </p>
                <div className="mt-3 h-1 w-12 rounded-full bg-amber-400" />
              </div>

              <EnquiryIllustration />
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
                        inputMode={key === "mobile" ? "numeric" : undefined}
                        maxLength={key === "mobile" ? 10 : undefined}
                        value={formData[key]}
                        onChange={
                          key === "mobile"
                            ? (e) => {
                                const digitsOnly = e.target.value.replace(/\D/g, "");
                                setFormData((prev) => ({ ...prev, mobile: digitsOnly }));
                                setErrors((prev) => ({ ...prev, mobile: "" }));
                              }
                            : handleChange(key)
                        }
                        className="w-full rounded-lg border border-blue-800 bg-blue-900/60 px-3 py-2.5 text-sm text-white placeholder-blue-400 outline-none transition-colors focus:border-amber-400"
                      />
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
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg bg-amber-400 py-3 text-sm font-bold uppercase tracking-wider text-blue-950 transition-colors hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Submit Enquiry"}
                </button>

                {submitted && (
                  <div className="text-center space-y-1">
                    <p className="text-sm text-emerald-400">
                      Thanks! We've received your enquiry.
                    </p>
                    <p className="text-xs text-blue-400">
                      Enquiry ID:{" "}
                      <span className="text-amber-400 font-mono font-semibold">
                        {enquiryId}
                      </span>
                    </p>
                  </div>
                )}
                {sendError && (
                  <p className="text-center text-sm text-red-400">
                    ⚠ {sendError}
                  </p>
                )}
              </form>
            </div>
          </section>
          {/*  Reviews */}
          <Reviews />
        </div>
      </div>
    </>
  );
}