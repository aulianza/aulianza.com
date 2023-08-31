import Link from "next/link";
import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";

const ChitChat = () => {
  return (
    <Link
      href="https://cal.com/aulianza/schedule"
      target="_blank"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex flex-col space-y-5 bg-neutral-900 text-white rounded-2xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300"
    >
      <div className="flex gap-5 items-start justify-between">
        <div className="space-y-1">
          <div className="text-base md:text-lg font-medium">
            1 on 1 Chit-chat Session
          </div>
          <p className="text-neutral-400 text-sm md:text-base">
            Let’s find some time to talk about anything!{" "}
          </p>
        </div>
        <div className="p-3 border-2 border-neutral-500 text-neutral-300 rounded-full">
          <FiCalendar size={22} />
        </div>
      </div>
      <div className="flex gap-5 text-neutral-200 text-sm">
        <div className="flex items-center gap-2">
          <FiClock size={18} />
          <span>30 Minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <FiVideo size={18} />
          <span>Google Meet</span>
        </div>
      </div>
    </Link>
  );
};

export default ChitChat;
