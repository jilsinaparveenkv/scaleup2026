




// // main


// "use client";
// import React, { useEffect, useState } from "react";

// interface TextCard {
//   type: "text";
//   year: string;
//   text: string;
//   location?: string;
// }

// interface ImageCard {
//   type: "image";
//   src: string;
// }

// type Card = TextCard | ImageCard;

// const cardsRow1: Card[] = [
//   {
//     type: "text",
//     year: "2024",
//     text: "ScaleUp 2024 sparked D2C entrepreneurship, empowering founders to grow, innovate, and lead bold ventures.",
//   },
//   { type: "image", src: "/assets/images/timeline_1.webp" },
//   { type: "image", src: "/assets/images/timeline_icon1.svg" },
//   { type: "image", src: "/assets/images/timeline_6.webp" },
//   { type: "image", src: "/assets/images/timeline_5.webp" },
//   {
//     type: "text",
//     year: "2025",
//     location: "Dubai",
//     text: "ScaleUp Dubai connected US, Africa, GCC, and Asia entrepreneurs, fostering trade, investment, and global growth.",
//   },
// ];

// const cardsRow2: Card[] = [
//   {
//     type: "text",
//     year: "2025",
//     text: "ScaleUp 2025 united food, fashion, tech, and government to empower brands, investors, and startups to collaborate, scale, and build sustainable opportunities.",
//   },
//   { type: "image", src: "/assets/images/timeline_2.webp" },
//   { type: "image", src: "/assets/images/timeline_3.webp" },
//   { type: "image", src: "/assets/images/timeline_icon2.svg" },
//   { type: "image", src: "/assets/images/timeline_7.webp" },
//   { type: "image", src: "/assets/images/timeline_8.webp" },
// ];

// export default function ScaleUpTimeline() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const renderCard = (
//     card: Card,
//     width: string,
//     height: string,
//     index: number,
//     isMobile: boolean
//   ) =>
//     card.type === "text" ? (
//       <div
//         key={index}
//         className="flex flex-col justify-between"
//         style={{
//           width: isMobile ? "100px" : "217px",
//           height: isMobile ? "150px" : "272.21px",
//           backgroundColor: "#202020",
//           color: "#FFFFFF",
//           padding: isMobile ? "6px" : "16px",
//           borderRadius: "20px",
//           border: "0.7px solid rgba(255,255,255,0.2)",
//           opacity: 1,
//           transform: "rotate(0deg)",
//         }}
//       >
//         <p
//           style={{
//             fontSize: isMobile ? "9px" : "14px",
//             lineHeight: isMobile ? "10px" : "20px",
//             fontFamily: "Plus Jakarta Sans",
//           }}
//         >
//           {card.text}
//         </p>
//         <div>
//           {"location" in card && card.location && (
//             <p
//               className="md:-mb-5"
//               style={{
//                 fontSize: isMobile ? "8px" : "18px",
//                 fontWeight: 700,
//                 color: "#E052FF",
//                 opacity: 0.7,
//               }}
//             >
//               {card.location}
//             </p>
//           )}
//           <h3
//             style={{
//               fontSize: isMobile ? "14px" : "4rem",
//               fontWeight: 700,
//               color:
//                 index === 0
//                   ? "#9CF694"
//                   : index === 5
//                   ? "#E052FF"
//                   : "#FFFFFF",
//             }}
//           >
//             {card.year}
//           </h3>
//         </div>
//       </div>
//     ) : (
//       <div
//         key={index}
//         className="flex items-center justify-center bg-white rounded-xl overflow-hidden"
//         style={{
//           width: isMobile ? "100px" : "217px",
//           height: isMobile ? "150px" : "272.21px",
//           opacity: 1,
//           transform: "rotate(0deg)",
//         }}
//       >
//         <img
//           src={card.src}
//           alt="ScaleUp event"
//           className={
//             card.src.endsWith(".svg")
//               ? isMobile
//                 ? "w-8 h-8 object-contain"
//                 : "w-[80px] h-[80px] object-contain"
//               : "w-full h-full object-cover rounded-xl"
//           }
//         />
//       </div>
//     );

//   return (
//     <section
//       className="relative w-full px-4 sm:px-8 md:px-16 py-0 md:py-0 bg-white overflow-hidden"
//       style={{ fontFamily: "Plus Jakarta Sans" }}
//     >
//       {isMobile ? (
//         <>
//           {/* ----------------- MOBILE LAYOUT ----------------- */}
//           {/* SVG Image first, centered, smaller */}
// {/* Timeline Image */}
// <div className="flex justify-center mt-6 mb-4">
//   <img
//     src="/assets/images/04timeline.svg"
//     alt="About ScaleUp"
//     className="w-[55%] max-w-[180px] h-auto"
//   />
// </div>

// {/* Text Section */}
// <div className="flex justify-start mb-6 px-3">
//   <p
//     className="text-[18px] leading-[28px] text-start"
//     style={{ color: "#202020", fontFamily: "Plus Jakarta Sans" }}
//   >
//     {/* Launched in 2024 and global by 2025, ScaleUp 2026 unites innovators
//     and leaders to scale bigger, smarter, faster. */}
//   </p>

// </div>


//           {/* Cards: 4 rows × 3 cards */}
//           <div className="flex flex-wrap justify-center gap-0 mt-0 px-3">
//             {cardsRow1.slice(0, 3).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow1.slice(3, 6).map((card, i) =>
//               renderCard(card, "110px", "140px", i + 3, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow2.slice(0, 3).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0 mb-10">
//             {cardsRow2.slice(3, 6).map((card, i) =>
//               renderCard(card, "110px", "140px", i + 3, true)
//             )}
//           </div>
//         </>
//       ) : (
//         <>
//           {/* ----------------- DESKTOP LAYOUT (UNCHANGED) ----------------- */}
//           <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
//             <div className="flex-1 w-full md:w-2/3 mt-6 md:mt-12 flex justify-end items-end">
//               <p
//                 className="font-plusJakartaSans md:-ml-10 mt-25 px-2 sm:px-4 text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-right"
//                 style={{ color: "#202020" }}
//               >
//                 Launched in 2024 and global by 2025, ScaleUp 2026 unites
//                 innovators and leaders to scale bigger, smarter, faster.
//               </p>
//             </div>

//             <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-6 md:mb-10">
//               <img
//                 src="/assets/images/04timeline.svg"
//                 alt="About ScaleUp"
//                 className="w-full h-[222px]"
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center items-start gap-0 md:mt-8 -ml-6 md:-ml-25">
//             {cardsRow1.map((card, index) =>
//               renderCard(card, "12rem", "15rem", index, false)
//             )}
//           </div>
//           <div className="flex justify-center gap-0 mt-0 ml-30 md:ml-70 md:-mr-10">
//             {cardsRow2.map((card, index) =>
//               renderCard(card, "12rem", "15rem", index, false)
//             )}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }








"use client";
import React from "react";

interface TextCard {
  type: "text";
  year: string;
  text: string;
  location?: string;
}

interface ImageCard {
  type: "image";
  src: string;
}

type Card = TextCard | ImageCard;

const cardsRow1: Card[] = [
  {
    type: "text",
    year: "2024",
    text: "ScaleUp 2024 sparked D2C entrepreneurship, empowering founders to grow, innovate, and lead bold ventures.",
  },
  { type: "image", src: "/assets/images/timeline_1.webp" },
  { type: "image", src: "/assets/images/timeline_icon1.svg" },
  { type: "image", src: "/assets/images/timeline_6.webp" },
  { type: "image", src: "/assets/images/timeline_5.webp" },
  {
    type: "text",
    year: "2025",
    location: "Dubai",
    text: "ScaleUp Dubai connected US, Africa, GCC, and Asia entrepreneurs, fostering trade, investment, and global growth.",
  },
];

const cardsRow2: Card[] = [
  {
    type: "text",
    year: "2025",
    text: "ScaleUp 2025 brought together food, fashion, tech, and government to help brands, investors, and startups scale sustainably.",
  },
  { type: "image", src: "/assets/images/timeline_2.webp" },
  { type: "image", src: "/assets/images/timeline_3.webp" },
  { type: "image", src: "/assets/images/timeline_icon2.svg" },
  { type: "image", src: "/assets/images/timeline_7.webp" },
  { type: "image", src: "/assets/images/timeline_8.webp" },
];

export default function ScaleUpTimeline() {
  const renderCard = (card: Card, index: number, device: string) =>
    card.type === "text" ? (
      <div
        key={index}
        className="flex flex-col justify-between"
        style={{
          width: device === "Mobile" ? "110px" : device === "Tab" ? "230px" : "200px",
          height: device === "Mobile" ? "150px" : device === "Tab" ? "272.21px" : "272.21px",
          backgroundColor: "#202020",
          color: "#FFFFFF",
          padding: device === "Mobile" ? "12px" : device === "Tab" ? "9px":"16px",
          borderRadius: "20px",
          border: "0.7px solid rgba(255,255,255,0.2)",
        }}
      >
        <p
          style={{
            fontSize: device === "Mobile" ? "9px" : "14px",
            lineHeight: device === "Mobile" ? "10px" : "20px",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          {card.text}
        </p>
        <div>
          {"location" in card && card.location && (
            <p
              className="md:-mb-5"
              style={{
                fontSize: device === "Mobile" ? "8px" : "18px",
                fontWeight: 700,
                color: "#E052FF",
                opacity: 0.7,
              }}
            >
              {card.location}
            </p>
          )}
          <h3
            style={{
              fontSize: device === "Mobile" ? "14px" : "4rem",
              fontWeight: 700,
              color:
                index === 0
                  ? "#9CF694"
                  : index === 5
                    ? "#E052FF"
                    : "#FFFFFF",
            }}
          >
            {card.year}
          </h3>
        </div>
      </div>
    ) : (
      <div
        key={index}
        className="flex items-center justify-center bg-white rounded-xl overflow-hidden"
        style={{
          width: device === "Mobile" ? "110px" : "200px",
          height: device === "Mobile" ? "150px" : "272.21px",
        }}
      >
        <img
          src={card.src}
          alt="ScaleUp event"
          loading="lazy"
          className={
            card.src.endsWith(".svg")
              ? device === "Mobile"
                ? "w-[60px] h-[60px] object-contain"
                : device === "Tab" ?"w-[100px] h-[100px] object-contain" : "w-[100px] h-[100px] object-contain"
              : "w-full h-full object-cover rounded-xl"
          }
        />
      </div>
    );

  return (
    <section
      className="relative w-full px-4 md:px-9 sm:px-8 lg:px-16 py-0 md:py-0 bg-white overflow-hidden"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* ---------------- MOBILE VIEW ---------------- */}
      <div className="flex flex-col md:hidden">
        {/* Timeline Icon + Text */}
        <div className="flex flex-col items-center mt-6 mb-4 ">
          <img
            src="/assets/images/04timeline.svg"
            alt="About ScaleUp"
            className="w-[55%] max-w-[180px] h-auto mb-4"
          />
          <div className="flex justify-center items-center mb-4">
            <img
              src="/assets/images/abouticons.svg"
              alt="About Icons"
              className="w-16 md:w-20 h-auto"
            />
          </div>
          <div className="flex justify-start mb-0 md:mb-6 px-2">
            <p
              className="text-[18px] leading-[28px] text-start mb-6 px-0"
              style={{ color: "#202020", fontFamily: "Plus Jakarta Sans" }}
            >
              Launched in 2024 and global by 2025, ScaleUp 2026 unites innovators
              and leaders to scale bigger, smarter, faster.
            </p>
          </div>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-wrap justify-center gap-0 mt-0 ">
          {cardsRow1.slice(0, 3).map((card, i) => renderCard(card, i, "Mobile"))}
        </div>
        <div className="flex flex-wrap justify-center gap-0 mt-0">
          {cardsRow1.slice(3, 6).map((card, i) => renderCard(card, i + 3, "Mobile"))}
        </div>
        <div className="flex flex-wrap justify-center gap-0 mt-0">
          {cardsRow2.slice(0, 3).map((card, i) => renderCard(card, i, "Mobile"))}
        </div>
        <div className="flex flex-wrap justify-center gap-0 mt-0 mb-10">
          {cardsRow2.slice(3, 6).map((card, i) => renderCard(card, i + 3, "Mobile"))}
        </div>
      </div>

      {/* ---------------- TABLET VIEW ---------------- */}
      <div className="hidden md:flex lg:hidden flex-col">
        {/* Top Section (aligned with cards) */}
        <div className="flex flex-col items-center mt-10 mb-4 px-0">
          <img
            src="/assets/images/04timeline.svg"
            alt="About ScaleUp"
            className="w-[55%] max-w-[200px] h-auto mb-4"
          />
          <div className="flex justify-center items-center my-4">
            <img
              src="/assets/images/abouticons.svg"
              alt="About Icons"
              className="w-40 h-auto"
            />
          </div>


          <div className="flex justify-start px-2 my-8">
            <p
              className="text-[28px] leading-[35px] text-start px-5"
              style={{ color: "#202020" }}
            >
              Launched in 2024 and global by 2025, ScaleUp 2026 unites innovators
              and leaders to scale bigger, smarter, faster.
            </p>
          </div>
        </div>




        {/* Cards Layout (same total width & padding) */}
        <div className="flex flex-col items-center mt-6 mb-4">
          <div className="w-full flex flex-wrap justify-center gap-0 mt-0 px-2">
            {cardsRow1.slice(0, 3).map((card, i) => renderCard(card, i, "Tab"))}
          </div>
          <div className="w-full flex flex-wrap justify-center gap-0 mt-0 px-2">
            {cardsRow1.slice(3, 6).map((card, i) => renderCard(card, i + 3, "Tab"))}
          </div>
          <div className="w-full flex flex-wrap justify-center gap-0 mt-0 px-2">
            {cardsRow2.slice(0, 3).map((card, i) => renderCard(card, i, "Tab"))}
          </div>
          <div className="w-full flex flex-wrap justify-center gap-0 mt-0 mb-10 px-2">
            {cardsRow2.slice(3, 6).map((card, i) => renderCard(card, i + 3, "Tab"))}
          </div>
        </div>
      </div>


      {/* ---------------- DESKTOP VIEW ---------------- */}
      <div className="hidden lg:block">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 w-full">
          <div className="flex-1 w-full lg:w-2/3 mt-6 lg:mt-12 flex justify-end items-end">
            <p
              className="font-plusJakartaSans mt-25 px-2 sm:px-4 text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-right"
              style={{ color: "#202020" }}
            >
              Launched in 2024 and global by 2025, ScaleUp 2026 unites innovators
              and leaders to scale bigger, smarter, faster.
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:w-1/3 flex flex-col gap-4 mb-6 lg:mb-10">
            <img
              src="/assets/images/04timeline.svg"
              alt="About ScaleUp"
              className="w-full h-[222px]"
            />
          </div>
        </div>

        <div className="flex w-full">
          {cardsRow1.map((card, index) => renderCard(card, index, "Desktop"))}
        </div>
        <div className="flex justify-center gap-0 mt-0 ml-30 lg:ml-50">
          {cardsRow2.map((card, index) => renderCard(card, index, "Desktop"))}
        </div>
      </div>
    </section>
  );
}
