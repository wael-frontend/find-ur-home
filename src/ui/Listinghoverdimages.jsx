import { useState } from "react";

export default function Listinghoverdimages() {
  const images = [
    { src: "/kitchen.png", title: "front view", text: "Escape into nature" },
    {
      src: "/Homeserv3.png",
      title: "Living Area",
      text: "Spacious interiors designed for comfort and style.",
    },
    {
      src: "/Housesrv1.png",
      title: "Bedroom",
      text: "Relax in calm minimalist spaces",
    },
    {
      src: "/kitchen.png",
      title: "Kitchen",
      text: "Modern design and functionality",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex  justify-center gap-4 overflow-hidden rounded-3xl mt-28  items-center lg:px-10">
      {images.map((img, i) => (
        <div
          key={i}
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(0)} // optional if you want none active on leave
          className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer ${
            activeIndex === i ? "flex-[5]" : "flex-[1]"
          }`}
        >
          <img
            src={img.src}
            alt={img.title}
            className={`w-full h-[400px] object-cover transition-all duration-700 ease-in-out ${
              activeIndex === i ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-bold">{img.title}</h2>
            <p className="text-sm">{img.text}</p>
          </div>
          <div
            className={`absolute inset-0 bg-black/40 transition-all duration-700 ${
              activeIndex === i ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
