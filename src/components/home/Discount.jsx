import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Discount = () => {
  return (
    <div className="my-8 bg-violet-100 mx-4 md:mx-0">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-4 justify-between rounded">
        <div className="p-6 md:p-0 flex flex-col md:w-7/12 items-center md:items-start gap-3 justify-center">
          <h3 className="text-primary text-lg font_pacifico">Big Deal</h3>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            <span className="text-primary text-center">30%</span>Off for New
            Customers
          </h2>
          <Link href="/#" className="flex gap-1">
            <span className="btn btn-sm px-6 bg-primary text-white border-0 rounded-full">
              Shop Now
            </span>
            <span className="btn btn-sm bg-primary text-white border-0 rounded-full">
              <BsArrowUpRight className="text-xl" />
            </span>
          </Link>
        </div>

        <div className="flex justify-center pt-2 md:w-5/12">
          <Image
            width={425}
            height={460}
            src={"/beautiful-girl-handsome-boy-preview.png"}
            alt="img"
            className="w-full h-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Discount;
