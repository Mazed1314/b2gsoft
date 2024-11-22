import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  // Mock product data
  const featuredProducts = [
    {
      _id: "1",
      price: 99.99,
      name: "Wireless Headphones",
      img_src: "/OamuQa43OJH2zaDVR-removebg-preview.png",
    },
    {
      _id: "2",
      price: 49.99,
      name: "Bluetooth Speaker",
      img_src: "/OamuQa43OJH2zaDVR-removebg-preview.png",
    },
    {
      _id: "3",
      price: 29.99,
      name: "Portable Charger",
      img_src: "/OamuQa43OJH2zaDVR-removebg-preview.png",
    },
    {
      _id: "4",
      price: 19.99,
      name: "USB-C Cable",
      img_src: "/OamuQa43OJH2zaDVR-removebg-preview.png",
    },
    {
      _id: "5",
      price: 149.99,
      name: "Smartwatch",
      img_src: "/OamuQa43OJH2zaDVR-removebg-preview.png",
    },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="flex justify-between my-4">
        <div>
          <h2 className="text-primary">FEATURED PRODUCT</h2>
          <h2 className="font-semibold">New Arrivals</h2>
        </div>
        <div className="text-gray-500">Explore more categories</div>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-4">
        {featuredProducts.map((product) => (
          <div
            key={product._id}
            className="w-[320px] rounded-md shadow-md p-4 bg-white flex flex-col gap-4"
          >
            {/* Product Image */}
            <div className="bg-violet-50 rounded-md">
              <Image
                alt={product.name}
                src={product.img_src}
                width={280}
                height={320}
              />
            </div>

            {/* Product Details */}
            <div className="flex justify-between text-xs">
              <span>{product.name}</span>
              <span className="font-semibold">BDT: {product.price}</span>
            </div>

            {/* Add to Cart Button */}
            <Link
              href={`/product/${product._id}`}
              className="w-full border border-primary text-primary rounded-md hover:bg-primary hover:text-white py-2 text-center"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-sm bg-primary text-white hover:bg-white hover:text-primary">
          See more
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
