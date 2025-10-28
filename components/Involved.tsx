

// mobile(without responsive )
"use client";

import React, { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Become a Sponsor",
    description: "Partner with us to shape the future of AI innovation.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScvtPBj8e9o1v2s7heNDGGW_iz2AwCQB_FKBqEv2OKITxcyzg/viewform",
    icon: "/assets/images/svg01.svg",
  },
  {
    id: 2,
    title: "Become a Speaker",
    description: "Share your expertise and insights with the AI community.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfAZZpitA5SliZ1ivPH0PmQled6eyuyaHUnKLIY5TP1YXjRIQ/viewform",
    icon: "/assets/images/svg02.svg",
  },
  {
    id: 3,
    title: "Become an Exhibitor",
    description: "Showcase your AI solutions and connect with industry leaders.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",
    icon: "/assets/images/svg03.svg",
  },
  {
    id: 4,
    title: "Join as Volunteer",
    description: "Be part of the organizing team and gain valuable experience.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
    icon: "/assets/images/svg04.svg",
  },
];

function Involved() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      console.log("isMobile:", mobile); // Debugging log
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .scroll-container > div {
          scroll-snap-align: start;
        }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between mb-12" style={{fontFamily:"Plus Jakarta Sans"}}>
        <div className="flex-1">
          <h2
            className={`font-plusJakartaSans font-semibold leading-[63.41px] tracking-[0px]`}
            style={{
              fontSize: isMobile ? "40px" : "57.21px",
              color: "#202020",
            }}
          >
            Get Involved
          </h2>

          <p
            className="mt-4 font-plusJakartaSans font-light"
            style={{
              fontSize: isMobile ? "18px" : "28px",
              lineHeight: isMobile ? "22px" : "36px",
              color: "#202020",
            }}
          >
            Be part of Kerala&apos;s biggest AI & Technology Conclave and connect with
            <br />
            innovators, leaders, and enthusiasts from across the country
          </p>
        </div>
        {!isMobile && (
          <img
            src="/assets/images/img_icon2.svg"
            alt="Decorative icons"
            className="h-8 w-35"
          />
        )}
      </div>

      {/* ---------------- Desktop View ---------------- */}
      {!isMobile && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const isActiveOrHovered = hoveredCard === card.id;
            const rectangle = isActiveOrHovered
            ? "/assets/images/rectangle_green.svg"
            : "/assets/images/rectangle_blue.svg";
            const arrow = isActiveOrHovered
              ? "/assets/images/arrow_icon_green.svg"
              : "/assets/images/arrow_icon_blue.svg";

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="flex h-full flex-col justify-between rounded-3xl border p-8 shadow-sm transition cursor-pointer hover:shadow-lg"
                style={{
                  borderColor: "#000",
                  backgroundColor: isActiveOrHovered ? "#1E90FF" : "#FFFFFF",
                  color: isActiveOrHovered ? "#FFFFFF" : "#202020",
                }}
              >
                
                <div>
                  <div className="relative inline-block">
                    <div
                      className="h-12 w-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: isActiveOrHovered ? "#9CF694" : "#2E96F5",
                      }}
                    ></div>
                    <img
                    src={card.icon}
                    style={{
                      filter: isActiveOrHovered ? "none" : "brightness(0) invert(1)",
                    }}
                    alt={card.title}
                    className="absolute inset-0 m-auto h-6 w-6"
                  />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3">{card.description}</p>
                </div>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-end font-semibold no-underline"
                  style={{
                    color: isActiveOrHovered ? "#FFFFFF" : "black",
                  }}
                >
                  <span className="mr-6">Apply Now</span>
                  <img src={arrow} alt="Arrow icon" />
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* ---------------- Mobile View ---------------- */}
      {isMobile && (
  <div className="w-full max-w-[300px] mx-auto overflow-hidden px-0">
    <div
      className="scroll-container flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      {cards.map((card) => {
        const isHovered = hoveredCard === card.id;
        const arrow = isHovered
          ? "/assets/images/arrow_icon_green.svg"
          : "/assets/images/arrow_icon_blue.svg";

        return (
          <div
            key={card.id}
            onTouchStart={() => setHoveredCard(card.id)}
            onTouchEnd={() => setHoveredCard(null)}
            className={`snap-start flex-shrink-0 w-[60%] sm:w-[300px] flex flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
              isHovered ? "bg-blue-600 text-white" : "bg-white text-gray-900"
            }`}
            style={{
              borderColor: "#000",
            }}
          >
            <div>
              <div
                className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  isHovered ? "bg-green-300" : "bg-blue-500"
                }`}
              ></div>

              <h3 className="mt-6 text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-base">{card.description}</p>
            </div>

            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-end font-semibold no-underline"
            >
              <span className="mr-4 text-base">Apply Now</span>
              <img src={arrow} alt="Arrow icon" className="h-6 w-6" />
            </a>
          </div>
        );
      })}
    </div>
  </div>
)}










    </section>
  );
}

export default Involved;



// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const cards = [
//   {
//     id: 1,
//     title: "Become a Sponsor",
//     description: "Partner with us to shape the future of AI innovation.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLScvtPBj8e9o1v2s7heNDGGW_iz2AwCQB_FKBqEv2OKITxcyzg/viewform",
//   },
//   {
//     id: 2,
//     title: "Become a Speaker",
//     description: "Share your expertise and insights with the AI community.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSfAZZpitA5SliZ1ivPH0PmQled6eyuyaHUnKLIY5TP1YXjRIQ/viewform",
//   },
//   {
//     id: 3,
//     title: "Become an Exhibitor",
//     description: "Showcase your AI solutions and connect with industry leaders.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",
//   },
//   {
//     id: 4,
//     title: "Join as Volunteer",
//     description: "Be part of the organizing team and gain valuable experience.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
//   },
// ];

// const Involved: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-12">
//         <div className="flex-1">
//           <h2
//             className="font-plusJakartaSans font-semibold tracking-tight"
//             style={{
//               fontSize: isMobile ? "40px" : "57.21px",
//               color: "#202020",
//               lineHeight: isMobile ? "44px" : "63.41px",
//             }}
//           >
//             Get Involved
//           </h2>

//           <p
//             className="mt-4 font-plusJakartaSans font-light"
//             style={{
//               fontSize: isMobile ? "18px" : "28px",
//               lineHeight: isMobile ? "22px" : "36px",
//               color: "#202020",
//             }}
//           >
//             Be part of Kerala&apos;s biggest AI & Technology Conclave and connect with{" "}
//             innovators, leaders, and enthusiasts from across the country.
//           </p>
//         </div>

//         {!isMobile && (
//           <Image
//             src="/assets/images/img_icon2.svg"
//             alt="Decorative icon"
//             width={60}
//             height={60}
//           />
//         )}
//       </div>

//       {/* Desktop Grid */}
//       {!isMobile && (
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {cards.map((card) => {
//             const isActive = hoveredCard === card.id;
//             const arrow = isActive
//               ? "/assets/images/arrow_icon_green.svg"
//               : "/assets/images/arrow_icon_blue.svg";

//             return (
//               <div
//                 key={card.id}
//                 onMouseEnter={() => setHoveredCard(card.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 className={`flex flex-col justify-between rounded-3xl border p-8 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-lg ${
//                   isActive ? "bg-blue-600 text-white" : "bg-white text-gray-900"
//                 }`}
//                 style={{ borderColor: "#000" }}
//               >
//                 <div>
//                   <div
//                     className={`h-12 w-12 rounded-lg flex items-center justify-center ${
//                       isActive ? "bg-green-300" : "bg-blue-500"
//                     }`}
//                   ></div>

//                   <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>
//                   <p className="mt-3">{card.description}</p>
//                 </div>

//                 <a
//                   href={card.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 flex items-center justify-end font-semibold no-underline"
//                 >
//                   <span className="mr-4">Apply Now</span>
//                   <Image src={arrow} alt="Arrow icon" width={24} height={24} />
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* Mobile Horizontal Scroll */}
//       {isMobile && (
//         <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
//           {cards.map((card) => {
//             const isHovered = hoveredCard === card.id;
//             const arrow = isHovered
//               ? "/assets/images/arrow_icon_green.svg"
//               : "/assets/images/arrow_icon_blue.svg";

//             return (
//               <div
//                 key={card.id}
//                 onTouchStart={() => setHoveredCard(card.id)}
//                 onTouchEnd={() => setHoveredCard(null)}
//                  className={`snap-center flex-shrink-0 w-[40%] sm:w-[300px] flex flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
//                   isHovered ? "bg-blue-600 text-white" : "bg-white text-gray-900"
//                 }`}
//                 style={{ borderColor: "#000" }}
//               >
//                 <div>
//                   <div
//                     className={`h-10 w-10 rounded-lg flex items-center justify-center ${
//                       isHovered ? "bg-green-300" : "bg-blue-500"
//                     }`}
//                   ></div>

//                   <h3 className="mt-6 text-lg font-bold">{card.title}</h3>
//                   <p className="mt-2 text-base">{card.description}</p>
//                 </div>

//                 <a
//                   href={card.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 flex items-center justify-end font-semibold no-underline"
//                 >
//                   <span className="mr-4 text-base">Apply Now</span>
//                   <Image src={arrow} alt="Arrow icon" width={20} height={20} />
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Involved;

