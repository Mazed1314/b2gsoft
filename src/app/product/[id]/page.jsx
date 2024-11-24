"use client";
import FeaturedProducts from "@/components/shared/FeaturedProducts";
import { useState } from "react";
import ReviewRating from "./ReviewRating";

const page = ({ params }) => {
  const [activeTab, setActiveTab] = useState("Details");
  console.log(params.id);
  return (
    <div className="md:w-11/12 mx-auto">
      {/* details / review  section */}
      <div className="my-4 p-2">
        <div role="tablist" className="tabs">
          {/* Details Tab */}
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="details"
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
            name="my_tabs_1"
            role="tab"
            id="review"
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
            name="my_tabs_1"
            role="tab"
            id="discussion"
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
      {/* related products section */}
      <div className="mb-8">
        <FeaturedProducts title2={"Related Products"} />
      </div>
    </div>
  );
};

export default page;
