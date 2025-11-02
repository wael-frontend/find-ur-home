import { useState } from "react";

const Texte = [
  {
    title: "Lightning-Fast Booking",
    texts: "Designed for speed — instant search and seamless property viewing.",
  },
  {
    title: "Fully Customizable Homes",
    texts:
      "Easily change layouts, features, and designs to fit your lifestyle.",
  },
  {
    title: "Responsive by Location",
    texts: "Every property is accessible by area — no extra effort required.",
  },
  {
    title: "Real Estate Powered",
    texts:
      "Backed using trusted property data — no extra agents or steps needed.",
  },
  {
    title: "Smart Home Support",
    texts: "All houses come ready with modern smart living features included.",
  },
];

export default function Droptext() {
  const [dropOpen, setDropOpen] = useState(null);

  return (
    <div className="w-full h-screen  text-amber-50 p-4 ">
      {Texte.map((item, index) => (
        <div key={index} className="mb-2 py-1">
          <button
            className="w-[100%] flex justify-between text-left p-2 bg-[#fef8e1] text-[#33322d] rounded-2xl "
            onClick={() => setDropOpen(dropOpen === index ? null : index)}
          >
            {item.title} <img src="dropdown.png" className="w-8" />
          </button>
          {dropOpen === index && (
            <p className="p-2 text-[#6c7f9c] ">{item.texts}</p>
          )}
        </div>
      ))}
    </div>
  );
}
