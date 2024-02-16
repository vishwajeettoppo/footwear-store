import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";
import React from "react";

const Services = () => {
  return (
    <section
      id="service"
      className=" max-container flex justify-center flex-wrap gap-10"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
