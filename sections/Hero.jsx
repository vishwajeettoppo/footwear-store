import Button from "@/components/Button";
import ShoeCard from "@/components/ShoeCard";
import Image from "next/image";
import React, { useState } from "react";
import { statistics, shoes } from "@/constants";
import { bigShoe1 } from "@/public/images";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innvation for
          your active life.
        </p>
        <Button label={"Shop now"} iconURL={"/icons/arrow-right.svg"} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className=" text-4xl font-palanquin font-bold">{item.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:max-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImage}
          alt="shoe collection"
          width={500}
          height={500}
          className=" object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[15%] max-sm:px-6">
          {shoes.map((item, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={item}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
