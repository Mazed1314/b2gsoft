import React from "react";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/shared/FeaturedProducts";
import Discount from "../components/home/Discount";
import Collection from "../components/home/Collection";
import SummerDeal from "./home/SummerDeal";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      <div className="md:w-10/12 mx-auto">
        {/* featured product */}
        <FeaturedProducts title1={"FEATURED PRODUCT"} title2={"New Arrivals"} />
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
