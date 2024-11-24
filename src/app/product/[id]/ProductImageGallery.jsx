import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const ProductImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image with Zoom */}
      <div className="w-full max-w-lg mb-6">
        <Zoom>
          <Image
            width={200}
            height={200}
            src={activeImage}
            alt="Product Image"
            className="rounded-lg shadow-lg w-[400px] h-[400px]"
          ></Image>
        </Zoom>
      </div>
      {/* Other image */}
      <div className="flex gap-8 justify-start">
        {images.map((image, index) => (
          <div key={index} className="">
            <Image
              width={200}
              height={200}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer rounded-lg w-20 h-20 ${
                activeImage === image
                  ? "border-2 border-primary"
                  : "border border-gray-300"
              }`}
              onClick={() => setActiveImage(image)}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
