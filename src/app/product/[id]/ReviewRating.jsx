import Image from "next/image";
import React from "react";
import { HiOutlineThumbUp } from "react-icons/hi";

const ReviewRating = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* public review */}
      <div className="lg:w-8/12">
        {/* filtering */}
        <div className="mb-4">
          <select
            name="type"
            value={"filter"}
            className="border p-2 rounded-md"
          >
            <option value="all">All</option>
            <option value="new">Newest</option>
          </select>
        </div>
        {/* review */}
        <div className="space-y-3 border-b p-2">
          <div className="flex space-x-4">
            <Image
              width={48}
              height={48}
              src="/fashion-for-men-removebg-preview.png"
              alt="img"
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            ></Image>
            <div>
              <div className="flex gap-2">
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs mt-1">2 days ago</span>
              </div>
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-600 px-2">Very nice</p>
          <p className="flex gap-1">
            <HiOutlineThumbUp className="text-xl" />
            <span>10</span>
          </p>
        </div>
      </div>
      {/* ratings */}
      <div className="lg:w-4/12 space-y-3">
        <div className="flex gap-2">
          <h2>Product Review</h2>
          <span className="text-gray-600">121 reviews</span>
        </div>
        <div className="flex gap-5 justify-between my-4">
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-yellow-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-yellow-400"
            />
          </div>
          <span>(4.0)</span>
        </div>
        <div className="divider"></div>

        <div>
          <p>
            <span>5</span>{" "}
            <progress
              className="progress progress-warning w-56"
              value={45}
              max="100"
            ></progress>
            <span> 50</span>
          </p>
          <p>
            <span>4</span>{" "}
            <progress
              className="progress progress-warning w-56"
              value={55}
              max="100"
            ></progress>
            <span> 60</span>
          </p>
          <p>
            <span>3</span>{" "}
            <progress
              className="progress progress-warning w-56"
              value={33}
              max="100"
            ></progress>
            <span> 22</span>
          </p>
          <p>
            <span>2</span>{" "}
            <progress
              className="progress progress-warning w-56"
              value={22}
              max="100"
            ></progress>
            <span> 12</span>
          </p>
          <p>
            <span>1</span>{" "}
            <progress
              className="progress progress-warning w-56"
              value={10}
              max="100"
            ></progress>
            <span> 2</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewRating;
