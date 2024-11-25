import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";

const SummerProductCard = ({ product }) => {
  return (
    <div className="px-4">
      <Card>
        <CardContent className="rounded-md shadow-md p-4 bg-white flex flex-col justify-between gap-4 relative">
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
              className="w-full h-60"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default SummerProductCard;
