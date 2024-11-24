import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import featuredProducts from "../../../public/featuredProducts.json";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const FeaturedProducts = ({ title1, title2 }) => {
  //product data

  return (
    <div className="px-4">
      {/* Section Header */}

      <div className="my-6">
        <h2 className="text-primary">{title1}</h2>
        <h2 className="font-bold text-3xl">{title2}</h2>
      </div>
      <div className="flex gap-3 justify-end my-6">
        <button>
          {" "}
          <IoIosArrowRoundBack className="text-3xl text-primary rounded-full border border-primary hover:bg-primary hover:text-white" />
        </button>
        <button>
          <IoIosArrowRoundForward className="text-3xl text-primary rounded-full border border-primary hover:bg-primary hover:text-white" />
        </button>
      </div>

      <div className="flex gap-10 overflow-x-scroll">
        {featuredProducts.map((product) => (
          <>
            {/* Product Card */}
            <div className="min-w-[320px] rounded-md shadow-md p-4 bg-white flex flex-col justify-between gap-4">
              {/* Product Image */}
              <div className="bg-violet-50 rounded-md">
                <Image
                  alt={product.name}
                  src={product.img_src}
                  width={280}
                  height={320}
                />
              </div>

              {/* Product Details */}
              <div className="flex justify-between text-xs">
                <span>{product.name}</span>
                <span className="font-semibold">BDT: {product.price}</span>
              </div>

              {/* Add to Cart Button */}
              <Link
                href={`/product/${product._id}`}
                className="w-full border border-primary text-primary rounded-md hover:bg-primary hover:text-white py-2 text-center"
              >
                Add to Cart
              </Link>
            </div>
          </>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-sm bg-primary text-white hover:bg-white hover:text-primary">
          See more
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
