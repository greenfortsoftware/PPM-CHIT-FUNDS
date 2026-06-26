const EnquiryForm = () => {
  return (
    <div className="bg-[#163F88] rounded-xl p-6 md:p-8 h-full">
      {/* Heading */}
      <h2 className="text-white text-3xl font-bold">Enquiry</h2>

      <p className="text-gray-300 text-sm mt-1">
        We will get back to you soon!
      </p>

      <div className="w-10 h-1 bg-yellow-400 rounded mt-2 mb-6"></div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#31528D] border border-[#4E6CA3] rounded-md px-4 py-3 text-white placeholder:text-gray-300 outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full bg-[#31528D] border border-[#4E6CA3] rounded-md px-4 py-3 text-white placeholder:text-gray-300 outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-[#31528D] border border-[#4E6CA3] rounded-md px-4 py-3 text-white placeholder:text-gray-300 outline-none"
        />

        <select className="w-full bg-[#31528D] border border-[#4E6CA3] rounded-md px-4 py-3 text-white outline-none">
          <option value="">Type of Enquiry</option>
          <option>ULIP</option>
          <option>ANNUITY</option>
          <option>TERM</option>
          <option>CHILD</option>
          <option>WHOLE LIFE</option>
          <option>MONEY BACK</option>
          <option>ENDOWMENT</option>
        </select>

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full bg-[#31528D] border border-[#4E6CA3] rounded-md px-4 py-3 text-white placeholder:text-gray-300 outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#F7B500] hover:bg-[#e6a800] text-black font-bold py-3 rounded-md transition"
        >
          SUBMIT ENQUIRY
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
