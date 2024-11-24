import Image from "next/image";
import Link from "next/link";
import summer_big_deal from "../../../public/summer_big_deal.json";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const SummerDeal = () => {
  return (
    <div className="px-4">
      <div className="my-6">
        <h2 className="text-lg text-primary">SUMMER</h2>
        <h2 className="font-bold text-3xl">Big Deal</h2>
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
        {summer_big_deal.map((product, index) => (
          <>
            <div className="min-w-[320px] relative rounded-md shadow-md p-2 bg-white flex flex-col justify-between gap-4">
              <span className="bg-primary p-3 text-center rounded-b-full w-12 text-white absolute top-0 right-2">
                UP To 40%
              </span>

              {/* Product Image */}
              <div className="bg-violet-50 rounded-md">
                <Image
                  alt={product.name}
                  src={product.img_src}
                  width={280}
                  height={320}
                />
              </div>

              {/* rating */}
              <div className="flex gap-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span>(30)</span>
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
      <div className="flex justify-center my-6">
        <button className="btn btn-sm bg-primary text-white hover:bg-white hover:text-primary">
          See more
        </button>
      </div>
    </div>
  );
};

export default SummerDeal;
