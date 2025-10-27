// "use client";
// import React from "react";

// export default function ScaleUpTheme() {
//   const themes = [
//     {
//       number: "01",
//       title: "AI in Healthcare & Life Sciences",
//       desc: "Diagnostics, drug discovery, personalized medicine, hospital management.",
//     },
//     {
//       number: "02",
//       title: "AI in Finance & Fintech",
//       desc: "Risk management, fraud detection, trading, blockchain, AI.",
//     },
//     {
//       number: "03",
//       title: "AI in Education & Skill Development",
//       desc: "Adaptive learning, EdTech, skilling, AI tutors.",
//     },
//     {
//       number: "04",
//       title: "AI in Manufacturing & Industry 4.0",
//       desc: "Smart factories, robotics, supply chain optimization.",
//     },
//     {
//       number: "05",
//       title: "AI in Government & Public Services",
//       desc: "Smart governance, services, citizen analytics.",
//     },
//     {
//       number: "06",
//       title: "AI in Retail, E-commerce & Consumer Experience",
//       desc: "Personalization, chatbots, inventory management.",
//     },
//     {
//       number: "07",
//       title: "AI in Agriculture & Food Security",
//       desc: "Precision farming, crop monitoring, sustainability.",
//     },
//     {
//       number: "08",
//       title: "AI in Media, Entertainment & Creativity",
//       desc: "Generative AI, gaming, content creation, IP solutions.",
//     },
//     {
//       number: "09",
//       title: "AI in Sustainability & Climate Action",
//       desc: "Energy optimization, green tech, disaster prediction.",
//     },
//     {
//       number: "10",
//       title: "AI in Transport, Mobility & Smart Cities",
//       desc: "Autonomous transport, urban planning, traffic management.",
//     },
//   ];

//   return (
//     <section className="bg-[#0D0D0D] text-white py-16 px-6 md:px-20 rounded-3xl max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
//         <div>
//           <h1 className="font-semibold text-3xl md:text-5xl leading-tight">
//             ScaleUp Conclave 2026
//             <br />
//             <span className="font-normal">The Theme</span>
//           </h1>
//           <p className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
//             From diagnosing disease to designing cities — ScaleUp 2026 unveils
//             10 arenas where AI is rewriting the rules of human progress.
//           </p>
//         </div>

//         <div className="mt-6 md:mt-0">
//           <button className="bg-[#1A1A1A] text-gray-200 border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-[#222] transition">
//             🔸 ScaleUp theme
//           </button>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
//         {themes.map((item) => (
//           <div key={item.number} className="flex items-start gap-3" style={{color:"9CF694"}}>
//             <div className="flex items-center">
//               <span className="text-[#4EE1A0] text-5xl font-bold leading-none">
//                 {item.number}
//               </span>
//               <span className="ml-2 text-[#4EE1A0] text-lg">•</span>
//             </div>
//             <div>
//               <h3 className="text-white font-semibold text-base md:text-[17px] leading-snug">
//                 {item.title}
//               </h3>
//               <p className="text-gray-400 text-sm mt-1 leading-snug">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// // // good2

// "use client";
// import React from "react";
// import Image from "next/image";
// import { Star } from "lucide-react";

// export default function ScaleUpTheme() {
//   const column1 = [
//     {
//       number: "01",
//       title: "AI in Healthcare & Life Sciences",
//       desc: "Diagnostics, drug discovery, personalized medicine, hospital management.",
//     },
//     {
//       number: "02",
//       title: "AI in Finance & Fintech",
//       desc: "Risk management, fraud detection, trading, blockchain, AI.",
//     },
//     {
//       number: "03",
//       title: "AI in Education & Skill Development",
//       desc: "Adaptive learning, EdTech, skilling, AI tutors.",
//     },
//   ];

//   const column2 = [
//     {
//       number: "04",
//       title: "AI in Manufacturing & Industry 4.0",
//       desc: "Smart factories, robotics, supply chain optimization.",
//     },
//     {
//       number: "05",
//       title: "AI in Government & Public Services",
//       desc: "Smart governance, services, citizen analytics.",
//     },
//     {
//       number: "06",
//       title: "AI in Retail, E-commerce & Consumer Experience",
//       desc: "Personalization, chatbots, inventory management.",
//     },
//     {
//       number: "07",
//       title: "AI in Agriculture & Food Security",
//       desc: "Precision farming, crop monitoring, sustainability.",
//     },
//   ];

//   const column3 = [
//     {
//       number: "08",
//       title: "AI in Media, Entertainment & Creativity",
//       desc: "Generative AI, gaming, content creation, IP solutions.",
//     },
//     {
//       number: "09",
//       title: "AI in Sustainability & Climate Action",
//       desc: "Energy optimization, green tech, disaster prediction.",
//     },
//     {
//       number: "10",
//       title: "AI in Transport, Mobility & Smart Cities",
//       desc: "Autonomous transport, urban planning, traffic management.",
//     },
//   ];

//   return (
//     <section className=" text-white py-16 px-6 md:px-20 rounded-3xl max-w-7xl mx-auto " style={{backgroundColor:"#202020"}} id="theme">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
//         <div>
//           <h1 className="font-semibold text-3xl md:text-5xl leading-tight" style={{color:"#FFFFFF"}}>
//             ScaleUp Conclave 2026
//             <br />
//             <span className="font-normal" style={{color:"#FFFFFF"}}>The Theme</span>
//           </h1>

//           <div className="flex items-start mt-4 max-w-2xl">
//             {/* <span className="text-[#eff6f4] text-4xl font-semibold mr-3">|</span> */}
//             <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
//             <p className="text-sm md:text-base leading-relaxed" style={{color:"#FFFFFF"}}>
//               From diagnosing disease to designing cities — ScaleUp 2026 unveils
//               10 arenas where AI is rewriting the rules of human progress.
//             </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 md:mt-0">
//   <div className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md">
//     <Star size={16} color="#ECA723" fill="#ECA723" />
//     ScaleUp theme
//   </div>
// </div>
//       </div>

//       {/* Custom Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
//         {/* Column 1 */}
//         <div className="flex flex-col gap-10">
//           {column1.map((item) => (
//             <div key={item.number} className="flex items-start gap-6">
//               <div className="flex items-center">
//                 <Image
//                   src="/assets/images/Ellipse.svg"
//                   alt="ellipse"
//                   width={18}
//                   height={18}
//                   className="mr-2 mt-[6px]"
//                 />
//                 <span className="text-[#9CF694] text-5xl font-bold leading-none">
//                   {item.number}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold text-[16px] leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-1 leading-snug">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col gap-10">
//           {column2.map((item) => (
//             <div key={item.number} className="flex items-start gap-6">
//               <div className="flex items-center">
//                 <Image
//                   src="/assets/images/Ellipse.svg"
//                   alt="ellipse"
//                   width={18}
//                   height={18}
//                   className="mr-2 mt-[6px]"
//                 />
//                 <span className="text-[#9CF694] text-5xl font-bold leading-none">
//                   {item.number}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold text-[16px] leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-1 leading-snug">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col gap-10">
//           {column3.map((item) => (
//             <div key={item.number} className="flex items-start gap-6">
//               <div className="flex items-center">
//                 <Image
//                   src="/assets/images/Ellipse.svg"
//                   alt="ellipse"
//                   width={18}
//                   height={18}
//                   className="mr-2 mt-[6px]"
//                 />
//                 <span className="text-[#9CF694] text-5xl font-bold leading-none">
//                   {item.number}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold text-[16px] leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-1 leading-snug">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );

// }





"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ScaleUpTheme() {
  const column1 = [
    { number: "01", title: "AI in Healthcare & Life Sciences", desc: "Diagnostics, drug discovery, personalized medicine, hospital management." },
    { number: "02", title: "AI in Finance & Fintech", desc: "Risk management, fraud detection, trading, blockchain, AI." },
    { number: "03", title: "AI in Education & Skill Development", desc: "Adaptive learning, EdTech, skilling, AI tutors." },
  ];

  const column2 = [
    { number: "04", title: "AI in Manufacturing & Industry 4.0", desc: "Smart factories, robotics, supply chain optimization." },
    { number: "05", title: "AI in Government & Public Services", desc: "Smart governance, services, citizen analytics." },
    { number: "06", title: "AI in Retail, E-commerce & Consumer Experience", desc: "Personalization, chatbots, inventory management." },
    { number: "07", title: "AI in Agriculture & Food Security", desc: "Precision farming, crop monitoring, sustainability." },
  ];

  const column3 = [
    { number: "08", title: "AI in Media, Entertainment & Creativity", desc: "Generative AI, gaming, content creation, IP solutions." },
    { number: "09", title: "AI in Sustainability & Climate Action", desc: "Energy optimization, green tech, disaster prediction." },
    { number: "10", title: "AI in Transport, Mobility & Smart Cities", desc: "Autonomous transport, urban planning, traffic management." },
  ];

  // Combine all columns for mobile rendering
  const allItems = [...column1, ...column2, ...column3];

  return (
    <section
      className="text-white py-16 px-6 md:px-20 rounded-3xl max-w-7xl mx-auto"
      style={{ backgroundColor: "#202020" }}
      id="theme"
    >
      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h1 className="font-semibold text-3xl md:text-5xl leading-tight" style={{ color: "#FFFFFF" }}>
            ScaleUp Conclave 2026
            <br />
            <span className="font-normal" style={{ color: "#FFFFFF" }}>The Theme</span>
          </h1>

          <div className="flex items-start mt-4 max-w-2xl">
            <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#FFFFFF" }}>
                From diagnosing disease to designing cities — ScaleUp 2026 unveils
                10 arenas where AI is rewriting the rules of human progress.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md">
            <Star size={16} color="#ECA723" fill="#ECA723" />
            ScaleUp theme
          </div>
        </div>
      </div>

      {/* ---------------- Desktop Grid ---------------- */}
      <div className="hidden md:grid grid-cols-3 gap-x-10 gap-y-8">
  {[column1, column2, column3].map((column, colIndex) => (
    <div key={colIndex} className="flex flex-col gap-8">
      {column.map((item) => (
        <div key={item.number} className="flex items-start gap-4">
          {/* Number block with fixed width */}
          <div className="flex items-center w-24">
            <Image
              src="/assets/images/Ellipse.svg"
              alt="ellipse"
              width={18}
              height={18}
              className="mr-2 mt-[6px]"
            />
            <span className="text-[#9CF694] text-5xl font-bold leading-none">
              {item.number}
            </span>
          </div>

          {/* Text block */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-[16px] leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1 leading-snug">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>



     {/* ---------------- Mobile View ---------------- */}
<div className="flex flex-col md:hidden gap-6">
  {/* Star badge first */}
  <div className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md w-max max-w-[45%]">
  <Star size={16} color="#ECA723" fill="#ECA723" />
  ScaleUp theme
</div>


  {/* Title second */}
  <h1 className="font-semibold text-3xl leading-tight" style={{ color: "#FFFFFF" }}>
    ScaleUp Conclave 2026
    <br />
    <span className="font-normal" style={{ color: "#FFFFFF" }}>The Theme</span>
  </h1>

  {/* Full left-border description */}
  <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#FFFFFF" }}>
      From diagnosing disease to designing cities — ScaleUp 2026 unveils
      10 arenas where AI is rewriting the rules of human progress.
    </p>
  </div>

{/* Grid items */}
<div className="flex flex-col gap-10">
  {allItems.map((item) => (
    <div key={item.number} className="flex items-start gap-6">
      {/* Number block with fixed width */}
      <div className="flex items-center w-20">
        <Image
          src="/assets/images/Ellipse.svg"
          alt="ellipse"
          width={18}
          height={18}
          className="mr-2 mt-[6px]"
        />
        <span className="text-[#9CF694] text-4xl font-bold leading-none">
          {item.number}
        </span>
      </div>

      {/* Text block takes remaining space */}
      <div className="flex-1">
        <h3 className="text-white font-semibold text-[16px] leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 leading-snug">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>


</div>

    </section>
  );
}
