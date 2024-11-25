"use client";

import React from "react";
import featuredProducts from "../../../public/featuredProducts.json";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedProducts = ({ title1, title2 }) => {
  return (
    <section className="w-full p-2 mt-8 mb-12">
      {/* Section Header */}
      <header className="text-start my-6">
        <h2 className="text-primary text-xl">{title1}</h2>
        <h3 className="text-3xl font-bold">{title2}</h3>
      </header>

      {/* Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        opts={{ align: "start", loop: true }}
        className="relative"
      >
        {/* Navigation Controls */}
        <div className="flex justify-end gap-2 mb-4 absolute -top-8 right-12 z-10">
          <CarouselPrevious className="text-3xl text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300" />
          <CarouselNext className="text-3xl mr-6 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300" />
        </div>

        {/* Carousel Content */}
        <CarouselContent>
          {featuredProducts.map((product, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <button className="btn btn-primary btn-sm">See More</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
