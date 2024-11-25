import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import ProductImageGallery from "./ProductImageGallery";

const ProductInfo = ({ product }) => {
  const { name, tag, price, rating, reviews, sizes, colors, images } = product;

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Handlers for quantity change
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col gap-4 lg:flex-row my-4 p-4">
      {/* Shopping Bag Indicator */}
      <div className="absolute hidden md:block right-0 top-40 text-center bg-primary text-white p-3 rounded-l-xl">
        <IoBagOutline className="text-2xl" />
        <span>Your Bag: 0</span>
      </div>

      {/* Product Images Section */}
      <div className="lg:w-1/2">
        <ProductImageGallery images={images} />
      </div>

      {/* Product Information Section */}
      <div className="lg:w-1/2 space-y-4">
        {/* Product Tag */}
        <button className="btn btn-sm bg-violet-950 text-white px-3">
          {tag}
        </button>

        {/* Product Name */}
        <h2 className="text-2xl">{name}</h2>

        {/* Rating and Reviews */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="rating flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating"
                  className={`mask mask-star-2 ${
                    index < Math.round(rating) ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                  disabled
                />
              ))}
            </div>
            <span>({rating})</span>
          </div>
          <span className="text-gray-500">{reviews} reviews</span>
        </div>

        {/* Product Price */}
        <h2 className="text-2xl font-semibold">BDT {price}</h2>

        <div className="divider"></div>

        {/* Available Sizes and Colors */}
        <div className="flex gap-3">
          {/* Sizes */}
          <div className="w-1/2 space-y-2">
            <h3>Available Size</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="btn btn-sm border px-2 py-1 hover:text-primary hover:border-primary rounded-md"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="w-1/2 space-y-2">
            <h3>Available Color</h3>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className={`${color} rounded-full border p-5 hover:border-primary`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Quantity */}
        <div className="space-y-2">
          <h3>Quantity</h3>
          <div className="join bg-violet-100 rounded-full">
            <button
              className="join-item btn"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="join-item btn">{quantity}</span>
            <button className="join-item btn" onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-2">
          <button className="btn btn-sm w-1/2 bg-primary text-white hover:bg-yellow-600">
            Buy Now
          </button>
          <button className="btn btn-sm w-1/2 bg-white text-primary hover:bg-yellow-600 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
