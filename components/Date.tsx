// "use client";

// import React, { useEffect, useState } from "react";

// function DateSection() {
//   const targetDate = new Date("2026-01-17T09:00:00");
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
//       className="w-full px-4 sm:px-8 md:px-12 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
//       style={{ backgroundColor: "var(--color-bg)" }}
//     >
//       {/* Stats (below on mobile, left on desktop) */}
//       <div
//         className="font-gilmer leading-[42px] md:leading-[85.97px] p-4 text-2xl sm:text-3xl md:text-[60px] text-left"
//         style={{ color: "var(--color-text)", fontWeight: "600" }}
//       >
//         <p className="flex items-center justify-start gap-2 text-3xl md:text-[60px]">
//           2 Days
//           <img
//             src="/assets/images/repeat.svg"
//             alt="rose-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//         <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
//           50+ Speakers
//           <img
//             src="/assets/images/union.svg"
//             alt="green-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//         <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
//           5000+ Innovators
//           <img
//             src="/assets/images/group1.svg"
//             alt="blue-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//       </div>

//       {/* Timer (top on mobile, right on desktop) */}
//       <div className="font-gilmer text-center w-full md:w-auto mt-2 md:mt-0">
//         <div className="flex justify-center gap-2 md:gap-4 flex-nowrap overflow-x-auto">
//           {Object.entries(timeLeft).map(([label, value], index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center min-w-[50px] md:min-w-auto"
//             >
//               <span
//                 className="text-4xl  sm:text-4xl md:text-8xl tracking-[0.10em]"
//                 style={{ color: "#000000", fontWeight: "700" }}
//               >
//                 {value}
//               </span>
//               <span
//                 className="border rounded-full sm:px-6 px-5 py-1 md:px-14 md:py-1 -mt-2 sm:-mt-2 md:-mt-4 text-xs sm:text-sm md:text-base"
//                 style={{
//                   backgroundColor: "#FFFFFF",
//                   borderColor: "#000000",
//                   color: "#000000",
//                 }}
//               >
//                 {label}
//               </span>
//             </div>
//           ))}
//         </div>
//         <p
//           className="font-gilmer mt-3 text-xs sm:text-sm md:text-xl"
//           style={{ color: "#4B5563" }}
//         >
//           Kerala's biggest AI & Technology Conclave
//         </p>
//       </div>
//     </section>
//   );
// }

// export default DateSection;





// "use client";

// import React, { useEffect, useState } from "react";

// function DateSection() {
//   const targetDate = new Date("2026-01-17T09:00:00");
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
//       className="w-full px-4 sm:px-8 md:px-12 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 md:gap-10"
//       style={{ backgroundColor: "var(--color-bg)" }}
//     >
//       {/* Stats (below on mobile, left on desktop) */}
//       <div
//         className="font-gilmer leading-[42px] md:leading-[85.97px] p-4 text-2xl sm:text-3xl md:text-[60px] text-left"
//         style={{ color: "var(--color-text)", fontWeight: "600" }}
//       >
//         <p className="flex items-center justify-start gap-2 text-3xl md:text-[60px]">
//           2 Days
//           <img
//             src="/assets/images/repeat.svg"
//             alt="rose-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//         <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
//           50+ Speakers
//           <img
//             src="/assets/images/union.svg"
//             alt="green-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//         <p className="flex items-center justify-start gap-2 text-3xl sm:text-2xl md:text-[60px]">
//           5000+ Innovators
//           <img
//             src="/assets/images/group1.svg"
//             alt="blue-icon"
//             className="h-6 w-6 md:h-9 md:w-9"
//           />
//         </p>
//       </div>

//       {/* Timer (top on mobile, right on desktop) */}
//       <div className="font-gilmer text-center w-full md:w-auto mt-2 md:mt-0">
//       <div className="flex justify-center gap-2 md:gap-4 flex-nowrap">
//   {Object.entries(timeLeft).map(([label, value], index) => (
//     <div
//       key={index}
//       className="flex flex-col items-center min-w-[70px] md:min-w-auto"
//     >
//       <span
//         className="font-sans font-normal text-[112.66px] leading-[124.88px] tracking-[0px]"
//         style={{ color: "#000000" }}
//       >
//         {value}
//       </span>
//       <span
//         className="border rounded-full sm:px-6 px-5 py-1 md:px-14 md:py-1 -mt-2 sm:-mt-2 md:-mt-10 text-xs sm:text-sm md:text-base"
//         style={{
//           backgroundColor: "#FFFFFF",
//           borderColor: "#000000",
//           color: "#000000",
//         }}
//       >
//         {label}
//       </span>
//     </div>
//   ))}
// </div>

//         <p
//           className="font-gilmer mt-3 text-xs sm:text-sm md:text-xl"
//           style={{ color: "#4B5563" }}
//         >
//           Kerala's biggest AI & Technology Conclave
//         </p>
//       </div>
//     </section>
//   );
// }

// export default DateSection;




// responsive(without vercal)

// "use client";

// import React, { useEffect, useState } from "react";

// export default function DateSection() {
//   const targetDate = new Date("2026-01-17T09:00:00");
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
//       className="w-full px-4 sm:px-8 md:px-12 py-10"
//       style={{ backgroundColor: "var(--color-bg)" }}
//     >

//       {/* ---------------- Desktop View ---------------- */}
//       <div className="hidden md:flex flex-row items-center justify-between gap-10">
        
//         {/* Stats Section (Left) */}
//         <div
//           className="font-gilmer leading-[85.97px] text-[60px] text-left"
//           style={{ color: "var(--color-text)", fontWeight: "600" }}
//         >
//           <p className="flex items-center gap-2">
//             2 Days
//             <img
//               src="/assets/images/repeat.svg"
//               alt="rose-icon"
//               className="h-9 w-9"
//             />
//           </p>
//           <p className="flex items-center gap-2">
//             50+ Speakers
//             <img
//               src="/assets/images/union.svg"
//               alt="green-icon"
//               className="h-9 w-9"
//             />
//           </p>
//           <p className="flex items-center gap-2">
//             5000+ Innovators
//             <img
//               src="/assets/images/group1.svg"
//               alt="blue-icon"
//               className="h-9 w-9"
//             />
//           </p>
//         </div>

//         {/* Timer Section (Right) */}
//         <div className="font-gilmer text-center">
//           <div className="flex justify-center gap-4 flex-nowrap">
//             {Object.entries(timeLeft).map(([label, value], index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center min-w-[90px]"
//               >
//                 <span
//                   className="font-sans font-plusjakartasans text-[112.66px] leading-[124.88px]"
//                   style={{ color: "#000000" }}
//                 >
//                   {value}
//                 </span>
//                 <span
//                   className="border rounded-full px-14 py-1 -mt-10 text-base"
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     borderColor: "#000000",
//                     color: "#000000",
//                   }}
//                 >
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <p
//             className="font-gilmer mt-3 text-xl"
//             style={{ color: "#4B5563" }}
//           >
//             Kerala's biggest AI & Technology Conclave
//           </p>
//         </div>
//       </div>

//       {/* ---------------- Mobile View ---------------- */}
//       <div className="flex flex-col md:hidden items-center justify-center gap-6">
        
//         {/* Timer Section (Top) */}
//         <div className="font-gilmer text-center w-full">
//           <div className="flex justify-center gap-2 sm:gap-4 flex-nowrap">
//             {Object.entries(timeLeft).map(([label, value], index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center min-w-[70px]"
//               >
//                 <span
//                   className="font-sans font-normal text-[70px] sm:text-[90px] leading-[90px] sm:leading-[110px]"
//                   style={{ color: "#000000" }}
//                 >
//                   {value}
//                 </span>
//                 <span
//                   className="border rounded-full sm:px-6 px-5 py-1 sm:py-1 -mt-8 sm:-mt-2 text-xs sm:text-sm"
//                   style={{
//                     backgroundColor: "#FFFFFF",
//                     borderColor: "#000000",
//                     color: "#000000",
//                   }}
//                 >
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <p
//             className="font-gilmer mt-3 text-xs sm:text-sm"
//             style={{ color: "#4B5563" }}
//           >
//             Kerala's biggest AI & Technology Conclave
//           </p>
//         </div>

//         {/* Stats Section (Below) */}
//         <div
//           className="font-gilmer leading-[42px] text-2xl sm:text-3xl text-left w-full px-4"
//           style={{ color: "var(--color-text)", fontWeight: "600" }}
//         >
//           <p className="flex items-center gap-2 text-3xl sm:text-4xl">
//             2 Days
//             <img
//               src="/assets/images/repeat.svg"
//               alt="rose-icon"
//               className="h-6 w-6 sm:h-8 sm:w-8"
//             />
//           </p>
//           <p className="flex items-center gap-2 text-3xl sm:text-4xl">
//             50+ Speakers
//             <img
//               src="/assets/images/union.svg"
//               alt="green-icon"
//               className="h-6 w-6 sm:h-8 sm:w-8"
//             />
//           </p>
//           <p className="flex items-center gap-2 text-3xl sm:text-4xl">
//             5000+ Innovators
//             <img
//               src="/assets/images/group1.svg"
//               alt="blue-icon"
//               className="h-6 w-6 sm:h-8 sm:w-8"
//             />
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

// vercal
"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image"; // ✅ use next/image for optimization

export default function DateSection() {
  // ✅ useMemo to ensure the Date object is stable across renders
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
  }, [targetDate]); // ✅ safe now since targetDate is memoized

  return (
    <section
      className="w-full px-4 sm:px-8 md:px-12 py-10"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:flex flex-row items-center justify-between gap-10">
        {/* Stats Section (Left) */}
        <div
          className="font-gilmer leading-[85.97px] text-[60px] text-left"
          style={{ color: "var(--color-text)", fontWeight: "600" }}
        >
          <p className="flex items-center gap-2">
            2 Days
            <Image
              src="/assets/images/repeat.svg"
              alt="rose-icon"
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </p>
          <p className="flex items-center gap-2">
            50+ Speakers
            <Image
              src="/assets/images/union.svg"
              alt="green-icon"
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </p>
          <p className="flex items-center gap-2">
            5000+ Innovators
            <Image
              src="/assets/images/group1.svg"
              alt="blue-icon"
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </p>
        </div>

        {/* Timer Section (Right) */}
        <div className="font-gilmer text-center">
          <div className="flex justify-center gap-4 flex-nowrap">
            {Object.entries(timeLeft).map(([label, value], index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[90px]"
              >
                <span
                  className="font-sans font-plusjakartasans text-[112.66px] leading-[124.88px]"
                  style={{ color: "#000000" }}
                >
                  {value}
                </span>
                <span
                  className="border rounded-full px-14 py-1 -mt-10 text-base"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#000000",
                    color: "#000000",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p
            className="font-gilmer mt-3 text-xl"
            style={{ color: "#4B5563" }}
          >
            Kerala&apos;s biggest AI & Technology Conclave
          </p>
        </div>
      </div>

      {/* ---------------- Mobile View ---------------- */}
      <div className="flex flex-col md:hidden items-center justify-center gap-6">
        {/* Timer Section (Top) */}
        <div className="font-gilmer text-center w-full">
          <div className="flex justify-center gap-2 sm:gap-4 flex-nowrap">
            {Object.entries(timeLeft).map(([label, value], index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[70px]"
              >
                <span
                  className="font-sans font-normal text-[70px] sm:text-[90px] leading-[90px] sm:leading-[110px]"
                  style={{ color: "#000000" }}
                >
                  {value}
                </span>
                <span
                  className="border rounded-full sm:px-6 px-5 py-1 sm:py-1 -mt-8 sm:-mt-2 text-xs sm:text-sm"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#000000",
                    color: "#000000",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-gilmer mt-3 text-xs sm:text-sm"
            style={{ color: "#4B5563" }}
          >
            Kerala&apos;s biggest AI & Technology Conclave
          </p>
        </div>

        {/* Stats Section (Below) */}
        <div
          className="font-gilmer leading-[42px] text-2xl sm:text-3xl text-left w-full px-4"
          style={{ color: "var(--color-text)", fontWeight: "600" }}
        >
          <p className="flex items-center gap-2 text-3xl sm:text-4xl">
            2 Days
            <Image
              src="/assets/images/repeat.svg"
              alt="rose-icon"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
          </p>
          <p className="flex items-center gap-2 text-3xl sm:text-4xl">
            50+ Speakers
            <Image
              src="/assets/images/union.svg"
              alt="green-icon"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
          </p>
          <p className="flex items-center gap-2 text-3xl sm:text-4xl">
            5000+ Innovators
            <Image
              src="/assets/images/group1.svg"
              alt="blue-icon"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
          </p>
        </div>
      </div>
    </section>
  );
}





