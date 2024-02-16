import Image from "next/image";
import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  function handleClick() {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe && `border-coral-red`
      } cursor-pointer  max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt=""
          height={200}
          width={200}
          className="object-conatin"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
