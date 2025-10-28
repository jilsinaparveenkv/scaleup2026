// // good 

// "use client";

// import React, { useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { Input } from "./ui/input";

// interface Speaker {
//   id: number;
//   image: string;
//   name: string;
//   company: string;
// }

// function ScaleUpSpeakers() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const allSpeakers: Speaker[] = [
//     {
//       id: 1,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana"
//     },
//     {
//       id: 2,
//       image: "/assets/images/speaker.jpg",
//       name: "Ahsana",
//       company: "hai"
//     },
//     {
//       id: 3,
//       image: "/assets/images/speaker.jpg",
//       name: "Rajan",
//       company: "Salcom Inc."
//     },
//     {
//       id: 4,
//       image: "/assets/images/speaker.jpg",
//       name: "Faheem",
//       company: "Salcom Inc."
//     },
//     {
//       id: 5,
//       image: "/assets/images/speaker.jpg",
//       name: "Midhun",
//       company: "Salcom Inc."
//     },
//     {
//       id: 6,
//       image: "/assets/images/speaker.jpg",
//       name: "Shafas",
//       company: "Salcom Inc."
//     },
//     {
//       id: 7,
//       image: "/assets/images/speaker.jpg",
//       name: "Nijith",
//       company: "Salcom Inc."
//     },
//     {
//       id: 8,
//       image: "/assets/images/speaker.jpg",
//       name: "Mariya",
//       company: "Salcom Inc."
//     },
//     {
//       id: 9,
//       image: "/assets/images/speaker.jpg",
//       name: "Nikhil",
//       company: "Salcom Inc."
//     },
//     {
//       id: 10,
//       image: "/assets/images/speaker.jpg",
//       name: "Adhi",
//       company: "Salcom Inc."
//     },
//     {
//       id: 11,
//       image: "/assets/images/speaker.jpg",
//       name: "Farsa",
//       company: "Salcom Inc."
//     },
//     {
//       id: 12,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc."
//     },
//     {
//       id: 13,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc."
//     },
//     {
//       id: 14,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc."
//     },
//     {
//       id: 15,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc."
//     },
//     {
//       id: 16,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana."
//     },
    
//   ];

//   // Filter speakers based on search query (case-insensitive match on name or company)
//   const filteredSpeakers = allSpeakers.filter(
//     (speaker) =>
//       speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       speaker.company.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-12">
      


// {/* ===== Custom Header Section ===== */}
// <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
       
// <div className="flex-1 w-full md:w-2/3 space-y-6 mt-12">
//   {/* Right Text - 65% */}
//   <p
//     className="font-normal text-[28px] leading-[36px] tracking-[0px] mt-10"
//     style={{ color: "#202020" }}
//   >
//     ScaleUp Conclave hosted by ScaleUp Village, that brings together
//     entrepreneurs, investors, aspiring business leaders
//   </p>

//   {/* Search Bar */}
//   <div className="relative flex justify-start mb-4 w-1/3">
//     <Input
//       type="text"
//       placeholder="Search our Speakers"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       className="w-full px-4 py-3 pr-14 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//       style={{borderColor:"#000000"}}
//     />
//   {/* Blue round button with white arrow */}
//   {/* <button
//       type="button"
//       className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-3xl p-2 flex items-center justify-center shadow-md transition"
//       style={{backgroundColor:"#2E96F5",color:"#FFFFFF"}}
//     >
//       <ChevronRight size={20} />
//     </button> */}
//     {/* <button
//   type="button"
//   className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 flex items-center justify-center shadow-md transition"
//   style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
// >
//   <img
//     src="/assets/images/arrow_icon_blue.svg"
//     alt="Arrow Icon"
//     className="w-5 h-5"
//   />
// </button> */}

// <button
//   type="button"
//   className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-2 flex items-center justify-center shadow-md transition"
//   style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
// >
//   <ChevronRight className="scale-200" width={30} height={15} />
// </button>



//   </div>
// </div>



        
      
//  {/* Left SVG - 35% */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-10">
//           <img
//             src="/assets/images/05speakers.svg"
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>

//       </div>

//       {/* Speakers Grid */}
//       <div
//   className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
//     searchQuery ? 'lg:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-4'
//   }`}
// >
// {filteredSpeakers.map((speaker, index) => (
//     <div
//       key={speaker.id}
//       className={`bg-white shadow-md overflow-hidden border h-96 flex flex-col 
//         rounded-4xl ${
//           index % 4 === 0 || index % 4 === 2
//             ? 'rounded-bl-none'
//             : 'rounded-br-none'
//         }`}
//       style={{ borderColor: "#000000" }}
//     >
//       <img
//         src={speaker.image}
//         alt={`${speaker.name}, ${speaker.company}`}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-3 text-center flex-1 flex flex-col justify-center">
//         <h3 className="text-sm font-bold mb-1" style={{color:"#151515"}}>
//           {speaker.name}
//         </h3>
//         <p className="text-xs" style={{color:"#151515"}}>{speaker.company}</p>
//       </div>
//     </div>
//   ))}
// </div>




//       {filteredSpeakers.length === 0 && searchQuery && (
//         <div className="text-center mt-8 " style={{color:"#FFFFFF"}}>
//           No speakers found matching your search.
//         </div>
//       )}
//     </div>
//   );
// }

// export default ScaleUpSpeakers;









// "use client";

// import React, { useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { Input } from "./ui/input";

// interface Speaker {
//   id: number;
//   image: string;
//   name: string;
//   company: string;
//   title?: string; // Added title
// }

// function ScaleUpSpeakers() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const allSpeakers: Speaker[] = [
//     {
//       id: 1,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana",
//       title: "Founder & CEO"
//     },
//     {
//       id: 2,
//       image: "/assets/images/speaker.jpg",
//       name: "Ahsana",
//       company: "hai",
//       title: "Product Manager"
//     },
//     {
//       id: 3,
//       image: "/assets/images/speaker.jpg",
//       name: "Rajan",
//       company: "Salcom Inc.",
//       title: "CTO"
//     },
//     {
//       id: 4,
//       image: "/assets/images/speaker.jpg",
//       name: "Faheem",
//       company: "Salcom Inc.",
//       title: "Marketing Head"
//     },
//     {
//       id: 5,
//       image: "/assets/images/speaker.jpg",
//       name: "Midhun",
//       company: "Salcom Inc.",
//       title: "Business Analyst"
//     },
//     {
//       id: 6,
//       image: "/assets/images/speaker.jpg",
//       name: "Shafas",
//       company: "Salcom Inc.",
//       title: "Lead Engineer"
//     },
//     {
//       id: 7,
//       image: "/assets/images/speaker.jpg",
//       name: "Nijith",
//       company: "Salcom Inc.",
//       title: "Designer"
//     },
//     {
//       id: 8,
//       image: "/assets/images/speaker.jpg",
//       name: "Mariya",
//       company: "Salcom Inc.",
//       title: "HR Manager"
//     },
//     {
//       id: 9,
//       image: "/assets/images/speaker.jpg",
//       name: "Nikhil",
//       company: "Salcom Inc.",
//       title: "Data Scientist"
//     },
//     {
//       id: 10,
//       image: "/assets/images/speaker.jpg",
//       name: "Adhi",
//       company: "Salcom Inc.",
//       title: "Software Developer"
//     },
//     {
//       id: 11,
//       image: "/assets/images/speaker.jpg",
//       name: "Farsa",
//       company: "Salcom Inc.",
//       title: "Intern"
//     },
//     {
//       id: 12,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Founder"
//     },
//     {
//       id: 13,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Advisor"
//     },
//     {
//       id: 14,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Mentor"
//     },
//     {
//       id: 15,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Investor"
//     },
//     {
//       id: 16,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana.",
//       title: "CEO"
//     },
//   ];

//   // Filter speakers based on search query (only name and company)
//   const filteredSpeakers = allSpeakers.filter(
//     (speaker) =>
//       speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       speaker.company.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* ===== Custom Header Section ===== */}
//       <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full font-plusJakartaSans" id="speakers">
//         <div className="flex-1 w-full md:w-2/3 space-y-6 mt-12">
//           <p
//             className="font-plusJakartaSans text-[28px] leading-[36px] tracking-[0px] mt-10"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, that brings together
//             entrepreneurs, investors, aspiring business leaders
//           </p>

//           {/* Search Bar */}
//           <div className="relative flex justify-start mb-4 w-1/3">
//             <Input
//               type="text"
//               placeholder="Search our Speakers"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full px-4 py-3 pr-14 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               style={{ borderColor: "#000000" }}
//             />
//             <button
//               type="button"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-2 flex items-center justify-center shadow-md transition"
//               style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
//             >
//               <ChevronRight className="scale-200" width={30} height={15} />
//             </button>
//           </div>
//         </div>

//         {/* Left SVG - 35% */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-10">
//           <img
//             src="/assets/images/05speakers.svg"
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Speakers Grid */}
//       <div
//   className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 ${
//     searchQuery ? 'lg:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-4'
//   }`}
// >

//         {filteredSpeakers.map((speaker, index) => (
//           <div
//             key={speaker.id}
//             className={`bg-white shadow-md overflow-hidden border flex flex-col w-[350px] h-[389px] 
//               rounded-4xl ${
//                 index % 4 === 0 || index % 4 === 2
//                   ? "rounded-bl-none"
//                   : "rounded-br-none"
//               }`}
//             style={{ borderColor: "#000000" }}
//           >
//             <img
//               src={speaker.image}
//               alt={`${speaker.name}, ${speaker.company}`}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-3 text-center flex-1 flex flex-col justify-center">
//               <h3 className="text-sm font-bold mb-1" style={{ color: "#151515" }}>
//                 {speaker.name}
//               </h3>
//               <p className="text-xs mb-1" style={{ color: "#151515" }}>
//                 {speaker.title}
//               </p>
//               <p className="text-xs" style={{ color: "#151515" }}>
//                 {speaker.company}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredSpeakers.length === 0 && searchQuery && (
//         <div className="text-center font-plusJakartaSans mt-8" style={{ color: "#FFFFFF" }}>
//           No speakers found matching your search.
//         </div>
//       )}
//     </div>
//   );
// }

// export default ScaleUpSpeakers;



// // good2

// "use client";

// import React, { useState } from "react";
// import { ChevronRight } from "lucide-react";
// import { Input } from "./ui/input";

// interface Speaker {
//   id: number;
//   image: string;
//   name: string;
//   company: string;
//   title?: string; // Added title
// }

// function ScaleUpSpeakers() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const allSpeakers: Speaker[] = [
//     {
//       id: 1,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana",
//       title: "Founder & CEO"
//     },
//     {
//       id: 2,
//       image: "/assets/images/speaker.jpg",
//       name: "Ahsana",
//       company: "hai",
//       title: "Product Manager"
//     },
//     {
//       id: 3,
//       image: "/assets/images/speaker.jpg",
//       name: "Rajan",
//       company: "Salcom Inc.",
//       title: "CTO"
//     },
//     {
//       id: 4,
//       image: "/assets/images/speaker.jpg",
//       name: "Faheem",
//       company: "Salcom Inc.",
//       title: "Marketing Head"
//     },
//     {
//       id: 5,
//       image: "/assets/images/speaker.jpg",
//       name: "Midhun",
//       company: "Salcom Inc.",
//       title: "Business Analyst"
//     },
//     {
//       id: 6,
//       image: "/assets/images/speaker.jpg",
//       name: "Shafas",
//       company: "Salcom Inc.",
//       title: "Lead Engineer"
//     },
//     {
//       id: 7,
//       image: "/assets/images/speaker.jpg",
//       name: "Nijith",
//       company: "Salcom Inc.",
//       title: "Designer"
//     },
//     {
//       id: 8,
//       image: "/assets/images/speaker.jpg",
//       name: "Mariya",
//       company: "Salcom Inc.",
//       title: "HR Manager"
//     },
//     {
//       id: 9,
//       image: "/assets/images/speaker.jpg",
//       name: "Nikhil",
//       company: "Salcom Inc.",
//       title: "Data Scientist"
//     },
//     {
//       id: 10,
//       image: "/assets/images/speaker.jpg",
//       name: "Adhi",
//       company: "Salcom Inc.",
//       title: "Software Developer"
//     },
//     {
//       id: 11,
//       image: "/assets/images/speaker.jpg",
//       name: "Farsa",
//       company: "Salcom Inc.",
//       title: "Intern"
//     },
//     {
//       id: 12,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Founder"
//     },
//     {
//       id: 13,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Advisor"
//     },
//     {
//       id: 14,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Mentor"
//     },
//     {
//       id: 15,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Salcom Inc.",
//       title: "Investor"
//     },
//     {
//       id: 16,
//       image: "/assets/images/speaker.jpg",
//       name: "Salman Faqir",
//       company: "Ahsana.",
//       title: "CEO"
//     },
//   ];

//   // Filter speakers based on search query (only name and company)
//   const filteredSpeakers = allSpeakers.filter(
//     (speaker) =>
//       speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       speaker.company.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* ===== Custom Header Section ===== */}
//       <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full font-plusJakartaSans" id="speakers">
//         <div className="flex-1 w-full md:w-2/3 space-y-6 mt-12">
//           <p
//             className="font-plusJakartaSans text-[28px] leading-[36px] tracking-[0px] mt-10"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave hosted by ScaleUp Village, that brings together
//             entrepreneurs, investors, aspiring business leaders
//           </p>

//           {/* Search Bar */}
//           <div className="relative flex justify-start mb-4 w-1/3">
//             <Input
//               type="text"
//               placeholder="Search our Speakers"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full px-4 py-3 pr-14 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               style={{ borderColor: "#000000" }}
//             />
//             <button
//               type="button"
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-2 flex items-center justify-center shadow-md transition"
//               style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
//             >
//               <ChevronRight className="scale-200" width={30} height={15} />
//             </button>
//           </div>
//         </div>

//         {/* Left SVG - 35% */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-10">
//           <img
//             src="/assets/images/05speakers.svg"
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Speakers Grid */}
//       <div
//   className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 ${
//     searchQuery ? 'lg:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-4'
//   }`}
// >
// {filteredSpeakers.map((speaker, index) => (
//   <div
//     key={speaker.id}
//     className={`bg-white shadow-md overflow-hidden border flex flex-col w-[350px] h-[389px]
//       rounded-4xl ${
//         index % 4 === 0 || index % 4 === 2
//           ? "rounded-bl-none"
//           : "rounded-br-none"
//       }`}
//     style={{
//       borderColor: "#000000",
//       transition: "transform 0.5s ease",
//     }}
//   >
//     <img
//       src={speaker.image}
//       alt={`${speaker.name}, ${speaker.company}`}
//       className={`w-full h-64 object-cover ${
//         index % 2 === 0 ? "scale-x-[-1]" : ""
//       }`}
//     />
//     <div className="p-3 text-center flex-1 flex flex-col justify-center">
//       <h3 className="text-sm font-bold mb-1" style={{ color: "#151515" }}>
//         {speaker.name}
//       </h3>
//       <p className="text-xs mb-1" style={{ color: "#151515" }}>
//         {speaker.title}
//       </p>
//       <p className="text-xs" style={{ color: "#151515" }}>
//         {speaker.company}
//       </p>
//     </div>
//   </div>
// ))}





//       </div>

//       {filteredSpeakers.length === 0 && searchQuery && (
//         <div className="text-center font-plusJakartaSans mt-8" style={{ color: "#FFFFFF" }}>
//           No speakers found matching your search.
//         </div>
//       )}
//     </div>
//   );
// }

// export default ScaleUpSpeakers;


"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Input } from "./ui/input";

interface Speaker {
  id: number;
  image: string;
  name: string;
  company: string;
  title?: string;
}

function ScaleUpSpeakers() {
  const [searchQuery, setSearchQuery] = useState("");

  const allSpeakers: Speaker[] = [
    { id: 1, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Ahsana", title: "Founder & CEO" },
    { id: 2, image: "/assets/images/speaker.jpg", name: "Ahsana", company: "hai", title: "Product Manager" },
    { id: 3, image: "/assets/images/speaker.jpg", name: "Rajan", company: "Salcom Inc.", title: "CTO" },
    { id: 4, image: "/assets/images/speaker.jpg", name: "Faheem", company: "Salcom Inc.", title: "Marketing Head" },
    { id: 5, image: "/assets/images/speaker.jpg", name: "Midhun", company: "Salcom Inc.", title: "Business Analyst" },
    { id: 6, image: "/assets/images/speaker.jpg", name: "Shafas", company: "Salcom Inc.", title: "Lead Engineer" },
    { id: 7, image: "/assets/images/speaker.jpg", name: "Nijith", company: "Salcom Inc.", title: "Designer" },
    { id: 8, image: "/assets/images/speaker.jpg", name: "Mariya", company: "Salcom Inc.", title: "HR Manager" },
    { id: 9, image: "/assets/images/speaker.jpg", name: "Nikhil", company: "Salcom Inc.", title: "Data Scientist" },
    { id: 10, image: "/assets/images/speaker.jpg", name: "Adhi", company: "Salcom Inc.", title: "Software Developer" },
    { id: 11, image: "/assets/images/speaker.jpg", name: "Farsa", company: "Salcom Inc.", title: "Intern" },
    { id: 12, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Salcom Inc.", title: "Founder" },
    { id: 13, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Salcom Inc.", title: "Advisor" },
    { id: 14, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Salcom Inc.", title: "Mentor" },
    { id: 15, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Salcom Inc.", title: "Investor" },
    { id: 16, image: "/assets/images/speaker.jpg", name: "Salman Faqir", company: "Ahsana.", title: "CEO" },
  ];

  const filteredSpeakers = allSpeakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 font-plusJakartaSans" style={{fontFamily:"Plus Jakarta Sans"}}>
      {/* ================= Desktop View ================= */}
      <div className="hidden md:flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full" id="speakers">
        {/* Text + Search */}
        <div className="flex-1 w-full md:w-2/3 space-y-6 mt-12">
          <p className="text-[28px] leading-[36px] mt-10" style={{ color: "#202020" }}>
          ScaleUp 2026 brings diverse experts, leaders, innovators empowering entrepreneurs with global insights, collaboration, and unstoppable business growth.

          </p>

          <div className="relative flex justify-start mb-4 w-1/3">
            <Input
              type="text"
              placeholder="Search our Speakers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-14 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: "#000000" }}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-2 flex items-center justify-center shadow-md transition"
              style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
            >
              <ChevronRight className="scale-200" width={30} height={15} />
            </button>
          </div>
        </div>

        {/* SVG Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 mb-10">
          <img
            src="/assets/images/05speakers.svg"
            alt="About ScaleUp"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Speakers Grid - Desktop */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 mt-8">
        {filteredSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className={`bg-white shadow-md overflow-hidden border flex flex-col w-[350px] h-[389px] rounded-4xl ${
              index % 4 === 0 || index % 4 === 2 ? "rounded-bl-none" : "rounded-br-none"
            }`}
            style={{ borderColor: "#000000", transition: "transform 0.5s ease" }}
          >
            <img
              src={speaker.image}
              alt={`${speaker.name}, ${speaker.company}`}
              className={`w-full h-70 object-cover ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
            />
            <div className="p-3 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-sm font-bold mb-1" style={{ color: "#151515" }}>
                {speaker.name}
              </h3>
              <p className="text-xs mb-1" style={{ color: "#151515" }}>
                {speaker.title}
              </p>
              <p className="text-xs" style={{ color: "#151515" }}>
                {speaker.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Mobile View ================= */}
      <div className="block md:hidden mt-10">
        {/* SVG Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/images/05speakers.svg"
            alt="About ScaleUp"
            className="w-full max-w-xs h-auto"
          />
        </div>

        {/* Description */}
        <p className="text-[24px] leading-[32px] text-start justify mb-6" style={{ color: "#202020" }}>
        ScaleUp 2026 brings diverse experts, leaders, innovators empowering entrepreneurs with global insights, collaboration, and unstoppable business growth.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[232px] max-w-sm">
            <Input
              type="text"
              placeholder="Search our Speakers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-14 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: "#000000" }}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-2 flex items-center justify-center shadow-md transition"
              style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
            >
              <ChevronRight className="scale-200" width={30} height={15} />
            </button>
          </div>
        </div>

       
       {/* Speakers Grid - Mobile */}
<div className="grid grid-cols-1 gap-y-4">
{filteredSpeakers.map((speaker, index) => (
  <div
    key={speaker.id}
    className={`bg-white shadow-md overflow-hidden border flex flex-col rounded-4xl w-[370px] h-[420px] ${
      index % 4 === 0 || index % 4 === 2 ? "rounded-bl-none" : "rounded-br-none"
    }`}
    style={{ borderColor: "#000000" }}
  >
    <img
      src={speaker.image}
      alt={`${speaker.name}, ${speaker.company}`}
      className={`w-full h-80 object-cover ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
    />
    <div className="p-3 text-center flex-1 flex flex-col justify-center">
      <h3 className="text-sm font-bold mb-1" style={{ color: "#151515" }}>
        {speaker.name}
      </h3>
      <p className="text-xs mb-1" style={{ color: "#151515" }}>
        {speaker.title}
      </p>
      <p className="text-xs" style={{ color: "#151515" }}>
        {speaker.company}
      </p>
    </div>
  </div>
))}

</div>


        {filteredSpeakers.length === 0 && searchQuery && (
          <div className="text-center mt-8" style={{ color: "#FFFFFF" }}>
            No speakers found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default ScaleUpSpeakers;
