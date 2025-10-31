


// // main
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "./ui/button";

// interface ImageItem {
//   id: number;
//   src: string;
//   alt: string;
// }

// const imagesData: Record<string, ImageItem[]> = {
//   Dubai: [
//     { id: 1, src: "/assets/images/cards/dubai1.jpg", alt: "Dubai Image 1" },
//     { id: 2, src: "/assets/images/cards/dubai2.jpg", alt: "Dubai Image 2" },
//     { id: 3, src: "/assets/images/cards/dubai3.jpg", alt: "Dubai Image 3" },
//   ],
//   "2025": [
//     { id: 1, src: "/assets/images/cards/2025_2.webp", alt: "2025 Image 1" },
//     { id: 2, src: "/assets/images/cards/2025_1.webp", alt: "2025 Image 2" },
//     { id: 3, src: "/assets/images/cards/2025_3.webp", alt: "2025 Image 3" },
//   ],
//   "2024": [
//     { id: 1, src: "/assets/images/cards/2024_1.webp", alt: "2024 Image 1" },
//     { id: 2, src: "/assets/images/cards/2024_2.webp", alt: "2024 Image 2" },
//     { id: 3, src: "/assets/images/cards/2024_3.webp", alt: "2024 Image 3" },
//   ],
//   All: [
//     { id: 1, src: "/assets/images/cards/all_1.jpg", alt: "Dubai Image 1" },
//     { id: 2, src: "/assets/images/cards/all_2.jpg", alt: "Dubai Image 2" },
//     { id: 3, src: "/assets/images/cards/all_3.jpg", alt: "Dubai Image 3" },
//   ],
// };

// const filters = ["Dubai", "2025", "2024", "All"];

// export default function ScaleUpSection() {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const images = imagesData[selectedFilter];

//   return (
//     <section className="relative w-full py-8 px-6 md:px-16 max-w-full mx-auto" id="about" style={{fontFamily:"Plus Jakarta Sans"}}>
//       {/* ---------------- Desktop View ---------------- */}
//       <div className="hidden md:flex flex-col md:flex-row justify-start items-start gap-12 ml-0 md:gap-20 mb-12 w-full">
//         {/* Left SVG */}
//         <div className="flex-shrink-0 justify-start w-full md:w-1/3 flex flex-col gap-4 ml-0">
//           <img
//             src="/assets/images/03about.svg"
//             alt="About ScaleUp"
//             className="w-full h-[190px]"
//           />
//           <div className="flex justify-center items-center mt-4">
//             <img
//               src="/assets/images/abouticons.svg"
//               alt="About Icons"
//               className="w-20 md:w-40 h-auto"
//             />
//           </div>
//         </div>

//         {/* Right Text */}
//         <div className="flex-1 w-full md:w-2/3 space-y-6 mt-0">
//           <p
//             style={{ color: "#202020" }}
//             className="font-plusJakartaSans font-normal text-[27.95px] leading-[36px] tracking-[0px]"
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, bringing together entrepreneurs, investors, and aspiring business leaders.
//           </p>
//           <p
//             style={{ color: "#202020" }}
//             className="font-plusJakartaSans font-normal text-[27.95px] leading-[36px] tracking-[0px]"
//           >
//             ScaleUp Village is a unique hub in India supporting startups and businesses. As an incubator and accelerator, it offers tools, guidance, and connections to help entrepreneurs grow and succeed.
//           </p>
//         </div>
//       </div>

//       {/* Desktop Images */}
//       <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="md:col-span-2 relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
//           <Image
//             src={images[0].src}
//             alt={images[0].alt}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="grid grid-rows-2 gap-4">
//           <div className="relative w-full h-32 md:h-44 rounded-xl overflow-hidden">
//             <Image
//               src={images[1].src}
//               alt={images[1].alt}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative w-full h-32 md:h-44 rounded-xl overflow-hidden">
//             <Image
//               src={images[2].src}
//               alt={images[2].alt}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Desktop Filter Buttons */}
//       <div className="hidden md:flex flex-wrap gap-4 justify-center md:justify-center md:!mt-[-60px]">
//         <div
//           className="border rounded-2xl backdrop-blur-md p-2 flex flex-wrap gap-2 justify-center"
//           style={{ background: "#FFFFFF2A", borderColor: "rgba(255,255,255,0.2)" }}
//         >
//           {filters.map((filter) => (
//             <Button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className="px-4 py-2 rounded-full text-[21.03px] leading-[27.08px] font-plusJakartaSans font-medium tracking-[0px] transition-all"
//               style={{
//                 background: selectedFilter === filter ? "#FFFFFF" : "#FFFFFF2A", 
//                 color: "#000000",
//                 border: filter === "All" ? "none" : "1px solid rgba(255,255,255,0.2)",
//               }}
//             >
//               {filter === "Dubai"
//                 ? "ScaleUp Dubai"
//                 : filter === "2025"
//                 ? "ScaleUp 2025"
//                 : filter === "2024"
//                 ? "ScaleUp 2024"
//                 : "All"}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- Mobile View ---------------- */}
//       <div className="flex flex-col md:hidden gap-6">
//         {/* First SVG */}
//         <div className="flex justify-center mt-6 mb-4">
//         <img
//           src="/assets/images/03about.svg"
//           alt="About ScaleUp"
//           className="w-[55%] max-w-[180px] h-auto"
//         />
//         </div>


// {/* <div className="flex justify-center mt-6 mb-4">
//             <img
//               src="/assets/images/04timeline.svg"
//               alt="About ScaleUp"
//               className="w-[55%] max-w-[180px] h-auto"
//             />
//           </div> */}


//         {/* Second Icons */}
//         <img
//           src="/assets/images/abouticons.svg"
//           alt="About Icons"
//           className="w-35 h-auto mx-auto"
//         />

//         {/* Mobile Text */}
//         <div className="space-y-4 ">
//           <p
//             style={{ color: "#202020", fontFamily: "Plus Jakarta Sans", fontWeight: 400, fontSize: "18px", lineHeight: "29px", textAlign: "justify" }}
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, bringing together entrepreneurs, investors, and aspiring business leaders.
//           </p>
//           <p
//             style={{ color: "#202020", fontFamily: "Plus Jakarta Sans", fontWeight: 400, fontSize: "18px", lineHeight: "29px", textAlign: "justify" }}
//           >
//             ScaleUp Village is a unique hub in India supporting startups and businesses. As an incubator and accelerator, it offers tools, guidance, and connections to help entrepreneurs grow and succeed.
//           </p>
//         </div>

//         {/* Mobile Images */}
//         <div className="grid grid-cols-1 gap-2">
//           <div className="relative w-full h-[200px] rounded-md overflow-hidden">
//             <Image
//               src={images[0].src}
//               alt={images[0].alt}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div className="relative w-full h-[112px]] md:h-44 rounded-md overflow-hidden">
//               <Image
//                 src={images[1].src}
//                 alt={images[1].alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="relative w-full h-25 rounded-md overflow-hidden">
//               <Image
//                 src={images[2].src}
//                 alt={images[2].alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>

//      {/* Mobile Filter Buttons */}
// {/* Mobile Filter Buttons */}
// <div className="-mt-10 px-2">
//   <div
//     className="flex gap-2 flex-nowrap border rounded-2xl backdrop-blur-md p-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
//     style={{ background: "#FFFFFF2A", borderColor: "rgba(255,255,255,0.2)" ,WebkitOverflowScrolling: "touch"}}
//   >


// {/* className="scroll-container flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
//     style={{ background: "#FFFFFF2A", borderColor: "rgba(255,255,255,0.2)",WebkitOverflowScrolling: "touch" }} */}


//     {filters.map((filter) => (
//       <Button
//         key={filter}
//         onClick={() => setSelectedFilter(filter)}
//         className="px-3 py-1 rounded-full text-sm font-plusJakartaSans font-medium flex-shrink-0"
//         style={{
//           background: selectedFilter === filter ? "#FFFFFF" : "#FFFFFF2A",
//           color: "#000000",
//           border: filter === "All" ? "none" : "1px solid rgba(255,255,255,0.2)",
//         }}
//       >
//         {filter === "Dubai"
//           ? "ScaleUp Dubai"
//           : filter === "2025"
//           ? "ScaleUp 2025"
//           : filter === "2024"
//           ? "ScaleUp 2024"
//           : "All"}
//       </Button>
//     ))}
//   </div>
// </div>



//       </div>
//     </section>
//   );
// }










"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const imagesData: Record<string, ImageItem[]> = {
  Dubai: [
    { id: 1, src: "/assets/images/cards/dubai1.webp", alt: "Dubai Image 1" },
    { id: 2, src: "/assets/images/cards/dubai2.webp", alt: "Dubai Image 2" },
    { id: 3, src: "/assets/images/cards/dubai3.webp", alt: "Dubai Image 3" },
  ],
  "2025": [
    { id: 1, src: "/assets/images/cards/2025_2.webp", alt: "2025 Image 1" },
    { id: 2, src: "/assets/images/cards/2025_1.webp", alt: "2025 Image 2" },
    { id: 3, src: "/assets/images/cards/2025_3.webp", alt: "2025 Image 3" },
  ],
  "2024": [
    { id: 1, src: "/assets/images/cards/2024_1.webp", alt: "2024 Image 1" },
    { id: 2, src: "/assets/images/cards/2024_2.webp", alt: "2024 Image 2" },
    { id: 3, src: "/assets/images/cards/2024_3.webp", alt: "2024 Image 3" },
  ],
  All: [
    { id: 1, src: "/assets/images/cards/all_1.webp", alt: "All Image 1" },
    { id: 2, src: "/assets/images/cards/all_2.webp", alt: "All Image 2" },
    { id: 3, src: "/assets/images/cards/all_3.webp", alt: "All Image 3" },
  ],
};

const filters = ["Dubai", "2025", "2024", "All"];

export default function ScaleUpSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const images = imagesData[selectedFilter];

  return (
    <section className="relative w-full md:py-8 px-6 md:px-12 lg:px-16 max-w-full mx-auto" id="about">
      
      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-start items-start gap-16 mb-12 w-full">
        {/* Left Section */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex flex-col gap-4">
          <img src="/assets/images/03about.svg" alt="About ScaleUp" className="w-full h-[190px]" />
          <div className="flex justify-center mt-4">
            <img src="/assets/images/abouticons.svg" alt="About Icons" className="w-40 h-auto" />
          </div>
        </div>

        {/* Right Text */}
        <div className="flex-1 w-full lg:w-2/3 space-y-6">
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "28px",
              lineHeight: "36px",
            }}
          >
            ScaleUp Conclave hosted by ScaleUp Village, brings together entrepreneurs,
            investors, and aspiring business leaders.
          </p>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "28px",
              lineHeight: "36px",
            }}
          >
            ScaleUp Village is a unique hub in India supporting startups and businesses. As an
            incubator and accelerator, it offers tools, guidance, and connections to help
            entrepreneurs grow and succeed.
          </p>
        </div>
      </div>

      {/* Desktop Images */}
      {/* <div className="hidden lg:grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 relative w-full h-96 rounded-xl overflow-hidden">
          <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
        </div>
        <div className="grid grid-rows-2 gap-4">
          {images.slice(1).map((img) => (
            <div key={img.id} className="relative w-full h-44 rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div> */}
      {/* Desktop Images */}
<div className="hidden lg:grid grid-cols-3 gap-4 mb-6">
  <div className="col-span-2 relative w-full h-96 rounded-xl overflow-hidden">
    {/* Main image (load immediately) */}
    <Image
      src={images[0].src}
      alt={images[0].alt}
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="grid grid-rows-2 gap-4">
    {images.slice(1).map((img) => (
      <div key={img.id} className="relative w-full h-44 rounded-xl overflow-hidden">
        {/* Lazy load other images */}
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>


      {/* Desktop Filters */}
      <div className="hidden lg:flex flex-wrap gap-4 justify-center -mt-10">
        <div
          className="border rounded-2xl backdrop-blur-md p-3 flex flex-wrap gap-3 justify-center"
          style={{ background: "#FFFFFF2A", borderColor: "#9CF694" }}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className="px-5 py-2 rounded-full transition-all"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "20px",
                fontWeight: 500,
                background: selectedFilter === filter ? "#FFFFFF" : "#FFFFFF2A",
                color: "#000",
              }}
            >
              {filter === "Dubai"
                ? "ScaleUp Dubai"
                : filter === "2025"
                ? "ScaleUp 2025"
                : filter === "2024"
                ? "ScaleUp 2024"
                : "All"}
            </Button>
          ))}
        </div>
      </div>

      {/* ---------------- Tablet View ---------------- */}
      <div className="hidden md:flex lg:hidden flex-col gap-8">
        <div className="flex justify-center">
          <img src="/assets/images/03about.svg" alt="About ScaleUp" className="w-[60%] max-w-[240px] h-auto" />
        </div>
        <div className="flex justify-center">
          <img src="/assets/images/abouticons.svg" alt="About Icons" className="w-32 h-auto" />
        </div>

        <div className="space-y-5">
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "22px",
              lineHeight: "32px",
              textAlign: "justify",
            }}
          >
            ScaleUp Conclave hosted by ScaleUp Village, bringing together entrepreneurs,
            investors, and aspiring business leaders.
          </p>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "22px",
              lineHeight: "32px",
              textAlign: "justify",
            }}
          >
            ScaleUp Village is a unique hub in India supporting startups and businesses. As an
            incubator and accelerator, it offers tools, guidance, and connections to help
            entrepreneurs grow and succeed.
          </p>
        </div>

        {/* <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 relative w-full h-64 rounded-xl overflow-hidden">
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-3">
            {images.slice(1).map((img) => (
              <div key={img.id} className="relative w-full h-28 rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-3">
  {/* Main (large) image — load immediately */}
  <div className="col-span-2 relative w-full h-64 rounded-xl overflow-hidden">
    <Image
      src={images[0].src}
      alt={images[0].alt}
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Smaller images — lazy loaded */}
  <div className="grid grid-rows-2 gap-3">
    {images.slice(1).map((img) => (
      <div key={img.id} className="relative w-full h-28 rounded-xl overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>

      </div>

      {/* ---------------- Mobile View ---------------- */}
      <div className="flex flex-col md:hidden gap-6">
        <div className="flex justify-center mt-6 mb-4">
          <img src="/assets/images/03about.svg" alt="About ScaleUp" className="w-[55%] max-w-[180px] h-auto" />
        </div>

        <img src="/assets/images/abouticons.svg" alt="About Icons" className="w-28 h-auto mx-auto" />

        <div className="space-y-4">
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            ScaleUp Conclave hosted by ScaleUp Village, bringing together entrepreneurs,
            investors, and aspiring business leaders.
          </p>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              color: "#202020",
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "justify",
            }}
          >
            ScaleUp Village is a unique hub in India supporting startups and businesses. As an
            incubator and accelerator, it offers tools, guidance, and connections to help
            entrepreneurs grow and succeed.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 gap-2">
          <div className="relative w-full h-[200px] rounded-md overflow-hidden">
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {images.slice(1).map((img) => (
              <div key={img.id} className="relative w-full h-[110px] rounded-md overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-2">
  {/* Main image — load immediately for better UX */}
  <div className="relative w-full h-[200px] rounded-md overflow-hidden">
    <Image
      src={images[0].src}
      alt={images[0].alt}
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Remaining images — lazy loaded */}
  <div className="grid grid-cols-2 gap-2">
    {images.slice(1).map((img) => (
      <div
        key={img.id}
        className="relative w-full h-[110px] rounded-md overflow-hidden"
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>


        <div className="-mt-8 px-2">
          <div
            className="flex gap-2 border rounded-2xl backdrop-blur-md p-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
            style={{ background: "#FFFFFF2A", borderColor: "#9CF694" }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className="px-3 py-1 rounded-full flex-shrink-0"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "14px",
                  fontWeight: 500,
                  background: selectedFilter === filter ? "#FFFFFF" : "#FFFFFF2A",
                  color: "#000000",
                }}
              >
                {filter === "Dubai"
                  ? "ScaleUp Dubai"
                  : filter === "2025"
                  ? "ScaleUp 2025"
                  : filter === "2024"
                  ? "ScaleUp 2024"
                  : "All"}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

