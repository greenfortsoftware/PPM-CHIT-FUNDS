import { useState } from "react";
import {
  CalendarDays,
  Users,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CHIT_PLANS = [
  {
    icon: CalendarDays,
    title: "Daily Collection",
    subtitle:
      "Save daily in small amounts and build a big fund. Ideal for short-term needs.",
    details:
      "Daily chit funds are perfect for small business owners and daily wage earners who can contribute small amounts every day. The prize amount is distributed monthly through a transparent auction process.",
  },
  {
    icon: Users,
    title: "Weekly Collection",
    subtitle: "Save weekly and enjoy attractive returns on a regular basis.",
    details:
      "Weekly chits offer a balanced saving frequency suitable for salaried individuals and traders. Contributions are made every week and the prize is distributed on a weekly auction basis.",
  },
  {
    icon: CalendarDays,
    title: "Monthly Collection",
    subtitle: "A popular saving plan with higher returns and flexible options.",
    details:
      "Monthly chit funds are the most popular option. They suit salaried employees and professionals who prefer monthly financial planning. Prize distribution happens every month through a fair bidding system.",
  },
  // {
  //   icon: Users,
  //   title: "Quarterly Chit",
  //   subtitle: "Save quarterly and get better returns with less commitment.",
  //   details:
  //     "Quarterly chit funds are suited for seasonal businesses and farmers who receive income periodically. The lower contribution frequency makes it easier to manage larger chit amounts.",
  // },
  // {
  //   icon: Star,
  //   title: "Special Chit",
  //   subtitle: "Customized chit plans for your special needs and goals.",
  //   details:
  //     "Special chit plans are tailored for high-value savings goals such as home construction, business expansion, or children's education. Plans are customised based on your financial requirements.",
  // },
];

const AMBER_BAR = "mt-2 h-1 w-12 rounded-full bg-amber-400";
const CTA_LINK =
  "group flex shrink-0 items-center gap-1.5 rounded-full bg-[#163F88] px-4 py-2 text-sm font-semibold text-white no-underline shadow-md transition-all duration-300 hover:bg-[#F7B500] hover:text-[#163F88] hover:shadow-lg";

const ChitPlans = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-6 md:px-8 pt-6 pb-4">
        <div className="flex items-center gap-4">
          
          <div>
            <h2 className="text-2xl font-bold text-blue-950">Chit Plans</h2>
            <div className={AMBER_BAR} />
          </div>
        </div>
        {/* <Link to="/policies" className={CTA_LINK}>
          Know More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link> */}
      </div>

      {/* Accordion */}
      <div className="border-t border-slate-100 divide-y divide-slate-100">
        {CHIT_PLANS.map(({ icon: Icon, title, subtitle, details }, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={title}
              className={`transition-colors duration-300 ${isOpen ? "bg-slate-50" : "hover:bg-slate-50"}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-4 px-6 md:px-8 py-4 text-left"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#163F88]" : "bg-[#EEF3FB]"}`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-white" : "text-[#163F88]"}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold text-sm ${isOpen ? "text-[#163F88]" : "text-blue-950"}`}
                  >
                    {title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {subtitle}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#163F88] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? "120px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="px-6 md:px-8 pb-5 ml-[60px]">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {details}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ChitPlans;
