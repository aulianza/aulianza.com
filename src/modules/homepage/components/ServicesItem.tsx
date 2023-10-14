import clsx from "clsx";

import Image from "@/common/components/Image";
import { ServicesProps } from "@/common/types/services";

const ServicesItem = ({
  title,
  description,
  icon,
  className,
}: ServicesProps) => {
  const bgImage = "url('/images/bg-gradient-1.svg')";

  return (
    <div
      className={clsx(
        "grid grid-flow-col justify-between items-center gap-x-6 bg-white bg-no-repeat bg-right bg-contain",
        "border py-5 px-6 rounded-xl",
        "transition-all duration-300",
      )}
      style={{ backgroundImage: bgImage }}
    >
      <Image src={icon} alt={title} width={40} height={40} />
      <div className={clsx("space-y-1", className)}>
        <h5 className="text-base md:text-lg font-medium">{title}</h5>
        <p className="text-neutral-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
