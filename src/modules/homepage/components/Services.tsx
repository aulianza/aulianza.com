import { PiLaptopDuotone as ServiceIcon } from "react-icons/pi";

import { SERVICES } from "@/common/constant/services";

import ServicesItem from "./ServicesItem";

const Services = () => {
  const servicesData = SERVICES ?? [];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 px-3">
        <ServiceIcon size={24} />
        <h2 className="font-medium text-lg md:text-xl">Services</h2>
      </div>
      <div className="space-y-3" data-aos="fade-up" data-aos-duration="1000">
        {servicesData.map((service, index) => (
          <ServicesItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
