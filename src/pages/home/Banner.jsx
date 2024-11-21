import { FaCcAmazonPay, FaShippingFast } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Banner = () => {
  // Hero section data for stats
  const heroStats = [
    {
      icon: <FaShippingFast />,
      title: "FREE SHIPPING",
      description: "BUY BDT 300+ & GET FREE DELIVERY",
    },
    {
      icon: <TbRefresh />,
      title: "7 DAYS EXCHANGE",
      description: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
    },
    {
      icon: <FaCcAmazonPay />,
      title: "100% SECURE PAYMENT",
      description: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-[500px]"
        style={{ backgroundImage: "url(/banner_image.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">
              Elevate Your Everyday Style
            </h1>
            <p className="mb-5">
              Discover the latest trends in sustainable fashion
            </p>
            <Link href="/#" className="flex justify-center">
              <span className="btn btn-md px-6 bg-primary text-white border-0 rounded-full">
                Shop Now
              </span>
              <span className="btn btn-md bg-primary text-white border-0 rounded-full">
                <BsArrowUpRight className="text-xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ backgroundImage: "url(/banner_image2.avif)" }}>
        <div className="bg-primary text-white bg-opacity-40">
          <div className="container mx-auto flex flex-col gap-8 md:flex-row justify-around p-4">
            {heroStats.map((stat, index) => (
              <div key={index} className="flex gap-3 items-center">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <h2 className="font-semibold text-md">{stat.title}</h2>
                  <p className="text-xs">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
