// // good 
// "use client";

// import React from "react";

// function PartnersSection() {
//   return (
//     <div className="container mx-auto px-4 py-15">
//       <div className="text-center mb-17">
//       <div
//   className="inline-flex w-[290px] h-[70px] items-center justify-center border rounded-xl shadow-md"
//   style={{ borderColor: "#000000" }}
// >
//   <span
//     className="font-nunito font-bold text-[20px] leading-[33.15px] tracking-[1.33px] uppercase text-center"
//     style={{ color: "#000000" }}
//   >
//     PARTNERS
//   </span>
// </div>

//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//         <img
//           src="/assets/images/partners/profinz.svg"
//           alt="Profinz"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/tharacart.svg"
//           alt="Thara Cart"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/karikk.svg"
//           alt="Karikku"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/voxbay.svg"
//           alt="Voxbay"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/shifafertility.svg"
//           alt="Shifa Fertility Centre"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/fulva.svg"
//           alt="Fulva"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/haymed.svg"
//           alt="Haymed Healthcare"
//           className="h-20 object-contain"
//         />
//         <img
//           src="/assets/images/partners/dscmat.svg"
//           alt="DCSMAT"
//           className="h-20 object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// export default PartnersSection;





"use client";

import React from "react";

export default function PartnersSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <div
          className="inline-flex w-[290px] h-[70px] items-center justify-center border rounded-xl shadow-md"
          style={{ borderColor: "#000000" }}
        >
          <span
            className="font-nunito font-bold text-[20px] leading-[33.15px] tracking-[1.33px] uppercase text-center"
            style={{ color: "#000000" }}
          >
            PARTNERS
          </span>
        </div>
      </div>

      {/* Logos Grid */}
      <div
        className="
          grid 
          grid-cols-2            /* Mobile: 2 per row */
          sm:grid-cols-2         /* Small screens: still 2 */
          md:grid-cols-3         /* Medium: 3 per row */
          lg:grid-cols-4         /* Desktop: 4 per row */
          gap-8 
          justify-items-center
        "
      >
        <img
          src="/assets/images/partners/profinz.svg"
          alt="Profinz"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/tharacart.svg"
          alt="Thara Cart"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/karikk.svg"
          alt="Karikku"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/voxbay.svg"
          alt="Voxbay"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/shifafertility.svg"
          alt="Shifa Fertility Centre"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/fulva.svg"
          alt="Fulva"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/haymed.svg"
          alt="Haymed Healthcare"
          className="h-20 object-contain"
        />
        <img
          src="/assets/images/partners/dscmat.svg"
          alt="DCSMAT"
          className="h-20 object-contain"
        />
      </div>
    </div>
  );
}
