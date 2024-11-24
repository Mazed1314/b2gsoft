import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Discount from "./Discount";
import Collection from "./Collection";
import SummerDeal from "./SummerDeal";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      <div className="md:w-10/12 mx-auto ">
        {/* featured product */}
        <FeaturedProducts f_title={"New Arrivals"} />
        {/* discount section */}
        <Discount />
        {/* male/female collection section */}
        <Collection />
        {/* summer big deal */}
        <SummerDeal />
      </div>
    </div>
  );
};

export default HomePage;
