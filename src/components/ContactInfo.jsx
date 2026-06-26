import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const CONTACT_COLUMNS = [
  {
    heading: "Call Us",
    icon: Phone,
    lines: ["+91 94437 35490", "+91 9788862013, +91 9443862790."],
    note: "Mon–Sat (10AM – 6PM)",
  },
  {
    heading: "WhatsApp",
    icon: MessageCircle,
    lines: ["+91 94437 35490"],
    note: "Chat with us",
  },
  {
    heading: "Email Us",
    icon: Mail,
    lines: ["shengaippmchits@gmail.com"],
    note: "Reply within 24 hrs",
  },
  {
    heading: "Office Address",
    icon: MapPin,
    lines: [
      "57/2, Vaniyar Street ( Upstairs )",
      "gandhi road Shencottah - 627809",
      "Tenkasi (dt) -Tamilnadu",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#1A3A6B] px-6 py-6 text-white md:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_COLUMNS.map(({ heading, icon: Icon, lines, note }) => (
          <div key={heading}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-400">
              {heading}
            </h3>
            <div className="mt-1 h-0.5 w-8 bg-amber-400" />

            <div className="mt-2 flex items-start gap-2.5">
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-200"
                strokeWidth={2}
              />
              <div className="text-sm leading-tight text-white">
                {lines.map((line) => (
                  <p className="mb-1" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {note && <p className="mt-1.5 text-sm text-blue-300">{note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
