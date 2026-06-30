import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* <div className="bg-blue-900 text-white py-2 px-10 flex justify-end gap-10 text-sm">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+91 81437 35490</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>customer.services@licindia.com</span>
        </div>
      </div> */}

      <div className="bg-blue-900 text-white px-3 py-2">
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 94437 35490</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span><a href="mailto:shengaippmchits@gmail.com" className="text-decoration-none text-white">shengaippmchits@gmail.com</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
