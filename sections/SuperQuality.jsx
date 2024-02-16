import Button from "@/components/Button";
import { shoe8 } from "@/public/images";
import Image from "next/image";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className=" flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:mwl font-bold">
          We Provide You
          <span className="  text-coral-red"> Super</span>
          <br />
          <span className="  text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium cofort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label={"View Details"} iconURL={""} />
        </div>
      </div>
      <div className="flex flex-1 justify-start items-center">
        <Image
          src={shoe8}
          alt=""
          width={600}
          height={600}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
