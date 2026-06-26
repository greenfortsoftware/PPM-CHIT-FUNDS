const links = [
  "Premium Payment",
  "Policy Status",
  "Claim Intimation",
  "Loan on Policy",
  "Download Forms",
  "Calculate Maturity",
];

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="font-bold text-xl mb-5">Quick Links</h2>

      {links.map((item) => (
        <div key={item} className="border-b py-4">
          {item}
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
