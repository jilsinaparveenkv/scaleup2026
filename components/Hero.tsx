// // main

// "use client";
// import React from "react";

// function Hero() {
//   return (
//     <section className="relative w-full overflow-hidden">

//       {/* --- DESKTOP / TABLET VIEW --- */}
//       <div className="hidden md:block">
//         <div className="text-center md:text-right mb-8 p-5 relative z-2">
//           {/* First Line */}
//           <h1 className="text-xl sm:text-3xl md:text-[90px] mb-3 md:mb-20 flex items-center justify-center md:justify-end gap-3 pl-0 mr-0 md:mr-25">
//             <span style={{ color: "#418CFF", fontWeight: 10 }} className="font-gilmer">
//               ScaleUp Conclave
//             </span>
//             <img
//               src="/assets/images/v.svg"
//               alt="icon"
//               className="inline-block w-5 h-5 sm:w-8 sm:h-8 md:w-[60px] md:h-[60px]"
//             />
//           </h1>

//           {/* Second Line */}
//           <h1
//             className="text-4xl sm:text-6xl -mb-8 -mt-2 md:text-[180px] md:-mt-28 md:mb-5 font-gilmer relative z-0 text-center"
//             style={{ color: "#4028C8" }}
//           >
//             <span className="sm:text-6xl md:text-[140px] lg:text-[170px]" style={{ color: "#060832" }}>
//               The
//             </span>{" "}
//             <span className="tracking-tight md:text-[140px] lg:text-[170px]" style={{ fontWeight: "700" }}>
//               Ai Summit
//             </span>
//           </h1>
//         </div>

//         {/* --- Card Wrapper --- */}
//         <div className="p-3 -mt-10"style={{backgroundColor:"white"}}>
//         <div className="relative w-full z-10 px-1" style={{ color: "#FFFFFF" }}>
//           <div className="mt-20 md:!mt-[-80px] overflow-visible w-full rounded-3xl md:rounded-4xl flex flex-col justify-between relative leading-normal md:leading-relaxed min-h-[550px] p-10 md:p-10">
//   <video
//     src="/assets/videos/herobg.mp4"
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute inset-0 w-full h-full object-cover object-[center_60%] -z-10 rounded-3xl md:rounded-4xl "
//   />


//             {/* Content Wrapper (keeps spacing nice) */}
//             <div className="relative z-10 px-6 md:px-12 lg:px-24 py-12">

//               {/* Top Right Icon */}
//               <div className="absolute top-6 right-6 w-16 sm:w-16 md:w-[120px]">
//                 <img
//                   src="/assets/images/img_icon3.svg"
//                   alt="icons"
//                   className="w-full h-auto block"
//                 />
//               </div>

//               {/* Top Section of Card */}
//               <div>
//                 {/* Tagline */}
//                 <div className="w-full md:w-1/2 p-4 md:p-6 rounded-4xl shadow-sm" style={{ backgroundColor: "#FFFFFF1A", color: "#FFFFFF" }}>
//                   <p className="font-gilmer text-2xl sm:text-3xl md:text-5xl font-normal leading-snug md:leading-normal">
//                     ScaleUp <br className="block md:hidden" /> Conclave{" "}
//                     <span className="font-gilmer font-bold decoration-[3px]" style={{ textDecorationColor: "#9CF694" }}>
//                       2026
//                     </span>{" "}
//                     <br /> is back and this <br className="block md:hidden" /> time,{" "}
//                     <span className="font-gilmer font-bold decoration-[3px]" style={{ textDecorationColor: "#9CF694" }}>
//                       it’s AI.
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Section of Card */}
//               <div className="mt-8 md:mt-0 flex flex-col items-start" style={{ color: "#FFFFFF" }}>
//                 {/* Arrow */}
//                 <img
//                   src="/assets/images/arrow_circle.svg"
//                   alt="arrow button"
//                   className="w-12 sm:w-14 md:w-[70px] mb-4"
//                 />

//                 {/* Subtitle + Buttons */}
//                 <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
//                   {/* Main Subtitle */}
//                   <h2 className="font-gilmer text-2xl sm:text-4xl md:text-7xl font-semibold mt-4 md:mt-0 text-left">
//                     Scale to <br /> Intelligence
//                   </h2>

//                   {/* Buttons */}
//                   <div className="flex flex-col md:flex-row items-center gap-3 mt-6 md:mt-0">
//                     <button className="font-gilmer flex items-center gap-2 px-4 py-3 rounded-2xl h-[50px] backdrop-blur-md border border-white/20 transition duration-300 hover:bg-white/20">
//                       <img src="/assets/images/calender.svg" alt="calendar" className="w-4 h-4" />
//                       Jan 17th & 18th, 2026
//                     </button>
//                     <button className="font-gilmer flex flex-col justify-center px-4 py-3 rounded-2xl h-[50px] leading-tight text-sm backdrop-blur-md bg-white/10 border border-white/20 text-white transition duration-300 hover:bg-white/20">
//                       Shifa Convention Center
//                       <span className="font-gilmer text-xs leading-tight">Perinthalmanna</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//         </div>
//       </div>

//       {/* ---------------- Mobile View ---------------- */}
//       <div className="relative w-full z-10 p-3 md:hidden" style={{ color: "#FFFFFF" }}>
//         <div className="text-center md:text-right mb-8 relative z-2">
//           {/* First Line */}
//           <h1 className="text-xl sm:text-3xl md:text-[90px] mb-3 md:mb-20 flex items-center justify-center md:justify-end gap-3 pl-0 mr-0 md:mr-25">
//             <span style={{ color: "#418CFF", fontWeight: 10 }} className="font-gilmer">
//               ScaleUp Conclave
//             </span>
//             <img
//               src="/assets/images/v.svg"
//               alt="icon"
//               className="inline-block w-5 h-5 sm:w-8 sm:h-8 md:w-[60px] md:h-[60px]"
//             />
//           </h1>

//           {/* Second Line */}
//           <h1
//             className="text-4xl sm:text-6xl -mb-8 -mt-2 md:text-[180px] md:-mt-28 md:mb-5 font-gilmer relative z-0 text-center"
//             style={{ color: "#4028C8" }}
//           >
//             <span className="sm:text-6xl md:text-[140px] lg:text-[170px]" style={{ color: "#060832" }}>
//               The
//             </span>{" "}
//             <span className="tracking-tight md:text-[140px] lg:text-[170px]" style={{ fontWeight: "700" }}>
//               Ai Summit
//             </span>
//           </h1>
//         </div>

//         <div className="overflow-visible z-10 -mt-11 w-full rounded-3xl p-6 flex flex-col justify-between relative leading-normal min-h-[550px]">
//           {/* Background video */}
//           <video
//             src="/assets/videos/herobg.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover object-[center_60%] -z-10 rounded-3xl"
//           />

//           {/* Top Right Icon */}
//           <div className="absolute top-6 right-6 w-16">
//             <img
//               src="/assets/images/img_icon3.svg"
//               alt="icons"
//               className="w-full h-auto block"
//             />
//           </div>

//           {/* Tagline Section */}
//           <div className="w-full p-4 rounded-4xl shadow-sm bg-white/10 text-white mb-4">
//             <p className="font-gilmer text-2xl leading-snug">
//               ScaleUp <br /> Conclave{" "}
//               <span className="font-bold decoration-[3px]" style={{ textDecorationColor: "#9CF694" }}>
//                 2026
//               </span>{" "}
//               <br /> is back and this <br /> time,{" "}
//               <span className="font-bold decoration-[3px]" style={{ textDecorationColor: "#9CF694" }}>
//                 it’s AI.
//               </span>
//             </p>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex flex-col gap-3 w-full mb-6">
//             <button className="font-gilmer flex items-center justify-center gap-2 px-4 py-3 rounded-2xl h-[50px] backdrop-blur-md border border-white/20 w-full text-center hover:bg-white/20">
//               <img src="/assets/images/calender.svg" alt="calendar" className="w-4 h-4" />
//               Jan 17th & 18th, 2026
//             </button>
//             <button className="font-gilmer flex flex-col justify-center px-4 py-3 rounded-2xl h-[50px] leading-tight backdrop-blur-md bg-white/10 border border-white/20 text-white w-full hover:bg-white/20">
//               Shifa Convention Center
//               <span className="font-gilmer text-xs leading-tight">Perinthalmanna</span>
//             </button>
//           </div>

//           {/* Arrow */}
//           <img
//             src="/assets/images/arrow_circle.svg"
//             alt="arrow button"
//             className="w-12 mb-4"
//           />

//           {/* Main Subtitle */}
//           <h2 className="font-gilmer text-4xl sm:text-5xl font-semibold text-left">
//             Scale to <br /> Intelligence
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;









"use client";
import React from "react";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* --- DESKTOP (lg and above) VIEW --- */}
      <div className="hidden lg:block">
        <div className="text-center md:text-right mb-8 p-5 relative z-2">
          {/* First Line */}
          <h1 className="text-xl -pr-30 lg:text-[85px] lg:pr-20 lg:-ml-29 sm:text-3xl md:text-[90px] mb-3 md:mb-20 flex items-center justify-start md:justify-end gap-3 pl-0 mr-0 md:mr-25">
            <span style={{ color: "#418CFF", fontWeight: 2, fontFamily: "Plus Jakarta Sans" }} className="font-gilmer">
              ScaleUp Conclave
            </span>
            <img
              src="/assets/images/v.svg"
              alt="icon"
              className="inline-block w-5 h-5 sm:w-8 sm:h-8 md:w-[60px] md:h-[60px]"
            />
          </h1>

          {/* Second Line */}
          <h1
            className="text-4xl sm:text-6xl -mb-8 -mt-2 lg:text-[180px] md:text-[180px] md:-mt-28 md:mb-5 font-gilmer relative z-0 text-center"
            style={{ color: "#4028C8" }}
          >
            <span className="sm:text-6xl md:text-[140px] lg:text-[200px]" style={{ color: "#060832", fontFamily: "Plus Jakarta Sans" }}>
              The
            </span>{" "}
            <span className="tracking-tight lg:ml-10 md:text-[140px] lg:text-[220px]" style={{ fontWeight: "500", fontFamily: "Plus Jakarta Sans" }}>
              Ai Summit
            </span>
          </h1>
        </div>

        {/* --- Card Wrapper --- */}
        <div className="p-3 -mt-10" style={{ backgroundColor: "white" }}>
          <div className="relative w-full z-10 px-1" style={{ color: "#FFFFFF" }}>
            <div className="mt-20 md:!mt-[-80px] overflow-visible w-full rounded-3xl md:rounded-4xl flex flex-col justify-between relative leading-normal md:leading-relaxed min-h-[550px] p-10 md:p-10">
              {/* <video
                src="/assets/videos/herobg.webm"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-[center_60%] -z-10 rounded-3xl md:rounded-4xl"
              /> */}
           <video
  autoPlay
  loop
  muted
  playsInline
  preload="none"
  className="absolute inset-0 w-full h-full object-cover object-[center_80%] -z-10 rounded-3xl"
>
  <source src="/assets/videos/herobg.mp4" type="video/mp4" />
  <source src="/assets/videos/herobg.webm" type="video/webm" />
</video>

              {/* Content Wrapper */}
              <div className="relative z-10 px-6 md:px-12 lg:px-0 py-5">

                {/* Top Right Icon */}
                <div className="absolute top-6 right-6 w-16 sm:w-16 md:w-[120px]">
                  <img
                    src="/assets/images/img_icon3.svg"
                    alt="icons"
                    className="w-full h-auto block"
                  />
                </div>

                {/* Tagline */}
                <div>
                  <div className="mx-auto md:ml-0 w-full md:w-1/2 lg:w-[500px] lg:mt-0 p-4 lg:p-3 md:p-6 rounded-4xl shadow-sm"
                    style={{ backgroundColor: "#FFFFFF1A", color: "#FFFFFF", fontFamily: "Plus Jakarta Sans" }}>
                    <p className="font-gilmer text-2xl lg:text-4xl sm:text-3xl md:text-5xl font-normal leading-snug md:leading-normal">
                      ScaleUp <br className="block md:hidden" /> Conclave{" "}
                      <span className="font-gilmer  decoration-[3px]" style={{ textDecorationColor: "#9CF694" }}>
                        2026
                      </span>{" "}
                      <br /> is back and this <br className="block md:hidden" /> time,{" "}
                      <span className="font-gilmer underline decoration-[#9CF694] decoration-[3px] underline-offset-[7px]" style={{ textDecorationColor: "#9CF694" }}>
                        it’s AI.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 md:mt-5 lg:mt-20 flex flex-col items-start" style={{ color: "#FFFFFF" }}>
                  {/* Arrow */}
                  <img
                    src="/assets/images/arrow_circle.svg"
                    alt="arrow button"
                    className="w-12 sm:w-14 md:w-[70px] mb-4"
                  />

                  {/* Subtitle + Buttons */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                    <h2 className="font-gilmer text-2xl sm:text-4xl md:text-7xl  mt-4 lg:mt-8 md:mt-0 text-left" style={{ fontFamily: "Plus Jakarta Sans" }}>
                      Scale to <br /> Intelligence
                    </h2>

                    <div className="flex flex-col md:flex-row items-center lg:mt-30 lg:mb-0 gap-3 mt-6 md:mt-0" style={{ fontFamily: "Plus Jakarta Sans" }}>
                      {/* Scale to <br /> Intelligence */}
                      <button className="font-gilmer flex items-center gap-2 px-4 py-3 rounded-2xl h-[50px] backdrop-blur-md border border-white/20 transition duration-300 hover:bg-white/20">
                        <img src="/assets/images/calender.svg" alt="calendar" className="w-4 h-4" />
                        Jan 17th & 18th, 2026
                      </button>
                      <button className="font-gilmer flex flex-col justify-center px-4 py-3 rounded-2xl h-[50px] leading-tight text-sm backdrop-blur-md bg-white/10 border border-white/20 text-white transition duration-300 hover:bg-white/20">
                        Shifa Convention Center
                        <span className="font-gilmer text-xs leading-tight">Perinthalmanna</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile + Tablet View ---------------- */}
      <div className="relative w-full z-10 p-3 lg:hidden" style={{ color: "#FFFFFF" }}>
        <div className="text-center md:text-right mb-8 relative z-2">
          {/* First Line */}
          <h1 className="text-xl sm:text-3xl md:mt-5 md:text-[50px] mb-0 md:mb-10 flex items-center justify-center md:justify-end gap-3 pl-0 mr-0 md:mr-25">
            <span style={{ color: "#418CFF", fontWeight: 10, fontFamily: "Plus Jakarta Sans" }} className="font-gilmer">
              ScaleUp Conclave
            </span>
            <img
              src="/assets/images/v.svg"
              alt="icon"
              className="inline-block md:-mt-5 w-5 h-5 sm:w-8 sm:h-8 md:w-[60px] md:h-[60px]"
            />
          </h1>

          {/* Second Line */}
          <h1
            className="text-5xl -mb-8 md:-mb-16 -mt-2 md:text-[180px] md:-mt-28 font-gilmer relative z-0 text-center"
            style={{ color: "#4028C8" }}
          >
            <span className="text-6xl sm:text-6xl md:text-[80px] lg:text-[170px]" style={{ color: "#060832", fontFamily: "Plus Jakarta Sans" }}>
              The
            </span>{" "}
            <span className="tracking-tight md:text-[80px] lg:text-[170px]" style={{ fontWeight: "700", fontFamily: "Plus Jakarta Sans" }}>
              Ai Summit
            </span>
          </h1>
        </div>

        <div className="overflow-visible z-10 -mt-11 w-full rounded-3xl p-6 flex flex-col justify-start relative leading-normal min-h-[550px]">
          {/* Background video */}
          {/* <video
            src="/assets/videos/herobg.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[center_60%] -z-10 rounded-3xl"
          /> */}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10 rounded-3xl"
          >
            <source src="/assets/videos/herobg.mp4" type="video/mp4" />
            <source src="/assets/videos/herobg.webm" type="video/webm" />
          </video> */}
          <video
  autoPlay
  loop
  muted
  playsInline
  preload="none"
  className="absolute inset-0 w-full h-full object-cover object-[center_80%] -z-10 rounded-3xl"
>
  <source src="/assets/videos/herobg.mp4" type="video/mp4" />
  <source src="/assets/videos/herobg.webm" type="video/webm" />
</video>
          {/* Top Right Icon */}
          <div className="absolute top-6 right-6 w-16">
            <img
              src="/assets/images/img_icon3.svg"
              alt="icons"
              className="w-full h-auto block"
            />
          </div>

          {/* Tagline Section */}
          <div className="w-fit p-4 rounded-4xl shadow-sm bg-white/10 text-white mb-4">
            <p className="font-gilmer text-2xl leading-snug">
              ScaleUp <br /> Conclave{" "}
              <span className=" decoration-[3px]" style={{ textDecorationColor: "#9CF694", fontFamily: "Plus Jakarta Sans" }}>
                2026
              </span>{" "}
              <br /> is back and this <br /> time,{" "}
              <span className="underline decoration-[#9CF694] decoration-[3px] underline-offset-[7px]" style={{ textDecorationColor: "#9CF694", fontFamily: "Plus Jakarta Sans" }}>
                it’s AI.
              </span>
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col gap-3 w-full mb-6">
            <button className="font-gilmer flex items-center justify-start gap-2 px-4 py-3 rounded-2xl h-[50px] backdrop-blur-md border border-white/20 w-fit text-center hover:bg-white/20">
              <img src="/assets/images/calender.svg" alt="calendar" className="w-4 h-4" />
              Jan 17th & 18th, 2026
            </button>
            <button className="font-gilmer flex flex-col justify-start px-4 py-3 rounded-2xl h-[50px] leading-tight backdrop-blur-md bg-white/10 border border-white/20 text-white w-fit hover:bg-white/20">
              Shifa Convention Center
              <span className="font-gilmer text-xs leading-tight">Perinthalmanna</span>
            </button>
          </div>

          {/* Arrow */}
          <img
            src="/assets/images/arrow_circle.svg"
            alt="arrow button"
            className="w-12 mb-4"
          />

          {/* Main Subtitle */}
          <h2 className="font-gilmer text-4xl  text-left">
            Scale to <br /> Intelligence
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;


