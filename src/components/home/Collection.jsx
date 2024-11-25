"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";

const Collection = () => {
  const collection = [
    {
      img_src: "/fashion-for-men-removebg-preview.png",
      title: "Men Collection",
    },
    {
      img_src: "/images-removebg-preview.png",
      title: "Women Collection",
    },
  ];
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      opts={{ align: "start", loop: true }}
      className="relative"
    >
      {/* Carousel Content */}
      <CarouselContent>
        {collection.map((item, index) => (
          <CarouselItem key={index} className="w-full px-2">
            <Card className="border-0 shadow-none">
              <CardContent>
                <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between my-20">
                  <div className="bg-violet-100 md:w-1/2 flex justify-center h-80 relative overflow-visible">
                    <Image
                      width={427}
                      height={400}
                      src={item.img_src}
                      alt="img"
                      className="absolute bottom-0 w-96 h-96"
                    ></Image>
                  </div>
                  <div className="md:w-1/2 justify-center p-4 md:p-8 flex flex-col items-center md:items-start gap-3">
                    <h2 className="text-3xl">{item.title}</h2>
                    <Link href="/#" className="flex gap-1">
                      <span className="btn btn-sm px-6 bg-primary text-white border-0 rounded-full">
                        Shop Now
                      </span>
                      <span className="btn btn-sm bg-primary text-white border-0 rounded-full">
                        <BsArrowUpRight className="text-xl" />
                      </span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Collection;
