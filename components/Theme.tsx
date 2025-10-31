

// // main

// "use client";

// import React from "react";
// import Image from "next/image";
// import { Star } from "lucide-react";

// export default function ScaleUpTheme() {
//   const column1 = [
//     { number: "01", title: "AI in Healthcare & Life Sciences", desc: "Diagnostics, drug discovery, personalized medicine, hospital management." },
//     { number: "02", title: "AI in Finance & Fintech", desc: "Risk management, fraud detection, trading, blockchain, AI." },
//     { number: "03", title: "AI in Education & Skill Development", desc: "Adaptive learning, EdTech, skilling, AI tutors." },
//   ];

//   const column2 = [
//     { number: "04", title: "AI in Manufacturing & Industry 4.0", desc: "Smart factories, robotics, supply chain optimization." },
//     { number: "05", title: "AI in Government & Public Services", desc: "Smart governance, services, citizen analytics." },
//     { number: "06", title: "AI in Retail, E-commerce & Consumer Experience", desc: "Personalization, chatbots, inventory management." },
//     { number: "07", title: "AI in Agriculture & Food Security", desc: "Precision farming, crop monitoring, sustainability." },
//   ];

//   const column3 = [
//     { number: "08", title: "AI in Media, Entertainment & Creativity", desc: "Generative AI, gaming, content creation, IP solutions." },
//     { number: "09", title: "AI in Sustainability & Climate Action", desc: "Energy optimization, green tech, disaster prediction." },
//     { number: "10", title: "AI in Transport, Mobility & Smart Cities", desc: "Autonomous transport, urban planning, traffic management." },
//   ];

//   // Combine all columns for mobile rendering
//   const allItems = [...column1, ...column2, ...column3];

//   return (
// <main className="px-4 sm:px-5 md:px-5 lg:px-4 py-0 md:py-0 bg-[#FFFFFF]">
// {/* px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 ,,,,px-4 sm:px-5 md:px-6 lg:px-8*/}

//   <section
//     className="text-white py-16 px-6 md:px-20 rounded-3xl max-w-8xl mx-auto"
//     style={{ backgroundColor: "#202020",fontFamily:"Plus Jakarta Sans" }}
//     id="theme"
//   >
//     {/* ---------------- Desktop View ---------------- */}
//     <div className="hidden md:flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
//       <div>
//         <h1
//           className="font-semibold text-3xl md:text-5xl leading-[1.1]"
//           style={{ color: "#FFFFFF" ,fontFamily:"Plus Jakarta Sans"}}
//         >
//           ScaleUp Conclave 2026
//           <br />
//           <span className="font-semibold" style={{ color: "#FFFFFF" ,fontFamily:"Plus Jakarta Sans"}}>
//             The Theme
//           </span>
//         </h1>

//         <div className="flex items-start mt-4 max-w-2xl">
//           <div
//             className="border-l-[1.07px] pl-4"
//             style={{ borderColor: "#FFFFFF" }}
//           >
//             <p
//               className="text-sm md:text-base leading-relaxed"
//               style={{ color: "#FFFFFF",fontFamily:"Plus Jakarta Sans" }}
//             >
//               From diagnosing disease to designing cities — ScaleUp 2026 unveils
//               10 arenas where AI is rewriting the rules of human progress.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 md:mt-0">
//         {/* <div className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md" style={{fontFamily:"Plus Jakarta Sans"}}>
//           <Star size={16} color="#ECA723" fill="#ECA723" />
//           ScaleUp theme
//         </div> */}

// <div
//       className="flex items-center gap-2.5 bg-[#202020] rounded-2xl px-6 py-3 text-white text-sm md:-mt-20 font-medium shadow-2xl"
//       style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         background: "linear-gradient(145deg, #1e1e1e, #242424)",
//         boxShadow: `
//   inset 0 4px 8px rgba(255, 255, 255, 0.08),   
//   inset 0 -4px 8px rgba(0, 0, 0, 0.35),        
// `,
//         border: "1px solid #333",
//       }}
//     >
//       <Star size={18} fill="#ECA723" stroke="#ECA723" className="drop-shadow-sm" />
//       <span>ScaleUp theme</span>
//     </div>


//       </div>
//     </div>

//     {/* ---------------- Desktop Grid ---------------- */}
//     <div className="hidden md:grid grid-cols-3 gap-x-11 gap-y-8">
//       {[column1, column2, column3].map((column, colIndex) => (
//         <div key={colIndex} className="flex flex-col gap-8">
//           {column.map((item) => (
//             <div
//               key={item.number}
//               className="flex items-center gap-10"
//               style={{ fontFamily: "Plus Jakarta Sans" }}
//             >
//               {/* Number block with fixed width */}
//               <div className="flex items-center w-24">
//                 <Image
//                   src="/assets/images/Ellipse.svg"
//                   alt="ellipse"
//                   width={18}
//                   height={18}
//                   className="mr-2 mt-[6px]"
//                 />
//                 <div>
//                   <p className="text-[#9CF694] text-7xl font-bold leading-none" style={{fontFamily:"Plus Jakarta Sans"}}>
//                     {item.number}
//                   </p>
//                 </div>
//               </div>

//               {/* Text block */}
//               <div className="flex-1">
//                 <h3 className=" font-bold text-[16px] leading-snug" style={{fontFamily:"Plus Jakarta Sans",color:"#FFFFFF"}}>
//                   {item.title}
//                 </h3>
//                 <p className="  text-sm mt-1 leading-snug" style={{fontFamily:"Plus Jakarta Sans",color:"#FFFFFF"}}>
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>

//     {/* ---------------- Mobile View ---------------- */}
//     <div className="flex flex-col md:hidden gap-6">
//       {/* Star badge first */}
//       <div className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md w-max max-w-[85%]" style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         background: "linear-gradient(145deg, #1e1e1e, #242424)",
//         boxShadow: `
//           inset 0 2px 4px rgba(255, 255, 255, 0.05),
//           inset 0 -2px 4px rgba(0, 0, 0, 0.3),
//           0 8px 16px rgba(0, 0, 0, 0.4),
//           0 2px 4px rgba(0, 0, 0, 0.2)
//         `,
//         border: "1px solid #333",
//       }}>
        
// {/* <div
//       className="flex items-center gap-2.5 bg-[#202020] rounded-2xl px-6 py-3 text-white text-sm font-medium shadow-2xl"
//       style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         background: "linear-gradient(145deg, #1e1e1e, #242424)",
//         boxShadow: `
//           inset 0 2px 4px rgba(255, 255, 255, 0.05),
//           inset 0 -2px 4px rgba(0, 0, 0, 0.3),
//           0 8px 16px rgba(0, 0, 0, 0.4),
//           0 2px 4px rgba(0, 0, 0, 0.2)
//         `,
//         border: "1px solid #333",
//       }}
//     ></div> */}
//         <Star size={16} color="#ECA723" fill="#ECA723" style={{fontFamily:"Plus Jakarta Sans"}}/>
//         ScaleUp theme
//       </div>

//       {/* Title second */}
//       <h1
//         className="font-semibold text-3xl leading-[1.1]"
//         style={{ color: "#FFFFFF" ,fontFamily:"Plus Jakarta Sans"}}
//       >
//         ScaleUp Conclave 2026
//         <br />
//         <span className="font-semibold" style={{ color: "#FFFFFF",fontFamily:"Plus Jakarta Sans" }}>
//           The Theme
//         </span>
//       </h1>

//       {/* Full left-border description */}
//       <div
//         className="border-l-[1.07px] pl-4"
//         style={{ borderColor: "#FFFFFF" }}
//       >
//         <p
//           className="text-sm md:text-base leading-relaxed"
//           style={{ color: "#FFFFFF",fontFamily:"Plus Jakarta Sans" }}
//         >
//           From diagnosing disease to designing cities — ScaleUp 2026 unveils 10
//           arenas where AI is rewriting the rules of human progress.
//         </p>
//       </div>

//       {/* Grid items */}
//       <div className="flex flex-col gap-10">
//         {allItems.map((item) => (
//           <div key={item.number} className="flex items-center gap-10">
//             {/* Number block with fixed width */}
//             <div className="flex items-center w-20">
//               <Image
//                 src="/assets/images/Ellipse.svg"
//                 alt="ellipse"
//                 width={18}
//                 height={18}
//                 className="mr-2 mt-[6px]"
//               />
//               <span
//                 className="text-[#9CF694] text-6xl font-bold leading-none"
//                 style={{ fontFamily: "Plus Jakarta Sans" }}
//               >
//                 {item.number}
//               </span>
//             </div>

//             {/* Text block takes remaining space */}
//             <div className="flex-1">
//               <h3 className=" font-semibold text-[16px] leading-snug"  style={{ fontFamily: "Plus Jakarta Sans",color:"#FFFFFF" }}>
//                 {item.title}
//               </h3>
//               <p className="text-sm mt-1 leading-snug"  style={{ fontFamily: "Plus Jakarta Sans",color:"#FFFFFF" }}>
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

      
//     {/*  Mobile: group3.svg inside section at the bottom */}
//       <div className="flex justify-end mt-10">
//         <Image
//           src="/assets/images/group3.svg"
//           alt="group3"
//           width={66}
//           height={18}
//           className="block md:hidden"
//         />
//       </div>
//     </div>
//   </section>
//   <div className="hidden md:flex ml-6 justify-start mt-10">
//     <Image
//       src="/assets/images/group3.svg"
//       alt="group3"
//       width={100}
//       height={40}
//       className="hidden md:block"
//     />
//   </div>
// </main>
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

  // Combine all columns for mobile/tablet rendering
  const allItems = [...column1, ...column2, ...column3];

  return (
    <main className="px-4 sm:px-5 md:px-5 lg:px-4 py-0 md:py-0 bg-[#FFFFFF]">
      <section
        className="text-white py-8 md:py-16 px-6 md:px-8 lg:px-20 rounded-3xl max-w-8xl mx-auto"
        style={{ backgroundColor: "#202020", fontFamily: "Plus Jakarta Sans" }}
        id="theme"
      >
        {/* ---------------- Desktop View ---------------- */}
        <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div>
            <h1
              className="font-semibold text-3xl lg:text-5xl leading-[1.1]"
              style={{ color: "#FFFFFF", fontFamily: "Plus Jakarta Sans" }}
            >
              ScaleUp Conclave 2026
              <br />
              <span className="font-semibold" style={{ color: "#FFFFFF" }}>
                The Theme
              </span>
            </h1>

            <div className="flex items-start mt-4 max-w-2xl">
              <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
                <p
                  className="text-sm lg:text-base leading-relaxed"
                  style={{ color: "#FFFFFF" }}
                >
                  From diagnosing disease to designing cities — ScaleUp 2026 unveils
                  10 arenas where AI is rewriting the rules of human progress.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div
              className="flex items-center gap-2.5 bg-[#202020] rounded-2xl px-6 py-3 text-white text-sm font-medium shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #1e1e1e, #242424)",
                boxShadow: `
                  inset 0 4px 8px rgba(255, 255, 255, 0.08),   
                  inset 0 -4px 8px rgba(0, 0, 0, 0.35)
                `,
                border: "1px solid #333",
              }}
            >
              <Star size={18} fill="#ECA723" stroke="#ECA723" className="drop-shadow-sm" />
              <span>ScaleUp theme</span>
            </div>
          </div>
        </div>

        {/* ---------------- Desktop Grid ---------------- */}
        <div className="hidden lg:grid grid-cols-3 gap-x-11 gap-y-8">
          {[column1, column2, column3].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {column.map((item) => (
                <div key={item.number} className="flex items-center gap-10">
                  <div className="flex items-center w-24">
                    <Image
                      src="/assets/images/Ellipse.svg"
                      alt="ellipse"
                      width={18}
                      height={18}
                      className="mr-2 mt-[6px]"
                    />
                    <p className="text-[#9CF694] text-7xl font-bold leading-none">
                      {item.number}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[16px] leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm mt-1 leading-snug text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ---------------- Tablet View (Portrait) ---------------- */}
        <div className="hidden md:flex lg:hidden flex-col gap-6">
          <div
            className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md w-max"
            style={{
              background: "linear-gradient(145deg, #1e1e1e, #242424)",
              boxShadow: `
                inset 0 2px 4px rgba(255, 255, 255, 0.05),
                inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                0 8px 16px rgba(0, 0, 0, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.2)
              `,
              border: "1px solid #333",
            }}
          >
            <Star size={16} color="#ECA723" fill="#ECA723" />
            ScaleUp theme
          </div>

          <h1 className="font-semibold text-3xl leading-[1.1] text-white">
            ScaleUp Conclave 2026
            <br />
            <span className="font-semibold text-white">The Theme</span>
          </h1>

          <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
            <p className="text-sm leading-relaxed text-white">
              From diagnosing disease to designing cities — ScaleUp 2026 unveils 10
              arenas where AI is rewriting the rules of human progress.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10">

            {allItems.map((item) => (
              <div key={item.number} className="flex items-center gap-10">
                <div className="flex items-center w-20">
                  <Image
                    src="/assets/images/Ellipse.svg"
                    alt="ellipse"
                    width={18}
                    height={18}
                    className="mr-2 mt-[6px]"
                  />
                  <span className="text-[#9CF694] text-6xl font-bold leading-none">
                    {item.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-[16px] leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1 leading-snug text-white">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <Image
              src="/assets/images/group3.svg"
              alt="group3"
              width={66}
              height={18}
              className="block"
            />
          </div>
        </div>

        {/* ---------------- Mobile View ---------------- */}
        <div className="flex flex-col md:hidden gap-6">
          <div
            className="flex items-center gap-2 bg-[#202020] border rounded-xl border-gray-700 px-5 py-2 text-sm shadow-md w-max"
            style={{
              background: "linear-gradient(145deg, #1e1e1e, #242424)",
              boxShadow: `
                inset 0 2px 4px rgba(255, 255, 255, 0.05),
                inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                0 8px 16px rgba(0, 0, 0, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.2)
              `,
              border: "1px solid #333",
            }}
          >
            <Star size={16} color="#ECA723" fill="#ECA723" />
            ScaleUp theme
          </div>

          <h1 className="font-semibold text-3xl leading-[1.1] text-white">
            ScaleUp Conclave 2026
            <br />
            <span className="font-semibold text-white">The Theme</span>
          </h1>

          <div className="border-l-[1.07px] pl-4" style={{ borderColor: "#FFFFFF" }}>
            <p className="text-sm leading-relaxed text-white">
              From diagnosing disease to designing cities — ScaleUp 2026 unveils 10
              arenas where AI is rewriting the rules of human progress.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {allItems.map((item) => (
              <div key={item.number} className="flex items-center gap-10">
                <div className="flex items-center w-20">
                  <Image
                    src="/assets/images/Ellipse.svg"
                    alt="ellipse"
                    width={18}
                    height={18}
                    className="mr-2 mt-[6px]"
                  />
                  <span className="text-[#9CF694] text-6xl font-bold leading-none">
                    {item.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-[16px] leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1 leading-snug text-white">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <Image
              src="/assets/images/group3.svg"
              alt="group3"
              width={66}
              height={18}
              className="block"
            />
          </div>
        </div>
      </section>

      <div className="hidden lg:flex ml-6 justify-start mt-10">
        <Image
          src="/assets/images/group3.svg"
          alt="group3"
          width={100}
          height={40}
          className="hidden lg:block"
        />
      </div>
    </main>
  );
}
