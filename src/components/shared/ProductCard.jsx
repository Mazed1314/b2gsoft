import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";

const ProductCard = ({ product }) => {
  //   const { _id, name, img_src, price } = product;
  return (
    <Card>
      <CardContent className="rounded-md shadow-md p-4 bg-white flex flex-col justify-between gap-4">
        <div className="bg-violet-50 rounded-md">
          <Image
            alt={product.name}
            src={product.img_src}
            width={280}
            height={320}
            className="w-full h-[300px]"
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
          View Details
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
