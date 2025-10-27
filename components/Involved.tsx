// // good


// "use client";

// import React, { useEffect, useState } from "react";

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
//     description:
//       "Showcase your AI solutions and connect with industry leaders.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",

//   },
//   {
//     id: 4,
//     title: "Join as Volunteer",
//     description: "Be part of the organizing team and gain valuable experience.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
 
//   },
// ];

// function Involved() {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-12">
//         <div className="flex-1">
//           <h2
//             className="font-semibold"
//             style={{ fontSize: isMobile ? "40px" : "60px", color: "#202020" }}
//           >
//             Get Involved
//           </h2>
//           <p
//             className="mt-4 font-light"
//             style={{
//               fontSize: isMobile ? "18px" : "28px",
//               lineHeight: isMobile ? "22px" : "36px",
//               color: "#4B5563",
//             }}
//           >
//             Be part of Keralas biggest AI & Technology Conclave and connect with
//             <br />
//             innovators, leaders, and enthuisasts from across the country
//           </p>
//         </div>
//         {!isMobile && (
//           <img
//             src="/assets/images/img_icon2.svg"
//             alt="Decorative icons"
//             className="h-8"
//           />
//         )}
//       </div>

//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//   {cards.map((card) => {
//     const isActive = activeCard === card.id;

//     // keep only the arrow logic
//     const arrow = isActive
//       ? "/assets/images/arrow_icon_green.svg"
//       : "/assets/images/arrow_icon_blue.svg";

//     return (
//       <div
//         key={card.id}
//         onClick={() => setActiveCard(card.id)}
//         className="flex h-full flex-col justify-between rounded-3xl border p-8 shadow-sm transition hover:shadow-lg cursor-pointer"
//         style={{
//           borderColor: "#000",
//           backgroundColor: isActive ? "#1E90FF" : "#FFFFFF",
//           color: isActive ? "#FFFFFF" : "#202020",
//         }}
//       >
//         <div>
//           {/* Colored div instead of rectangle at the top */}
//           <div className="relative inline-block">
//             <div
//               className="h-12 w-12 rounded-lg flex items-center justify-center"
//               style={{
//                 backgroundColor: isActive ? "#9CF694" : "#2E96F5",
//               }}
//             >
//             </div>
//           </div>

//           <h3
//             className="mt-8 text-2xl font-bold"
//             style={{ fontSize: isMobile ? "20px" : "24px" }}
//           >
//             {card.title}
//           </h3>
//           <p
//             className="mt-3"
//             style={{
//               fontSize: isMobile ? "14px" : "16px",
//               lineHeight: "22px",
//             }}
//           >
//             {card.description}
//           </p>
//         </div>
//         {/* <div className="items-end justify-end"> */}
//         <a
//           href={card.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 flex items-center justify-end font-semibold no-underline"
//           style={{
//             fontSize: isMobile ? "14px" : "16px",
//             color: isActive ? "#FFFFFF" : "black",
//           }}
//         >
           
//           <span className="mr-6">Apply Now</span>
//           <img
//             src={arrow}
//             alt="Arrow icon"
//             style={{
//               height: isMobile ? "40px" : "56px",
//               width: isMobile ? "48px" : "64px",
//             }}
//           />
        
//         </a>
//         {/* </div> */}
//       </div>
//     );
//   })}
// </div>

//     </section>
//   );
// }

// export default Involved;







// "use client";

// import React, { useEffect, useState } from "react";

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
//     description:
//       "Showcase your AI solutions and connect with industry leaders.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",

//   },
//   {
//     id: 4,
//     title: "Join as Volunteer",
//     description: "Be part of the organizing team and gain valuable experience.",
//     link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
 
//   },
// ];

// function Involved() {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);


//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-12">
//         <div className="flex-1">
//         <h2
//   className={`font-plusJakartaSans font-semibold leading-[63.41px] tracking-[0px]`}
//   style={{ 
//     fontSize: isMobile ? "40px" : "57.21px", // responsive font size
//     color: "#202020"
//   }}
// >
//   Get Involved
// </h2>

//           <p
//             className="mt-4 font-plusJakartaSans font-light"
//             style={{
//               fontSize: isMobile ? "18px" : "28px",
//               lineHeight: isMobile ? "22px" : "36px",
//               color: "#202020",
//             }}
//           >
//             Be part of Keralas biggest AI & Technology Conclave and connect with
//             <br />
//             innovators, leaders, and enthuisasts from across the country
//           </p>
//         </div>
//         {!isMobile && (
//           <img
//             src="/assets/images/img_icon2.svg"
//             alt="Decorative icons"
//             className="h-8"
//           />
//         )}
//       </div>

//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//   {cards.map((card) => {
//   const isActive = activeCard === card.id;
//   const isActiveOrHovered = isActive || hoveredCard === card.id;
  
//   const arrow = isActiveOrHovered
//     ? "/assets/images/arrow_icon_green.svg"
//     : "/assets/images/arrow_icon_blue.svg";

//     return (
//       <div
//       key={card.id}
//       onClick={() => setActiveCard(card.id)}
//       onMouseEnter={() => setHoveredCard(card.id)}
//       onMouseLeave={() => setHoveredCard(null)}
//       className="flex h-full flex-col justify-between rounded-3xl border p-8 shadow-sm transition cursor-pointer hover:shadow-lg"
//       style={{
//         borderColor: "#000",
//         backgroundColor:
//           card.id === activeCard || card.id === hoveredCard ? "#1E90FF" : "#FFFFFF",
//         color:
//           card.id === activeCard || card.id === hoveredCard ? "#FFFFFF" : "#202020",
//       }}
//     >
//       <div>
//         <div className="relative inline-block">
//           <div
//             className="h-12 w-12 rounded-lg flex items-center justify-center"
//             style={{
//               backgroundColor:
//                 card.id === activeCard || card.id === hoveredCard
//                   ? "#9CF694"
//                   : "#2E96F5",
//             }}
//           ></div>
//         </div>
    
//         <h3
//           className="mt-8 text-2xl font-bold"
//           style={{ fontSize: isMobile ? "20px" : "24px" }}
//         >
//           {card.title}
//         </h3>
//         <p
//           className="mt-3"
//           style={{
//             fontSize: isMobile ? "14px" : "16px",
//             lineHeight: "22px",
//           }}
//         >
//           {card.description}
//         </p>
//       </div>
    
//       <a
//         href={card.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 flex items-center justify-end font-semibold no-underline"
//         style={{
//           fontSize: isMobile ? "14px" : "16px",
//           color:
//             card.id === activeCard || card.id === hoveredCard ? "#FFFFFF" : "black",
//         }}
//       >
//         <span className="mr-6">Apply Now</span>
//         <img
//           src={arrow}
//           alt="Arrow icon"
//           style={{
//             height: isMobile ? "40px" : "56px",
//             width: isMobile ? "48px" : "64px",
//           }}
//         />
//       </a>
//     </div>
//     );
//   })}
// </div>

//     </section>
//   );
// }

// export default Involved;


// mobile
"use client";

import React, { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Become a Sponsor",
    description: "Partner with us to shape the future of AI innovation.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScvtPBj8e9o1v2s7heNDGGW_iz2AwCQB_FKBqEv2OKITxcyzg/viewform",
  },
  {
    id: 2,
    title: "Become a Speaker",
    description: "Share your expertise and insights with the AI community.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfAZZpitA5SliZ1ivPH0PmQled6eyuyaHUnKLIY5TP1YXjRIQ/viewform",
  },
  {
    id: 3,
    title: "Become an Exhibitor",
    description: "Showcase your AI solutions and connect with industry leaders.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdAu78_Eh1Cbt-_M4k6YBSZe-kOnuSdcC4TBqNdF3yDFfZCQw/viewform",
  },
  {
    id: 4,
    title: "Join as Volunteer",
    description: "Be part of the organizing team and gain valuable experience.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSccyRPittAjflEQYAdpnfXjQ4MoA1xNs6LnwwkrX8Y0Stas7g/viewform",
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
      <div className="flex items-start justify-between mb-12">
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
            className="h-8"
          />
        )}
      </div>

      {/* ---------------- Desktop View ---------------- */}
      {!isMobile && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const isActiveOrHovered = hoveredCard === card.id;
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
        <div
          className="flex overflow-x-auto space-x-4 pb-4 scroll-container"
          style={{ minWidth: `${cards.length * 320}px` }}
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
                className="flex-shrink-0 w-80 flex flex-col justify-between rounded-3xl border p-6 shadow-sm transition cursor-pointer hover:shadow-lg"
                style={{
                  borderColor: "#000",
                  backgroundColor: isHovered ? "#1E90FF" : "#FFFFFF",
                  color: isHovered ? "#FFFFFF" : "#202020",
                }}
              >
                <div>
                  <div className="relative inline-block">
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: isHovered ? "#9CF694" : "#2E96F5",
                      }}
                    ></div>
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{card.title}</h3>
                  <p className="mt-2 text-base">{card.description}</p>
                </div>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-end font-semibold no-underline"
                  style={{
                    color: isHovered ? "#FFFFFF" : "black",
                  }}
                >
                  <span className="mr-4 text-base">Apply Now</span>
                  <img src={arrow} alt="Arrow icon" className="h-6 w-6" />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Involved;