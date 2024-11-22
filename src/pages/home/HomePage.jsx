import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Discount from "./Discount";
import Collection from "./Collection";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      <div className="md:w-10/12 mx-auto ">
        {/* featured product */}
        <FeaturedProducts />
        {/* discount section */}
        <Discount />
        {/* male/female collection section */}
        <Collection />
        {/* summer big deal */}
      </div>
    </div>
  );
};

export default HomePage;
