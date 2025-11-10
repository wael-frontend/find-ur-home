import Marquee from "react-fast-marquee";

export default function MarqSection() {
  const cards = [
    {
      image: "client1.jpg",
      name: "Jordan Lee",
      text: "Radiant made undercutting all competitors an absolute breeze.",
      date: "June 5, 2025",
    },
    {
      image: "client2.jpg",
      name: "John Doe",
      text: "Radiant made undercutting all competitors an absolute breeze.",
      date: "June 5, 2025",
    },
    {
      image: "client3.jpg",
      name: "Avery Johnson",
      text: "Radiant made undercutting all competitors an absolute breeze.",
      date: "May 10, 2025",
    },
    {
      image: "client4.jpg",
      name: "Briar Martin",
      text: "Radiant made undercutting all competitors an absolute breeze.",
      date: "April 20, 2025",
    },
  ];

  return (
    <div className="relative py-10 lg:px-32 overflow-hidden lg:max-w-[100%] ">
      {/* Mask Fade effect */}
      <div className="absolute inset-0 pointer-events-none fade-mask"></div>

      <Marquee speed={40}>
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[320px] h-[160px] bg-white shadow-md mx-5 rounded-2xl p-5 border border-gray-300"
          >
            <div className="flex gap-2">
              <img
                src={card.image}
                alt=""
                className="object-fill h-10 rounded-full"
              />
              <p className="font-semibold">{card.name}</p>
              <img
                src="Verified_badge.png"
                alt="verified"
                className="w-4 h-4 inline-block ml-1"
              />
            </div>{" "}
            <p className="text-sm text-gray-600 mt-2">{card.text}</p>
            <p className="text-xs text-gray-400 mt-4">{card.date}</p>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} direction="right">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[320px] h-[160px] bg-white shadow-md mx-5 rounded-2xl p-5 border border-gray-200 pb-2.5"
          >
            <div className="flex gap-1 text-center">
              <img
                src={card.image}
                alt=""
                className="object-fill h-10 rounded-full"
              />
              <p className="font-semibold">{card.name}</p>
              <img
                src="Verified_badge.png"
                alt="verified"
                className="w-4 h-4 inline-block ml-1"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{card.text}</p>
            <p className="text-xs text-gray-400 mt-4">{card.date}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
