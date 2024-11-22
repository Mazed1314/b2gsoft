import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Discount from "./Discount";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* featured product */}
      <FeaturedProducts />
      {/* discount section */}
      <Discount />
      {/* male/female collection section */}
      {/* summer big deal */}
    </div>
  );
};

export default HomePage;
