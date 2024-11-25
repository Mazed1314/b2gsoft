import React from "react";
import Banner from "../components/home/Banner";
import Discount from "../components/home/Discount";
import Collection from "../components/home/Collection";
import SummerDeal from "../components/home/SummerDeal";
import FeaturedProducts from "@/components/shared/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      <div className="md:w-11/12 mx-auto">
        {/* featured product */}
        <FeaturedProducts title1={"FEATURED PRODUCT"} title2={"New Arrivals"} />
        {/* discount section */}
        <Discount />
        {/* male/female collection section */}
        <Collection />
        {/* summer big deal */}
        <SummerDeal title1={"SUMMER"} title2={"Big Deal"} />
      </div>
    </div>
  );
};

export default HomePage;
