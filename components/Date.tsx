
// // vercal
// // "use client";

// // import React, { useEffect, useState, useMemo } from "react";
// // import Image from "next/image"; // use next/image for optimization

// // export default function DateSection() {
// //   //  useMemo to ensure the Date object is stable across renders
// //   const targetDate = useMemo(() => new Date("2026-01-17T09:00:00"), []);

// //   const [timeLeft, setTimeLeft] = useState({
// //     days: "00",
// //     hours: "00",
// //     minutes: "00",
// //     seconds: "00",
// //   });

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const now = new Date();
// //       const diff = targetDate.getTime() - now.getTime();

// //       if (diff <= 0) {
// //         clearInterval(interval);
// //         setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
// //         return;
// //       }

// //       const totalSeconds = Math.floor(diff / 1000);
// //       const seconds = totalSeconds % 60;
// //       const totalMinutes = Math.floor(totalSeconds / 60);
// //       const minutes = totalMinutes % 60;
// //       const totalHours = Math.floor(totalMinutes / 60);
// //       const hours = totalHours % 24;
// //       const days = Math.floor(totalHours / 24);

// //       setTimeLeft({
// //         days: String(days).padStart(2, "0"),
// //         hours: String(hours).padStart(2, "0"),
// //         minutes: String(minutes).padStart(2, "0"),
// //         seconds: String(seconds).padStart(2, "0"),
// //       });
// //     }, 1000);

// //     return () => clearInterval(interval);
// //   }, [targetDate]); //  safe now since targetDate is memoized

// //   return (
// //     <section
// //       className="w-full px-4 sm:px-8 md:px-12 py-10"
// //       style={{ backgroundColor: "var(--color-bg)",fontFamily:"Plus Jakarta Sans" }}
// //     >
// //       {/* ---------------- Desktop View ---------------- */}
// //       <div className="hidden md:flex flex-row items-center justify-between gap-8">
// //         {/* Stats Section (Left) */}
// //         <div
// //           className="font-gilmer leading-[70px] text-[60px] text-left"
// //           style={{ color: "var(--color-text)", fontWeight: "600" }}
// //         >
// //           <p className="flex items-center gap-2">
// //             2 Days
// //             <Image
// //               src="/assets/images/repeat.svg"
// //               alt="rose-icon"
// //               width={36}
// //               height={36}
// //               className="h-9 w-9"
// //             />
// //           </p>
// //           <p className="flex items-center gap-2">
// //             50+ Speakers
// //             <Image
// //               src="/assets/images/union.svg"
// //               alt="green-icon"
// //               width={36}
// //               height={36}
// //               className="h-9 w-9"
// //             />
// //           </p>
// //           <p className="flex items-center gap-2">
// //             5000+ Innovators
// //             <Image
// //               src="/assets/images/group1.svg"
// //               alt="blue-icon"
// //               width={36}
// //               height={36}
// //               className="h-9 w-9"
// //             />
// //           </p>
// //         </div>

// //         {/* Timer Section (Right) */}
// //         <div className="font-gilmer text-center">
// //           <div className="flex justify-center gap-4 flex-nowrap">
// //             {Object.entries(timeLeft).map(([label, value], index) => (
// //               <div
// //                 key={index}
// //                 className="flex flex-col items-center min-w-[90px]"
// //               >
// //                 <span
// //                   className="font-sans font-plusjakartasans text-[112.66px] leading-[124.88px]"
// //                   style={{ color: "#000000" }}
// //                 >
// //                   {value}
// //                 </span>
// //                 <div className="p-3 -mt-10"style={{backgroundColor:"white"}}>
// //                 <span
// //                   className="border rounded-full px-14 py-1 -mt-10 text-base"
// //                   style={{
// //                     backgroundColor: "#FFFFFF",
// //                     borderColor: "#000000",
// //                     color: "#000000",
// //                   }}
// //                 >
// //                   {label}
// //                 </span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p
// //             className="font-gilmer mt-3 text-xl"
// //             style={{ color: "#4B5563" }}
// //           >
// //             Kerala&apos;s biggest AI & Technology Conclave
// //           </p>
// //         </div>
// //       </div>

// //       {/* ---------------- Mobile View ---------------- */}
// //       <div className="flex flex-col md:hidden items-center justify-center gap-6">
// //   {/* Timer Section (Top) */}
// //   <div className="font-gilmer text-center w-full">
// //     <div className="flex justify-center gap-2 sm:gap-4 flex-nowrap">
// //       {Object.entries(timeLeft).map(([label, value], index) => (
// //         <div
// //           key={index}
// //           className="flex flex-col items-center min-w-[60px]" // smaller width
// //         >
// //           <span
// //             className="font-sans font-normal text-[48px] sm:text-[64px] leading-[60px] sm:leading-[80px]" // ↓ reduced from 70/90
// //             style={{ color: "#000000" }}
// //           >
// //             {value}
// //           </span>
// //           <div className="p-2 -mt-6" style={{ backgroundColor: "white" }}>
// //             <span
// //               className="border rounded-full sm:px-5 px-4 py-1 sm:py-1 -mt-4 sm:-mt-2 text-[10px] sm:text-xs" // smaller label
// //               style={{
// //                 backgroundColor: "#FFFFFF",
// //                 borderColor: "#000000",
// //                 color: "#000000",
// //               }}
// //             >
// //               {label}
// //             </span>
// //           </div>
// //         </div>
// //       ))}
// //     </div>

// //     <p
// //       className="font-gilmer mt-2 text-[10px] sm:text-xs"
// //       style={{ color: "#4B5563" }}
// //     >
// //       Kerala&apos;s biggest AI & Technology Conclave
// //     </p>
// //   </div>

// //   {/* Stats Section (Below) */}
// //   <div
// //     className="font-gilmer leading-[32px] text-xl sm:text-2xl text-left w-full px-4"
// //     style={{ color: "var(--color-text)", fontWeight: "600" }}
// //   >
// //     <p className="flex items-center gap-2 text-2xl sm:text-3xl">
// //       2 Days
// //       <Image
// //         src="/assets/images/repeat.svg"
// //         alt="rose-icon"
// //         width={24}
// //         height={24}
// //         className="h-5 w-5 sm:h-6 sm:w-6"
// //       />
// //     </p>
// //     <p className="flex items-center gap-2 text-2xl sm:text-3xl">
// //       50+ Speakers
// //       <Image
// //         src="/assets/images/union.svg"
// //         alt="green-icon"
// //         width={24}
// //         height={24}
// //         className="h-5 w-5 sm:h-6 sm:w-6"
// //       />
// //     </p>
// //     <p className="flex items-center gap-2 text-2xl sm:text-3xl">
// //       5000+ Innovators
// //       <Image
// //         src="/assets/images/group1.svg"
// //         alt="blue-icon"
// //         width={24}
// //         height={24}
// //         className="h-5 w-5 sm:h-6 sm:w-6"
// //       />
// //     </p>
// //   </div>
// // </div>

// //     </section>
// //   );
// // }














// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import Image from "next/image";

// export default function DateSection() {
//   const targetDate = useMemo(() => new Date("2026-01-17T09:00:00"), []);

//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const diff = targetDate.getTime() - now.getTime();

//       if (diff <= 0) {
//         clearInterval(interval);
//         setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
//         return;
//       }

//       const totalSeconds = Math.floor(diff / 1000);
//       const seconds = totalSeconds % 60;
//       const totalMinutes = Math.floor(totalSeconds / 60);
//       const minutes = totalMinutes % 60;
//       const totalHours = Math.floor(totalMinutes / 60);
//       const hours = totalHours % 24;
//       const days = Math.floor(totalHours / 24);

//       setTimeLeft({
//         days: String(days).padStart(2, "0"),
//         hours: String(hours).padStart(2, "0"),
//         minutes: String(minutes).padStart(2, "0"),
//         seconds: String(seconds).padStart(2, "0"),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return (
//     <section
//       className="w-full px-4 sm:px-8 md:px-10 py-10"
//       style={{ backgroundColor: "var(--color-bg)", fontFamily: "Plus Jakarta Sans" }}
//     >
//       {/* ---------------- Desktop View ---------------- */}
//       <div className="hidden lg:flex flex-row items-center justify-between gap-8">
//         {/* Stats Section (Left) */}
//         <div
//           className="font-gilmer leading-[70px] text-[60px] text-left"
//           style={{ color: "var(--color-text)", fontWeight: "600" }}
//         >
//           <p className="flex items-center gap-2">
//             2 Days
//             <Image src="/assets/images/repeat.svg" alt="rose-icon" width={36} height={36} className="h-9 w-9" />
//           </p>
//           <p className="flex items-center gap-2">
//             50+ Speakers
//             <Image src="/assets/images/union.svg" alt="green-icon" width={36} height={36} className="h-9 w-9" />
//           </p>
//           <p className="flex items-center gap-2">
//             5000+ Innovators
//             <Image src="/assets/images/group1.svg" alt="blue-icon" width={36} height={36} className="h-9 w-9" />
//           </p>
//         </div>

//         {/* Timer Section (Right) */}
//         <div className="font-gilmer text-center">
//           <div className="flex justify-center gap-4 flex-nowrap">
//             {Object.entries(timeLeft).map(([label, value], index) => (
//               <div key={index} className="flex flex-col items-center min-w-[90px]">
//                 <span className="font-sans text-[112.66px] leading-[124.88px]" style={{ color: "#000000" }}>
//                   {value}
//                 </span>
//                 <div className="p-3 -mt-10 bg-white">
//                   <span
//                     className="border rounded-full px-14 py-1 text-base"
//                     style={{ backgroundColor: "#FFFFFF", borderColor: "#000000", color: "#000000" }}
//                   >
//                     {label}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p className="font-gilmer mt-3 text-xl" style={{ color: "#4B5563" }}>
//             Kerala&apos;s biggest AI & Technology Conclave
//           </p>
//         </div>
//       </div>

//       {/* ---------------- Mobile + Tablet View ---------------- */}
//       <div className="flex flex-col lg:hidden items-center justify-center gap-8">
//         {/* Timer Section (Top) */}
//         <div className="font-gilmer text-center w-full">
//           <div className="flex justify-center gap-3 sm:gap-6 flex-nowrap">
//             {Object.entries(timeLeft).map(([label, value], index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px]"
//               >
//                 <span
//                   className="font-sans font-normal 
//                   text-[48px] sm:text-[64px] md:text-[80px] 
//                   leading-[60px] sm:leading-[80px] md:leading-[96px]"
//                   style={{ color: "#000000" }}
//                 >
//                   {value}
//                 </span>
//                 <div className="p-2 sm:p-3 md:p-4 -mt-6 sm:-mt-8 md:-mt-10 bg-white">
//                   <span
//                     className="border rounded-full 
//                     px-4 sm:px-6 md:px-8 
//                     py-1 text-[10px] sm:text-xs md:text-sm"
//                     style={{
//                       backgroundColor: "#FFFFFF",
//                       borderColor: "#000000",
//                       color: "#000000",
//                     }}
//                   >
//                     {label}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <p
//             className="font-gilmer mt-3 
//             text-[10px] sm:text-xs md:text-base"
//             style={{ color: "#4B5563" }}
//           >
//             Kerala&apos;s biggest AI & Technology Conclave
//           </p>
//         </div>

//         {/* Stats Section (Below) */}
//         <div
//           className="font-gilmer text-left w-full px-4 
//           text-xl sm:text-2xl md:text-3xl 
//           leading-[32px] sm:leading-[40px] md:leading-[48px]"
//           style={{ color: "var(--color-text)", fontWeight: "600" }}
//         >
//           <p className="flex items-center gap-2">
//             2 Days
//             <Image src="/assets/images/repeat.svg" alt="rose-icon" width={30} height={30} className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8" />
//           </p>
//           <p className="flex items-center gap-2">
//             50+ Speakers
//             <Image src="/assets/images/union.svg" alt="green-icon" width={30} height={30} className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8" />
//           </p>
//           <p className="flex items-center gap-2">
//             5000+ Innovators
//             <Image src="/assets/images/group1.svg" alt="blue-icon" width={30} height={30} className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8" />
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function DateSection() {
  // Target date for countdown
  const targetDate = useMemo(() => new Date("2026-01-17T09:00:00"), []);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const days = Math.floor(totalHours / 24);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="w-full px-4 sm:px-8 md:px-10 md:py-10 py-3 bg-[#FFFFFF] font-['Plus_Jakarta_Sans']">
      {/* ---------------- Desktop View (lg and above) ---------------- */}
      <div className="hidden lg:flex flex-row items-center justify-between gap-8 text-[#000]">
        {/* Left Side - Stats */}
        <div className="font-gilmer leading-[70px] text-[60px] font-semibold text-left">
          <p className="flex items-center gap-2">
            2 Days
            <Image src="/assets/images/repeat.svg" alt="rose-icon" width={36} height={36} />
          </p>
          <p className="flex items-center gap-2">
            50+ Speakers
            <Image src="/assets/images/union.svg" alt="green-icon" width={36} height={36} />
          </p>
          <p className="flex items-center gap-2">
            5000+ Innovators
            <Image src="/assets/images/group1.svg" alt="blue-icon" width={36} height={36} />
          </p>
        </div>

        {/* Right Side - Timer */}
        <div className="font-gilmer text-center">
          <div className="flex justify-center gap-4 flex-nowrap">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center min-w-[90px]">
                <span className="font-sans text-[112px] leading-[124px] text-black">{value}</span>
                <div className="p-3 -mt-10 bg-white">
                  <span className="border border-black rounded-full px-14 py-1 text-base bg-white text-black">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xl text-gray-600">
            Kerala&apos;s biggest AI & Technology Conclave
          </p>
        </div>
      </div>

      {/* ---------------- Tablet View (md to lg) ---------------- */}
      <div className="hidden md:flex lg:hidden flex-col items-center justify-center gap-8 text-[#000]">
  {/* Timer Section */}
  <div className="font-gilmer text-center w-full">
    <div className="flex justify-center gap-5 sm:gap-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center min-w-[75px]">
          <span className=" text-[90px] leading-[88px]">{value}</span>
          <div className="p-2 -mt-5 bg-white">
            <span className="border border-black rounded-full px-9 py-1.5 text-sm bg-white text-black">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-4 text-lg text-gray-600">
      Kerala&apos;s biggest AI & Technology Conclave
    </p>
  </div>

  {/* Stats Section */}
  <div className="font-gilmer font-semibold leading-[54px] text-5xl text-left w-full px-8">
    <p className="flex items-center gap-3">
      2 Days
      <Image src="/assets/images/repeat.svg" alt="rose-icon" width={36} height={36} />
    </p>
    <p className="flex items-center gap-3">
      50+ Speakers
      <Image src="/assets/images/union.svg" alt="green-icon" width={36} height={36} />
    </p>
    <p className="flex items-center gap-3">
      5000+ Innovators
      <Image src="/assets/images/group1.svg" alt="blue-icon" width={36} height={36} />
    </p>
  </div>
</div>


      {/* ---------------- Mobile View (below md) ---------------- */}
      <div className="flex flex-col md:hidden items-center justify-center gap-6 text-[#000]">
        {/* Timer Section */}
        <div className="font-gilmer text-center w-full">
          <div className="flex justify-center gap-2 sm:gap-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center min-w-[60px]">
                <span className="font-sans text-[48px] leading-[60px]">{value}</span>
                <div className="p-2 -mt-6 bg-white">
                  <span className="border border-black rounded-full px-4 py-1 text-[10px] bg-white text-black">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-gray-600">
            Kerala&apos;s biggest AI & Technology Conclave
          </p>
        </div>

        {/* Stats Section */}
        <div className="font-gilmer font-semibold leading-[32px] text-xl text-left w-full px-4">
          <p className="flex items-center gap-2 text-2xl">
            2 Days
            <Image src="/assets/images/repeat.svg" alt="rose-icon" width={24} height={24} />
          </p>
          <p className="flex items-center gap-2 text-2xl">
            50+ Speakers
            <Image src="/assets/images/union.svg" alt="green-icon" width={24} height={24} />
          </p>
          <p className="flex items-center gap-2 text-2xl">
            5000+ Innovators
            <Image src="/assets/images/group1.svg" alt="blue-icon" width={24} height={24} />
          </p>
        </div>
      </div>
    </section>
  );
}
