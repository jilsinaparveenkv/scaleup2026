// // good


// "use client";

// import React from "react";

// function Banner() {
//   return (
//     <div className="p-6">
//       <section
//         className="w-full rounded-2xl max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between overflow-hidden"
//         style={{ backgroundColor: "var(--color-banner-bg)" }}
//       >
//         {/* Left Content */}
//         <div className="flex flex-col gap-6 md:w-1/2">
//           <h1
//             className="text-2xl sm:text-3xl md:text-5xl font-medium leading-snug p-6 md:p-9"
//             style={{ color: "var(--color-bg)" }}
//           >
//             Want to Get <br /> Notified when we <br />
//             release amazings?
//           </h1>

//           <div className="flex flex-wrap items-center gap-4 px-6 mb-6 md:px-9">
//             <a
//               href="https://chat.whatsapp.com/DDdiTix9PosBX7PMLrB74U"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 rounded-full shadow-md hover:shadow-lg transition px-4 py-2"
//               style={{
//                 backgroundColor: "var(--color-button-bg)",
//                 color: "var(--color-button-text)",
//                 textDecoration: "none",
//               }}
//             >
//               <img
//                 src="/assets/images/whatsapp.svg"
//                 alt="WhatsApp"
//                 className="h-5 w-5"
//               />
//               <span className="font-medium text-sm md:text-base">
//                 Join Whatsapp
//               </span>
//               <img
//                 src="/assets/images/arrow_icon_blue.svg"
//                 alt="arrow"
//                 className="h-5 w-5" 
//               />
//             </a>

//             <img
//               src="/assets/images/img_icons.svg"
//               alt=""
//               className="w-16 sm:w-20"
//             />
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative md:w-1/2 w-full flex justify-center md:justify-end mt-6 md:mt-0">
//           <img
//             src="/assets/images/banner_img.png"
//             alt="img"
//             className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Banner;






"use client";

import { ChevronRight } from "lucide-react";
import React from "react";

function Banner() {
  return (
    <div className="p-6 px-4 sm:px-5 md:px-5 lg:px-4 py-0 md:py-0">
      <section
        className="w-full rounded-2xl max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between overflow-hidden"
        style={{ backgroundColor: "#202020", fontFamily: "Plus Jakarta Sans" }}
      >
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1
            className="text-2xl font-plusJakartaSans sm:text-3xl md:text-5xl font-medium leading-[1.1] p-6 md:p-9"
            style={{ color: "#FFFFFF" }}
          >
            Want to Get <br /> Notified when we <br />
            release amazings?
          </h1>


          {/* Left Content */}
          <div className="flex flex-wrap items-center gap-4 px-6 mb-13 md:px-9">
            <a
              href="https://chat.whatsapp.com/DDdiTix9PosBX7PMLrB74U"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between rounded-full shadow-md hover:shadow-lg transition w-[230px] px-5 py-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#202020",
                textDecoration: "none",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              {/* Left Section: WhatsApp icon + text */}

              <div className="flex items-center gap-2 ">
                <img
                  src="/assets/images/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5"
                />
                <span className="font-medium text-sm md:text-base">
                  Join Whatsapp
                </span>
              </div>

              {/* Right Section: ChevronRight Button */}
              <button
                type="button"
                className="flex items-center justify-center rounded-full md:-mr-3 p-1.5 hover:bg-blue-600 transition"
                style={{
                  backgroundColor: "#2E96F5",
                  color: "#FFFFFF",
                }}
              >
                <ChevronRight width={35} height={22} />
              </button>
            </a>

            <img
              src="/assets/images/img_icons.svg"
              alt=""
              className="pl-4 w-16 sm:w-20"
            />
          </div>

        </div>

        {/* Right Image */}
        <div className="relative md:w-1/2 w-full flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/assets/images/banner_img.png"
            alt="img"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
