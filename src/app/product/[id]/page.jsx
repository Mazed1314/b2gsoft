"use client";

import FeaturedProducts from "@/components/shared/FeaturedProducts";
import { useState } from "react";
import ReviewRating from "./ReviewRating";

const ProductPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("Details");

  console.log(params.id);

  return (
    <div className="md:w-11/12 mx-auto">
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
          <label htmlFor="details" className="tab-content p-10">
            Details
          </label>

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
          <label htmlFor="review" className="tab-content p-10">
            <ReviewRating />
          </label>

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
          <label htmlFor="discussion" className="tab-content p-10">
            Discussion
          </label>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mb-8">
        <FeaturedProducts title2={"Related Products"} />
      </div>
    </div>
  );
};

export default ProductPage;
