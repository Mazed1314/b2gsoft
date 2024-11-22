import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Collection = () => {
  const collection = [
    {
      img_src: "/fashion-for-men-removebg-preview.png",
      title: "Men Collection",
    },
    // {
    //   img_src: "/images-removebg-preview.png",
    //   title: "Women Collection",
    // },
  ];
  return (
    <div className="my-20">
      {collection.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-5 justify-center md:justify-between"
        >
          <div className="bg-violet-100 md:w-1/2 flex justify-center h-80 relative overflow-visible">
            <Image
              width={427}
              height={400}
              src={item.img_src}
              alt="img"
              className="absolute bottom-0"
            ></Image>
          </div>
          <div className="md:w-1/2 justify-center p-4 md:p-8 flex flex-col items-center md:items-start gap-3">
            <h2 className="text-3xl">{item.title}</h2>
            <Link href="/#" className="flex">
              <span className="btn btn-sm px-6 bg-primary text-white border-0 rounded-full">
                Shop Now
              </span>
              <span className="btn btn-sm bg-primary text-white border-0 rounded-full">
                <BsArrowUpRight className="text-xl" />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
