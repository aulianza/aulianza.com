import Link from "next/link";
import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";
import { PiChatCircleTextDuotone as SessionIcon } from "react-icons/pi";

const ChitChat = () => {
  return (
    <section>
      <div
        className="flex items-center gap-2 px-3"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        <SessionIcon size={24} />
        <h2 className="font-medium text-neutral-600">Free Session</h2>
      </div>
      <Link
        href="https://cal.com/aulianza/schedule"
        target="_blank"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="flex flex-col space-y-5 bg-neutral-900 text-white rounded-xl py-5 px-6 cursor-pointer hover:scale-[101%] hover:shadow-sm transition-all duration-300"
      >
        <div className="flex gap-5 items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-base md:text-lg font-medium">
              <span>1 on 1 Chit-chat Session</span>
            </div>
            <p className="text-neutral-400 text-sm md:text-base">
              Let’s find some time to talk about anything!{" "}
            </p>
          </div>
          <div className="p-3 border-2 border-neutral-500 text-neutral-300 rounded-full">
            <FiCalendar size={20} />
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
    </section>
  );
};

export default ChitChat;
