
// // good

// "use client";
// import React, { useEffect, useState } from "react";

// const cardsRow1 = [
//   {
//     type: "text",
//     year: "2024",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon1.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   {
//     type: "text",
//     year: "2025",
//     location: "Dubai",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
// ];

// const cardsRow2 = [
//   {
//     type: "text",
//     year: "2024",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon2.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   {
//     type: "text",
//     year: "2025",
//     location: "Dubai",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
// ];

// export default function ScaleUpTimeline() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024); // <1024px = mobile/tablet
//     handleResize(); // set initial value
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="relative w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 bg-white overflow-hidden">
//       {/* Top text and SVG */}
//       <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
//         {/* Right Text */}
//         <div className="flex-1 w-full md:w-2/3 mt-6 md:mt-12 flex justify-end items-end">
//           <p
//             className="font-plusJakartaSans mt-35 px-2 sm:px-4 text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-right"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, that brings together
//             entrepreneurs, investors, aspiring business leaders
//           </p>
//         </div>

//         {/* Left SVG */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-6 md:mb-10">
//           <img
//             src="/assets/images/04timeline.svg"
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Timeline Rows */}
//       {isMobile ? (
//         // Mobile view: stacked rows with wrap
//         <>
//           {/* Row 1 mobile */}
//           <div className="flex flex-wrap justify-center gap-4 mt-8">
//             {cardsRow1.map((card, index) =>
//               card.type === "text" ? (
//                 <div
//                   key={index}
//                   className="rounded-xl flex flex-col justify-between p-4 w-40 h-52"
//                   style={{ color: "#FFFFFF", backgroundColor: "#202020" }}
//                 >
//                   <p className="text-sm leading-snug">{card.text}</p>
//                   <div>
//                     {card.location && (
//                       <p
//                         className="text-xs font-bold opacity-70"
//                         style={{ color: "#E052FF" }}
//                       >
//                         {card.location}
//                       </p>
//                     )}
//                     <h3
//                       className="text-4xl font-bold"
//                       style={{
//                         color:
//                           index === 0
//                             ? "#9CF694"
//                             : index === 5
//                             ? "#E052FF"
//                             : "#FFFFFF",
//                       }}
//                     >
//                       {card.year}
//                     </h3>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={index}
//                   className="w-40 h-52 flex items-center justify-center bg-white rounded-xl overflow-hidden"
//                 >
//                   <img
//                     src={card.src}
//                     alt="ScaleUp event"
//                     className={
//                       card.src && card.src.endsWith(".svg")
//                         ? "w-16 h-16 object-contain"
//                         : "w-full h-full object-cover rounded-xl"
//                     }
//                   />
//                 </div>
//               )
//             )}
//           </div>

//           {/* Row 2 mobile */}
//           <div className="flex flex-wrap justify-center gap-4 mt-6">
//             {cardsRow2.map((card, index) =>
//               card.type === "text" ? (
//                 <div
//                   key={index}
//                   className="rounded-xl flex flex-col justify-between p-4 w-40 h-52"
//                   style={{ color: "#FFFFFF", backgroundColor: "#202020" }}
//                 >
//                   <p className="text-sm leading-snug">{card.text}</p>
//                   <div>
//                     {card.location && (
//                       <p
//                         className="text-xs font-bold opacity-70"
//                         style={{ color: "#E052FF" }}
//                       >
//                         {card.location}
//                       </p>
//                     )}
//                     <h3
//                       className="text-4xl font-bold"
//                       style={{
//                         color:
//                           index === 0
//                             ? "#9CF694"
//                             : index === 5
//                             ? "#E052FF"
//                             : "#FFFFFF",
//                       }}
//                     >
//                       {card.year}
//                     </h3>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={index}
//                   className="w-40 h-52 flex items-center justify-center bg-white rounded-xl overflow-hidden"
//                 >
//                   <img
//                     src={card.src}
//                     alt="ScaleUp event"
//                     className={
//                       card.src && card.src.endsWith(".svg")
//                         ? "w-16 h-16 object-contain"
//                         : "w-full h-full object-cover rounded-xl"
//                     }
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </>
//       ) : (
//         // Desktop view: original layout
//         <>
//           {/* Row 1 desktop */}
//           <div className="flex flex-wrap justify-center items-start gap-0 mt-8">
//             {cardsRow1.map((card, index) =>
//               card.type === "text" ? (
//                 <div
//                   key={index}
//                   className="rounded-xl flex flex-col justify-between p-6 w-48 md:w-56 h-60 md:h-64"
//                   style={{ color: "#FFFFFF", backgroundColor: "#202020" }}
//                 >
//                   <p className="text-sm leading-snug">{card.text}</p>
//                   <div>
//                     {card.location && (
//                       <p
//                         className="text-xs font-bold opacity-70"
//                         style={{ color: "#E052FF" }}
//                       >
//                         {card.location}
//                       </p>
//                     )}
//                     <h3
//                       className="text-6xl font-bold"
//                       style={{
//                         color:
//                           index === 0
//                             ? "#9CF694"
//                             : index === 5
//                             ? "#E052FF"
//                             : "#FFFFFF",
//                       }}
//                     >
//                       {card.year}
//                     </h3>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={index}
//                   className="w-48 md:w-56 h-60 md:h-64 flex items-center justify-center bg-white rounded-xl overflow-hidden"
//                 >
//                   <img
//                     src={card.src}
//                     alt="ScaleUp event"
//                     className={
//                       card.src && card.src.endsWith(".svg")
//                         ? "w-[80px] h-[80px] object-contain"
//                         : "w-full h-full object-cover rounded-xl"
//                     }
//                   />
//                 </div>
//               )
//             )}
//           </div>

//           {/* Row 2 desktop */}
//           <div className="flex justify-center gap-0 mt-0 ml-24 md:ml-48">
//             {cardsRow2.map((card, index) =>
//               card.type === "text" ? (
//                 <div
//                   key={index}
//                   className="rounded-xl flex flex-col justify-between p-6 w-48 md:w-56 h-60 md:h-64"
//                   style={{ color: "#FFFFFF", backgroundColor: "#202020" }}
//                 >
//                   <p className="text-sm leading-snug">{card.text}</p>
//                   <div>
//                     {card.location && (
//                       <p
//                         className="text-xs font-bold opacity-70"
//                         style={{ color: "#E052FF" }}
//                       >
//                         {card.location}
//                       </p>
//                     )}
//                     <h3
//                       className="text-6xl font-bold"
//                       style={{
//                         color:
//                           index === 0
//                             ? "#9CF694"
//                             : index === 5
//                             ? "#E052FF"
//                             : "#FFFFFF",
//                       }}
//                     >
//                       {card.year}
//                     </h3>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   key={index}
//                   className="w-48 md:w-56 h-60 md:h-64 flex items-center justify-center bg-white rounded-xl overflow-hidden"
//                 >
//                   <img
//                     src={card.src}
//                     alt="ScaleUp event"
//                     className={
//                       card.src && card.src.endsWith(".svg")
//                         ? "w-[80px] h-[80px] object-contain"
//                         : "w-full h-full object-cover rounded-xl"
//                     }
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }









// "use client";
// import React, { useEffect, useState } from "react";

// const cardsRow1 = [
//   { type: "text", year: "2024", text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts." },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon1.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "text", year: "2025", location: "Dubai", text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts." },
// ];

// const cardsRow2 = [
//   { type: "text", year: "2024", text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts." },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon2.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
// ];

// export default function ScaleUpTimeline() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const renderCard = (card: any, widthClass: string, heightClass: string, index: number) =>
//     card.type === "text" ? (
//       <div
//         key={index}
//         className={`flex flex-col justify-between p-4 rounded-xl ${widthClass} ${heightClass}`}
//         style={{ backgroundColor: "#202020", color: "#FFFFFF" }}
//       >
//         <p className="text-sm leading-snug">{card.text}</p>
//         <div>
//           {card.location && <p className="text-xs font-bold opacity-70" style={{ color: "#E052FF" }}>{card.location}</p>}
//           <h3
//             className="font-bold"
//             style={{
//               fontSize: "1.5rem",
//               color: index === 0 ? "#9CF694" : index === 5 ? "#E052FF" : "#FFFFFF",
//             }}
//           >
//             {card.year}
//           </h3>
//         </div>
//       </div>
//     ) : (
//       <div
//         key={index}
//         className={`flex items-center justify-center bg-white rounded-xl overflow-hidden ${widthClass} ${heightClass}`}
//       >
//         <img
//           src={card.src}
//           alt="ScaleUp event"
//           className={card.src.endsWith(".svg") ? "w-16 h-16 object-contain" : "w-full h-full object-cover rounded-xl"}
//         />
//       </div>
//     );

//   return (
//     <section className="relative w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 bg-white overflow-hidden">
//       {isMobile ? (
//         <>
//           {/* Timeline SVG */}
//           <div className="flex justify-center mb-4">
//             <img src="/assets/images/04timeline.svg" alt="About ScaleUp" className="w-2/3 h-auto" />
//           </div>

//           {/* Description */}
//           <p className="text-center mb-6 text-[20px] leading-[28px]" style={{ color: "#202020" }}>
//             ScaleUp Conclave hosted by ScaleUp Village, that brings together entrepreneurs, investors, aspiring business leaders
//           </p>

//           {/* Row 1: first 3 cards of row1 */}
//           <div className="flex flex-wrap gap-0 mb-2">
//             {cardsRow1.slice(0, 3).map((card, index) => renderCard(card, "w-1/3", "h-48", index))}
//           </div>

//           {/* Row 2: first 2 cards of row2, first card staggered under 2nd card of row1 */}
//           <div className="flex flex-wrap gap-0 mb-2">
//             {cardsRow2.slice(0, 2).map((card, index) =>
//               index === 0
//                 ? renderCard(card, "w-1/3 ml-1/3", "h-52", index) // first card staggered
//                 : renderCard(card, "w-1/3", "h-52", index)       // second card normal
//             )}
//           </div>

//           {/* Row 3: 4th and 5th cards of row1 */}
//           <div className="flex flex-wrap gap-0 mb-2">
//             {cardsRow1.slice(3, 5).map((card, index) => renderCard(card, "w-1/2", "h-48", index))}
//           </div>

//           {/* Row 4: 3rd–5th cards of row2 */}
//           <div className="flex flex-wrap gap-0 mb-2">
//             {cardsRow2.slice(2, 5).map((card, index) => renderCard(card, "w-1/3", "h-48", index))}
//           </div>
//         </>
//       ) : (
//         <>
//           {/* Desktop view unchanged */}
//           <div className="flex flex-wrap justify-center items-start gap-0 mt-8">
//             {cardsRow1.map((card, index) => renderCard(card, "w-48 md:w-56", "h-60 md:h-64", index))}
//           </div>
//           <div className="flex justify-center gap-0 mt-0 ml-24 md:ml-48">
//             {cardsRow2.map((card, index) => renderCard(card, "w-48 md:w-56", "h-60 md:h-64", index))}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }



// mobile(without vercal)


// "use client";
// import React, { useEffect, useState } from "react";

// const cardsRow1 = [
//   {
//     type: "text",
//     year: "2024",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon1.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   {
//     type: "text",
//     year: "2025",
//     location: "Dubai",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
// ];

// const cardsRow2 = [
//   {
//     type: "text",
//     year: "2024",
//     text: "Be part of Kerala’s biggest AI & Technology Conclave and connect with innovators, leaders, and enthusiasts.",
//   },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_icon2.svg" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
//   { type: "image", src: "/assets/images/timeline_img1.png" },
// ];

// export default function ScaleUpTimeline() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Common card renderer
//   const renderCard = (card: any, width: string, height: string, index: number, isMobile: boolean) =>
//     card.type === "text" ? (
//       <div
//         key={index}
//         className="rounded-xl flex flex-col justify-between"
//         style={{
//           width,
//           height,
//           backgroundColor: "#202020",
//           color: "#FFFFFF",
//           padding: isMobile ? "6px" : "16px",
//         }}
//       >
//         <p
//           style={{
//             fontSize: isMobile ? "12px" : "14px",
//             lineHeight: isMobile ? "18px" : "20px",
//             fontFamily: "Plus Jakarta Sans",
//           }}
//         >
//           {card.text}
//         </p>
//         <div>
//           {card.location && (
//             <p
//               style={{
//                 fontSize: isMobile ? "10px" : "12px",
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
//               fontSize: isMobile ? "14px" : "2.5rem",
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
//         style={{ width, height }}
//       >
//         <img
//           src={card.src}
//           alt="ScaleUp event"
//           className={
//             card.src.endsWith(".svg")
//               ? isMobile
//                 ? "w-10 h-10 object-contain"
//                 : "w-[80px] h-[80px] object-contain"
//               : "w-full h-full object-cover rounded-xl"
//           }
//         />
//       </div>
//     );

//   return (
//     <section className="relative w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 bg-white overflow-hidden">
//       {/* Top text + SVG */}
//       <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
//         {/* Right text */}
//         <div className="flex-1 w-full md:w-2/3 mt-6 md:mt-12 flex justify-end items-end">
//           <p
//             className="font-plusJakartaSans mt-35 px-2 sm:px-4 text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-right"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, that brings together
//             entrepreneurs, investors, aspiring business leaders
//           </p>
//         </div>

//         {/* Left SVG */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-6 md:mb-10">
//           <img
//             src="/assets/images/04timeline.svg"
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Mobile View */}
//       {isMobile ? (
//         <>
//           {/* ----------------- MOBILE LAYOUT ----------------- */}
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow1.slice(0, 3).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow1.slice(3, 6).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow2.slice(0, 3).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//           <div className="flex flex-wrap justify-center gap-0 mt-0">
//             {cardsRow2.slice(3, 6).map((card, i) =>
//               renderCard(card, "110px", "140px", i, true)
//             )}
//           </div>
//         </>
//       ) : (
//         <>
//           {/* ----------------- DESKTOP LAYOUT ----------------- */}
//           <div className="flex flex-wrap justify-center items-start gap-0 mt-8">
//             {cardsRow1.map((card, index) =>
//               renderCard(card, "12rem", "15rem", index, false)
//             )}
//           </div>
//           <div className="flex justify-center gap-0 mt-0 ml-24 md:ml-48">
//             {cardsRow2.map((card, index) =>
//               renderCard(card, "12rem", "15rem", index, false)
//             )}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }


// with vercal
"use client";
import React, { useEffect, useState } from "react";
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
  { type: "image", src: "/assets/images/timeline_img1.png" },
  { type: "image", src: "/assets/images/timeline_icon1.svg" },
  { type: "image", src: "/assets/images/timeline_img1.png" },
  { type: "image", src: "/assets/images/timeline_img1.png" },
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
    text: "ScaleUp 2025 united food, fashion, tech, and government to empower brands, investors, and startups to collaborate, scale, and build sustainable opportunities.",
  },
  { type: "image", src: "/assets/images/timeline_img1.png" },
  { type: "image", src: "/assets/images/timeline_img1.png" },
  { type: "image", src: "/assets/images/timeline_icon2.svg" },
  { type: "image", src: "/assets/images/timeline_img1.png" },
  { type: "image", src: "/assets/images/timeline_img1.png" },
];

export default function ScaleUpTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Common card renderer
  const renderCard = (
    card: Card,
    width: string,
    height: string,
    index: number,
    isMobile: boolean
  ) =>
  
    card.type === "text" ? (
      <div
        key={index}
        className="rounded-xl flex flex-col justify-between"
        style={{
          width,
          height,
          backgroundColor: "#202020",
          color: "#FFFFFF",
          padding: isMobile ? "6px" : "16px",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "12px" : "14px",
            lineHeight: isMobile ? "18px" : "20px",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          {card.text}
        </p>
        <div>
        {"location" in card && card.location && (
            <p
              style={{
                fontSize: isMobile ? "10px" : "12px",
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
              fontSize: isMobile ? "14px" : "2.5rem",
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
        style={{ width, height }}
      >
        <img
          src={card.src}
          alt="ScaleUp event"
          className={
            card.src.endsWith(".svg")
              ? isMobile
                ? "w-10 h-10 object-contain"
                : "w-[80px] h-[80px] object-contain"
              : "w-full h-full object-cover rounded-xl"
          }
        />
      </div>
    );

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 bg-white overflow-hidden" style={{fontFamily:"Plus Jakarta Sans"}}>
      {/* Top text + SVG */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 w-full">
        {/* Right text */}
        <div className="flex-1 w-full md:w-2/3 mt-6 md:mt-12 flex justify-end items-end">
          <p
            className="font-plusJakartaSans mt-35 px-2 sm:px-4 text-[20px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-right"
            style={{ color: "#202020" }}
          >
          Launched in 2024 and global by 2025, ScaleUp 2026 unites innovators and leaders to scale bigger, smarter, faster.

          </p>
        </div>

        {/* Left SVG */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-6 md:mb-10">
          <img
            src="/assets/images/04timeline.svg"
            alt="About ScaleUp"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mobile View */}
      {isMobile ? (
        <>
          {/* ----------------- MOBILE LAYOUT ----------------- */}
          <div className="flex flex-wrap justify-center gap-0 mt-0">
            {cardsRow1.slice(0, 3).map((card, i) =>
              renderCard(card, "110px", "140px", i, true)
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-0 mt-0">
            {cardsRow1.slice(3, 6).map((card, i) =>
              renderCard(card, "110px", "140px", i, true)
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-0 mt-0">
            {cardsRow2.slice(0, 3).map((card, i) =>
              renderCard(card, "110px", "140px", i, true)
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-0 mt-0">
            {cardsRow2.slice(3, 6).map((card, i) =>
              renderCard(card, "110px", "140px", i, true)
            )}
          </div>
        </>
      ) : (
        <>
          {/* ----------------- DESKTOP LAYOUT ----------------- */}
          <div className="flex flex-wrap justify-center items-start gap-0 mt-8">
            {cardsRow1.map((card, index) =>
              renderCard(card, "12rem", "15rem", index, false)
            )}
          </div>
          <div className="flex justify-center gap-0 mt-0 ml-24 md:ml-48">
            {cardsRow2.map((card, index) =>
              renderCard(card, "12rem", "15rem", index, false)
            )}
          </div>
        </>
      )}
    </section>
  );
}
