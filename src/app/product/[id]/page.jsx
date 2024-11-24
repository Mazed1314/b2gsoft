"use client";

import FeaturedProducts from "@/components/shared/FeaturedProducts";
import { useState } from "react";
import ReviewRating from "./ReviewRating";
import ProductInfo from "./ProductInfo";
import reviews from "../../../../public/reviews.json";

const ProductPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("Review");

  const product = {
    name: "White Hoodie",
    tag: "New Arrival",
    price: 2500,
    rating: 4.5,
    reviews: 121,
    sizes: ["S", "M", "L", "XL"],
    colors: ["bg-white", "bg-black"],
    images: [
      "/Product_details_images/casual-hoodie-clothes-posing58538-6985.avif",
      "/Product_details_images/portrait-young-handsome-model-man6971.avif",
      "/Product_details_images/White_Hoodie83.jfif",
      "/Product_details_images/White_Hoodie83creen.jpg",
    ],
  };

  return (
    <div className="relative">
      <div className="md:w-11/12 mx-auto">
        {/* Product info section */}
        <div className="">
          <ProductInfo product={product} />
        </div>

        {/* Details & Review Section */}
        <div className="my-4 p-2">
          {/* Tab Navigation */}
          <div role="tablist" className="tabs">
            {/* Details Tab */}
            <input
              type="radio"
              name="tabs"
              id="details"
              role="tab"
              className={`tab ${
                activeTab === "Details" ? "text-primary" : "text-black"
              }`}
              aria-label="Details"
              onClick={() => setActiveTab("Details")}
            />
            <div role="tabpanel" className="tab-content p-10">
              Details
            </div>

            {/* Review & Rating Tab */}
            <input
              type="radio"
              name="tabs"
              id="review"
              role="tab"
              className={`tab ${
                activeTab === "Review" ? "text-primary" : "text-black"
              }`}
              aria-label="Review & Rating"
              onClick={() => setActiveTab("Review")}
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-4">
              <ReviewRating reviews={reviews} />
            </div>

            {/* Discussion Tab */}
            <input
              type="radio"
              name="tabs"
              id="discussion"
              role="tab"
              className={`tab ${
                activeTab === "Discussion" ? "text-primary" : "text-black"
              }`}
              aria-label="Discussion"
              onClick={() => setActiveTab("Discussion")}
            />
            <label role="tabpanel" className="tab-content p-10">
              Discussion
            </label>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-8">
          <FeaturedProducts title2={"Related Products"} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
