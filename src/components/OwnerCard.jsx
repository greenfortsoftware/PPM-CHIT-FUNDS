import { CircleCheck, Users, BadgeCheck, Target } from "lucide-react";

const OwnerCard = () => {
  return (
    <div className="w-full max-w-[380px] rounded-2xl bg-white/10 border border-white/20 p-6 text-white backdrop-blur-sm">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src="/images/owner.png"
          alt="Owner"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white object-cover flex-shrink-0"
        />

        <div>
          <p className="text-yellow-400 text-sm  font-medium">
            Managing Director
          </p>

          <h5 className="text-xl sm:text-2xl font-bold mt-1">
            Mr P. Murugesan
          </h5>

          <p className="text-yellow-400 text-sm mt-1">
            Shengai PPM Chits (P) Ltd
          </p>

          <p className="text-yellow-400 text-sm mt-2">+91 81437 35490</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-6"></div>

      {/* Highlights */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <CircleCheck size={20} className="text-yellow-400" />
          <span className="text-base sm:text-lg">29+ Years of Experience</span>
        </div>

        <div className="flex items-center gap-3">
          <Users size={20} className="text-yellow-400" />
          <span className="text-base sm:text-lg">2500+ Happy Customers</span>
        </div>

        <div className="flex items-center gap-3">
          <BadgeCheck size={20} className="text-yellow-400" />
          <span className="text-base sm:text-lg">
            10,000+ Active Chit Plans
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Target size={20} className="text-yellow-400" />
          <span className="text-base sm:text-lg">
            Trusted Across Tamil Nadu
          </span>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
