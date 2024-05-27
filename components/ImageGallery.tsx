import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import React from "react";

const ImageGallery = async () => {
  const client = createClient();
  const gallery = await client.getAllByType("gallery_images");
  const images = gallery[0].data.gallery_image;

  return (
    <div className="columns-1 break-inside-avoid md:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <div className="mb-2" key={index}>
          <PrismicNextImage field={image.img} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

function SingleImage({ source, altTxt }: { source: string; altTxt: string }) {
  return (
    <div className="relative">
      <Image src={source} alt={altTxt} fill className="object-cover " />
    </div>
  );
}

// function SingleImage({ source, altTxt }: { source: string; altTxt: string }) {
//   return (
//     <div className="aspect-h-1 aspect-w-1 relative">
//       <Image src={source} alt={altTxt} fill className="object-cover " />
//     </div>
//   );
// }
