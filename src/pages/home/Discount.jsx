import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Discount = () => {
  return (
    <div className="md:w-10/12 mx-auto my-6">
      <div className="bg-violet-100 flex flex-col md:flex-row gap-6 justify-between">
        <div className="p-4 md:p-8 flex flex-col items-center md:items-start gap-3 justify-center">
          <h3 className="text-primary font-Pacifico">Big Deal</h3>
          <h2 className="text-3xl">
            <span className="text-primary">30%</span>Off for New Customers
          </h2>
          <Link href="/#" className="flex">
            <span className="btn btn-sm px-6 bg-primary text-white border-0 rounded-full">
              Shop Now
            </span>
            <span className="btn btn-sm bg-primary text-white border-0 rounded-full">
              <BsArrowUpRight className="text-xl" />
            </span>
          </Link>
        </div>
        <div className="">
          <Image
            width={427}
            height={495}
            src={"/cheerful-couple-sunglasses-1024x768-removebg-preview.png"}
            alt="img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Discount;
