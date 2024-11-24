import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineThumbUp } from "react-icons/hi";

const ReviewRating = ({ reviews }) => {
  const [filter, setFilter] = useState("all");

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, item) => sum + item.rating, 0) / totalReviews;

  const filteredReviews =
    filter === "new"
      ? [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date))
      : reviews;

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8">
      {/* Reviews Section */}
      <div className="lg:w-8/12">
        {/* Filter Dropdown */}
        <div className="mb-6">
          <select
            name="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="all">All Reviews</option>
            <option value="new">Newest First</option>
          </select>
        </div>

        {/* Review List */}
        {filteredReviews.slice(0, 2).map((review, index) => (
          <div
            key={index}
            className="space-y-3 border-b p-4 rounded-lg shadow-md"
          >
            <div className="flex gap-4">
              <Image
                src={review.user_img}
                alt={`${review.user_name}'s avatar`}
                width={48}
                height={48}
                className="object-cover w-12 h-12 rounded-full border"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <h4 className="font-bold">{review.user_name}</h4>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="rating flex gap-1">
                  {Array.from({ length: 5 }).map((idx) => (
                    <>
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-yellow-400"
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 px-2">{review.comment}</p>
            <div className="flex items-center gap-1 text-gray-700">
              <HiOutlineThumbUp className="text-xl" />
              <span>{review.like}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Rating Summary Section */}
      <div className="lg:w-4/12 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Product Review</h2>
          <span className="text-gray-500">{totalReviews} reviews</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="rating flex gap-1">
            {Array.from({ length: 5 }).map((idx) => (
              <>
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </>
            ))}
          </div>
          <span>({averageRating.toFixed(1)})</span>
        </div>
        <div className="divider" />

        {/* Ratings Breakdown */}
        {[5, 4, 3, 2, 1].map((star) => {
          const count = reviews.filter((r) => r.rating === star).length;
          const percentage = (count / totalReviews) * 100;

          return (
            <div key={star} className="flex items-center gap-4">
              <span className="w-4 text-sm">{star}</span>
              <progress
                className="progress progress-warning w-full"
                value={percentage}
                max="100"
              />
              <span className="text-sm">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewRating;
