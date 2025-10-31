// // good 

// "use client";

// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// // Define the props interface for FAQCard
// interface FAQCardProps {
//   question: string;
//   answer: string;
// }

// function ScaleUpFAQs() {
//   const faqs = [
//     {
//       id: 1,
//       question: "Why is Scaleup the best conference?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 2,
//       question: "How to launch a Startup in Scaleup?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 3,
//       question: "When was Scaleup was founded?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 4,
//       question: "Who founded Scaleup Village?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 5,
//       question: "Is Scaleup the future of the Mallapuram?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 6,
//       question: "Who are the Scaleup founders?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//   ];

//   // Dummy eventData to render header images (replace with actual data or props)
//   const eventData = {
//     header: {
//       leftSvg: "/assets/images/07faqs.svg",
//       leftIcon: "/assets/images/group3.svg",
//     },
//   };

//   return (
//     <section className="container mx-auto px-4 py-12 space-y-12">
//       {/* ===== Custom Header Section ===== */}
//       <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
//         {/* Left SVG - 35% */}
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4">
//           <img
//             src={eventData.header.leftSvg}
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>

//         {/* Right Text - 65% */}
//         <div className="flex-1 w-full md:w-2/3 space-y-6 mt-12">


//           <p
//             className="font-normal text-[28px] leading-[36px] tracking-[0px] mt-10"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave  hosted by ScaleUp Village, that brings together 
//             entrepreneurs, investors, aspiring business leaders
//           </p>
//           <div className="flex justify-end items-center mb-4">
//             <img
//               src={eventData.header.leftIcon}
//               alt="About Icons"
//               className="w-16 md:w-20 h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ===== FAQ Section ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {faqs.map((faq) => (
//           <FAQCard key={faq.id} question={faq.question} answer={faq.answer} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function FAQCard({ question, answer }: FAQCardProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleFAQ = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
// <div
//   className="rounded-3xl shadow-md p-4 border min-h-[100px] flex flex-col justify-center"
//   style={{ borderColor: "#000000", backgroundColor: "#FFFFFF" }}
// >
//   <div
//     className="flex items-center justify-between cursor-pointer"
//     onClick={toggleFAQ}
//   >
//     <h3 className="text-lg font-medium" style={{color:"#000000"}}>{question}</h3>
//     <div
//   className="w-8 h-8 flex items-center justify-center rounded-full border"
//   style={{
//     borderColor: isOpen ? "#FFFFFF" : "#FFFFFF",
//     backgroundColor: isOpen ? "#418CFF" : "#F7F7FF",
//   }}
// >
//   {isOpen ? (
//     <Minus className="w-4 h-4" style={{ color: "#FFFFFF" }} />
//   ) : (
//     <Plus className="w-4 h-4" style={{ color: "#6F6C90" }} />
//   )}
// </div>


//   </div>

//   {isOpen && <p className="mt-4" style={{color:"#6F6C90"}}>{answer}</p>}
// </div>

//   );
// }

// export default ScaleUpFAQs;



// "use client";

// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// interface FAQCardProps {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onClick: () => void;
// }

// function ScaleUpFAQs() {
//   const faqs = [
//     {
//       id: 1,
//       question: "Why is Scaleup the best conference?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 2,
//       question: "How to launch a Startup in Scaleup?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 3,
//       question: "When was Scaleup was founded?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 4,
//       question: "Who founded Scaleup Village?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 5,
//       question: "Is Scaleup the future of the Mallapuram?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//     {
//       id: 6,
//       question: "Who are the Scaleup founders?",
//       answer:
//         "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
//     },
//   ];

//   const eventData = {
//     header: {
//       leftSvg: "/assets/images/07faqs.svg",
//       leftIcon: "/assets/images/group3.svg",
//     },
//   };

//   // Track which FAQ is currently open
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const handleToggle = (id: number) => {
//     // If the clicked FAQ is already open, close it; otherwise open it
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
//     <section className="container mx-auto px-4 py-12 space-y-12">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
//         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4">
//           <img
//             src={eventData.header.leftSvg}
//             alt="About ScaleUp"
//             className="w-full h-auto"
//           />
//         </div>

//         <div className="flex-1 w-full md:w-2/3 space-y-6 mt-25">
//           <p
//             className="font-normal font-plusJakartaSans text-[28px] leading-[36px] tracking-[0px] mt-10"
//             style={{ color: "#202020" }}
//           >
//             ScaleUp Conclave  hosted by ScaleUp Village, that brings together 
//             entrepreneurs, investors, aspiring business leaders
//           </p>
//           <div className="flex justify-end items-center mb-4">
//             <img
//               src={eventData.header.leftIcon}
//               alt="About Icons"
//               className="w-16 md:w-20 h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {faqs.map((faq) => (
//           <FAQCard
//             key={faq.id}
//             question={faq.question}
//             answer={faq.answer}
//             isOpen={openFAQ === faq.id}
//             onClick={() => handleToggle(faq.id)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// function FAQCard({ question, answer, isOpen, onClick }: FAQCardProps) {
//   return (
//     <div
//       className="rounded-3xl shadow-md p-4 border min-h-[100px] flex flex-col justify-center"
//       style={{ borderColor: "#000000", backgroundColor: "#FFFFFF" }}
//     >
//       <div
//         className="flex items-center justify-between cursor-pointer"
//         onClick={onClick}
//       >
//         <h3 className="text-lg font-medium" style={{ color: "#000000" }}>
//           {question}
//         </h3>
//         <div
//           className="w-8 h-8 flex items-center justify-center rounded-full border"
//           style={{
//             borderColor: "#FFFFFF",
//             backgroundColor: isOpen ? "#418CFF" : "#F7F7FF",
//           }}
//         >
//           {isOpen ? (
//             <Minus className="w-4 h-4" style={{ color: "#FFFFFF" }} />
//           ) : (
//             <Plus className="w-4 h-4" style={{ color: "#6F6C90" }} />
//           )}
//         </div>
//       </div>

//       {isOpen && <p className="mt-4" style={{ color: "#6F6C90" }}>{answer}</p>}
//     </div>
//   );
// }

// export default ScaleUpFAQs;







// main


// "use client";

// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// interface FAQCardProps {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onClick: () => void;
// }

// function ScaleUpFAQs() {
//   const faqs = [
//     {
//       id: 1,
//       question: "What is the purpose of the business conclave?",
//       answer:
//         "The business conclave aims to provide a platform for entrepreneurs, investors, business enthusiasts, and studentsto share insights, learn from industry leaders, and network with like-minded professionals.",
//     },
//     {
//       id: 2,
//       question: "How can startups benefit from participating in the conclave?",
//       answer:
//         "Startups can gain valuable mentorship, present their ideas to potential investors, receive feedback, and build connections that could lead to funding and collaborations.",
//     },
//     {
//       id: 3,
//       question: "Who can attend the business conclave?",
//       answer:
//         "The event is open to entrepreneurs, investors, business professionals, students, and anyone interested in the business ecosystem.",
//     },
//     {
//       id: 4,
//       question: "Is there a registration fee for attending the conclave?",
//       answer:
//         "There is no registration fee for general attendants. The Platinum membership fee is five thousand rupees. Kindly refer to the platinum section to know more details.",
//     },
//     {
//       id: 5,
//       question: "What types of sessions or activities can participants expect?",
//       answer:
//         "Participants can expect keynote speeches, panel discussions, workshops, pitch competitions, networking sessions, and showcases of new-age technologies and solutions.",
//     },
//     {
//       id: 6,
//       question: "Will there be opportunities to network with investors and industry leaders?",
//       answer:
//         "Yes, the conclave is designed to foster networking, providing ample opportunities to connect with investors, mentors, and other key industry players.",
//     },
//   ];

//   const eventData = {
//     header: {
//       leftSvg: "/assets/images/07faqs.svg",
//       leftIcon: "/assets/images/group3.svg",
//     },
//   };

//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const handleToggle = (id: number) => {
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
// //     <section className="relative w-full px-6 md:px-16 max-w-full font-plusJakartaSans container mx-auto -px-10 py-12 space-y-12"  style={{fontFamily:"Plus Jakarta Sans"}}>
// //       {/* Header Section */}
// //       <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
// //         {/* Left Image (for desktop) */}
// //         <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center">
// //           <img
// //             src={eventData.header.leftSvg}
// //             alt="About ScaleUp"
// //             className="w-full h-auto md:w-auto"
// //           />
// //         </div>

// //         {/* Right Content */}
// //         <div className="flex-1 w-full md:w-2/3 space-y-6">
// //           {/* --- MOBILE VIEW ORDER --- */}
// //           <div className="flex flex-col md:hidden items-center text-center space-y-4">
// //           <div className="flex justify-center mt-6 mb-4">
// //             <img
// //               src={eventData.header.leftSvg}
// //               alt="About ScaleUp"
// //               className="w-[55%] max-w-[180px] h-auto"
// //             />
// // </div>

// // {/* <div className="flex justify-center mt-6 mb-4">
// //     <img
// //       src="/assets/images/05speakers.svg"
// //       alt="About ScaleUp"
// //       className="w-[55%] max-w-[180px] h-auto"
// //     />
// //   </div> */}



// //             <img
// //               src={eventData.header.leftIcon}
// //               alt="About Icons"
// //               className="w-35 h-auto"
// //             />
// //             <p
// //               className="font-normal font-plusJakartaSans text-[20px] leading-[30px] tracking-[0px] mt-2 px-4"
// //               style={{ color: "#202020" ,fontFamily:"Plus Jakarta Sans"}}
// //             >
// //               Find answers to common questions about ScaleUp Conclave, participation, event highlights, opportunities, logistics, and everything needed for a smooth experience.
// //             </p>

// //           </div>

// //           {/* --- DESKTOP VIEW --- */}
// //           <div className="hidden md:flex flex-col space-y-6 mt-10">

// //             <p
// //               className="font-normal font-plusJakartaSans mt-13 text-[28px] leading-[36px] tracking-[0px]"
// //               style={{ color: "#202020" ,fontFamily:"Plus Jakarta Sans"}}
// //             >
// //               Find answers to common questions about ScaleUp Conclave, participation, event highlights, opportunities, logistics, and everything needed for a smooth experience.
// //             </p>
// //             <div className="flex justify-end md:-mt-10 items-center">
// //               <img
// //                 src={eventData.header.leftIcon}
// //                 alt="About Icons"
// //                 className="w-20 md:w-25 h-auto"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* FAQ Section */}
// //       {/* FAQ Section */}
// // <div className="flex flex-col md:flex-row gap-6">
// //   {/* Left Column */}
// //   <div className="flex-1 flex flex-col gap-6">
// //     {faqs
// //       .filter((_, i) => i % 2 === 0) // even-indexed FAQs
// //       .map((faq) => (
// //         <FAQCard
// //           key={faq.id}
// //           question={faq.question}
// //           answer={faq.answer}
// //           isOpen={openFAQ === faq.id}
// //           onClick={() => handleToggle(faq.id)}
// //         />
// //       ))}
// //   </div>

// //   {/* Right Column */}
// //   <div className="flex-1 flex flex-col gap-6">
// //     {faqs
// //       .filter((_, i) => i % 2 !== 0) // odd-indexed FAQs
// //       .map((faq) => (
// //         <FAQCard
// //           key={faq.id}
// //           question={faq.question}
// //           answer={faq.answer}
// //           isOpen={openFAQ === faq.id}
// //           onClick={() => handleToggle(faq.id)}
// //         />
// //       ))}
// //   </div>
// // </div>

// //     </section>
// <section
//   className="relative w-full px-6 md:px-16 max-w-full font-plusJakartaSans container mx-auto py-8 space-y-12"
//   style={{ fontFamily: "Plus Jakarta Sans" }}
// >

//     {/* HEADER SECTION*/}
// <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">

//   {/* ---------- Left Image (Desktop Only) ---------- */}
//   <div className="hidden md:flex flex-shrink-0 w-full md:w-1/3 flex-col gap-4 items-start">
//     <img
//       src={eventData.header.leftSvg}
//       alt="About ScaleUp"
//       className="w-full h-auto md:w-auto"
//     />
//   </div>

//   {/* ---------- Right Content ---------- */}
//   <div className="flex-1 w-full md:w-2/3 space-y-6">

//     {/* ===== MOBILE VIEW HEADER ===== */}
//     <div className="block lg:hidden">
//   {/* Mobile Top Image */}
//   <div className="flex justify-center mt-6 mb-4">
//     <img
//       src={eventData.header.leftSvg}
//       alt="About ScaleUp"
//       className="w-[55%] max-w-[180px] h-auto"
//     />
//   </div>

//   {/* Mobile Icon */}
//   <img
//     src={eventData.header.leftIcon}
//     alt="About Icons"
//     className="w-25 h-auto mx-auto mt-4"
//   />

//   {/* Mobile Text */}
//   <div className="flex justify-start mb-6 px-2">
//     <p
//       className="text-[18px] leading-[28px] mt-5 text-start -mb-5"
//       style={{ color: "#202020" }}
//     >
//       Find answers to common questions about ScaleUp Conclave, participation,
//       event highlights, opportunities, logistics, and everything needed for a
//       smooth experience.
//     </p>
//   </div>
// </div>
//     {/* ===== DESKTOP VIEW HEADER ===== */}
//     <div className="hidden md:flex flex-col space-y-6 mt-10">
//       {/* Desktop Text */}
//       <p
//         className="font-normal text-[28px] leading-[36px] tracking-[0px]"
//         style={{ color: "#202020" }}
//       >
//         Find answers to common questions about ScaleUp Conclave, participation,
//         event highlights, opportunities, logistics, and everything needed for a
//         smooth experience.
//       </p>

//       {/* Desktop Icon (aligned right) */}
//       <div className="flex justify-end items-center -mt-10">
//         <img
//           src={eventData.header.leftIcon}
//           alt="About Icons"
//           className="w-20 md:w-25 h-auto"
//         />
//       </div>
//     </div>
//   </div>
// </div>

//   {/* ==================================================
//       FAQ SECTION
//   ================================================== */}
//   <div className="flex flex-col md:flex-row gap-6">

//     {/* ---------- Left Column (Even Indexed) ---------- */}
//     <div className="flex-1 flex flex-col gap-6">
//       {faqs
//         .filter((_, i) => i % 2 === 0)
//         .map((faq) => (
//           <FAQCard
//             key={faq.id}
//             question={faq.question}
//             answer={faq.answer}
//             isOpen={openFAQ === faq.id}
//             onClick={() => handleToggle(faq.id)}
//           />
//         ))}
//     </div>

//     {/* ---------- Right Column (Odd Indexed) ---------- */}
//     <div className="flex-1 flex flex-col gap-6">
//       {faqs
//         .filter((_, i) => i % 2 !== 0)
//         .map((faq) => (
//           <FAQCard
//             key={faq.id}
//             question={faq.question}
//             answer={faq.answer}
//             isOpen={openFAQ === faq.id}
//             onClick={() => handleToggle(faq.id)}
//           />
//         ))}
//     </div>
//   </div>
// </section>


//   );
// }

// function FAQCard({ question, answer, isOpen, onClick }: FAQCardProps) {
//   return (
//     <div
//       className="rounded-3xl shadow-md p-4 border min-h-[100px] flex flex-col justify-center"
//       style={{ borderColor: "#000000", backgroundColor: "#FFFFFF" }}
//     >
//       <div
//         className="flex items-center justify-between cursor-pointer"
//         onClick={onClick}
//       >
//         <h3 className="text-lg font-medium" style={{ color: "#000000" }}>
//           {question}
//         </h3>
//         <div
//           className="w-8 h-8 flex items-center justify-center rounded-full border"
//           style={{
//             borderColor: "#FFFFFF",
//             backgroundColor: isOpen ? "#418CFF" : "#F7F7FF",
//           }}
//         >
//           {isOpen ? (
//             <Minus className="w-4 h-4" style={{ color: "#FFFFFF" }} />
//           ) : (
//             <Plus className="w-4 h-4" style={{ color: "#6F6C90" }} />
//           )}
//         </div>
//       </div>

//       {isOpen && (
//         <p className="mt-4" style={{ color: "#6F6C90" }}>
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ScaleUpFAQs;





"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function ScaleUpFAQs() {
  const faqs = [
    {
      id: 1,
      question: "What is the purpose of the business conclave?",
      answer:
        "The business conclave aims to provide a platform for entrepreneurs, investors, business enthusiasts, and students to share insights, learn from industry leaders, and network with like-minded professionals.",
    },
    {
      id: 2,
      question: "How can startups benefit from participating in the conclave?",
      answer:
        "Startups can gain valuable mentorship, present their ideas to potential investors, receive feedback, and build connections that could lead to funding and collaborations.",
    },
    {
      id: 3,
      question: "Who can attend the business conclave?",
      answer:
        "The event is open to entrepreneurs, investors, business professionals, students, and anyone interested in the business ecosystem.",
    },
    {
      id: 4,
      question: "Is there a registration fee for attending the conclave?",
      answer:
        "There is no registration fee for general attendants. The Platinum membership fee is five thousand rupees. Kindly refer to the platinum section to know more details.",
    },
    {
      id: 5,
      question: "What types of sessions or activities can participants expect?",
      answer:
        "Participants can expect keynote speeches, panel discussions, workshops, pitch competitions, networking sessions, and showcases of new-age technologies and solutions.",
    },
    {
      id: 6,
      question: "Will there be opportunities to network with investors and industry leaders?",
      answer:
        "Yes, the conclave is designed to foster networking, providing ample opportunities to connect with investors, mentors, and other key industry players.",
    },
  ];

  const eventData = {
    header: {
      leftSvg: "/assets/images/07faqs.svg",
      leftIcon: "/assets/images/group3.svg",
    },
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      className="relative w-full px-5 md:px-16 max-w-full font-plusJakartaSans container mx-auto py-8 space-y-12"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      {/* ==================================================
          HEADER SECTION
      ================================================== */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
        {/* Desktop Left Image */}
        <div className="hidden lg:flex flex-shrink-0 w-full lg:w-1/3 flex-col gap-4 items-start">
          <img
            src={eventData.header.leftSvg}
            alt="About ScaleUp"
            className="w-full h-auto lg:w-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full lg:w-2/3 space-y-6">
          {/* ================= MOBILE ================= */}
          <div className="block sm:hidden m-0">
            <div className="flex justify-center">
              <img
                src={eventData.header.leftSvg}
                alt="About ScaleUp"
                className="w-[55%] max-w-[180px] h-auto"
              />
            </div>

            <img
              src={eventData.header.leftIcon}
              alt="About Icons"
              className="w-24 h-auto mx-auto mt-4"
            />

            <div className="flex justify-start px-0">
              <p className="text-[18px] leading-[28px] mt-5 text-start text-[#202020]" style={{fontFamily:"Plus Jakarta Sans"}}>
                Find answers to common questions about ScaleUp Conclave,
                participation, event highlights, opportunities, logistics, and
                everything needed for a smooth experience.
              </p>
            </div>
          </div>

          {/* ================= TABLET ================= */}
          <div className="hidden sm:block lg:hidden m-0">
            <div className="flex justify-center">
              <img
                src={eventData.header.leftSvg}
                alt="About ScaleUp"
                className="w-[45%] max-w-[220px] h-auto"
              />
            </div>

            <div className="flex justify-center">
              <img
                src={eventData.header.leftIcon}
                alt="About Icons"
                className="w-[90px] h-auto mt-3"
              />
            </div>

            <div className="flex justify-start px-4 mt-4 md:px-0">
              <p className="w-full text-[20px] leading-[30px] text-[#202020]" style={{fontFamily:"Plus Jakarta Sans"}}>
                Find answers to common questions about ScaleUp Conclave,
                participation, event highlights, opportunities, logistics, and
                everything needed for a smooth experience.
              </p>
            </div>

          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex flex-col space-y-6 mt-10">
            <p
              className="font-normal text-[28px] leading-[36px] tracking-[0px]"
              style={{ color: "#202020",fontFamily:"Plus Jakarta Sans" }}
            >
              Find answers to common questions about ScaleUp Conclave,
              participation, event highlights, opportunities, logistics, and
              everything needed for a smooth experience.
            </p>

            <div className="flex justify-end items-center -mt-10">
              <img
                src={eventData.header.leftIcon}
                alt="About Icons"
                className="w-20 lg:w-24 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          FAQ SECTION
      ================================================== */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT COLUMN (Even Indexed FAQs) */}
        <div className="flex-1 flex flex-col gap-6">
          {faqs
            .filter((_, i) => i % 2 === 0)
            .map((faq) => (
              <FAQCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
        </div>

        {/* RIGHT COLUMN (Odd Indexed FAQs) */}
        <div className="flex-1 flex flex-col gap-6">
          {faqs
            .filter((_, i) => i % 2 !== 0)
            .map((faq) => (
              <FAQCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================
   FAQ CARD COMPONENT
================================================== */
function FAQCard({ question, answer, isOpen, onClick }: FAQCardProps) {
  return (
    <div
      className="rounded-3xl shadow-md p-5 border min-h-[100px] flex flex-col justify-center transition-all duration-300"
      style={{ borderColor: "#000000", backgroundColor: "#FFFFFF" }}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3
          className="text-[18px] md:text-lg font-medium"
          style={{ color: "#000000" }}
        >
          {question}
        </h3>

        <div
          className="w-8 h-6 flex items-center justify-center rounded-full border transition-colors duration-300"
          style={{
            borderColor: "#FFFFFF",
            backgroundColor: isOpen ? "#418CFF" : "#F7F7FF",
          }}
        >
          {isOpen ? (
            <Minus className="w-10 h-4 text-white " />
          ) : (
            <Plus className="w-10 h-4 text-[#6F6C90] " />
          )}
        </div>
      </div>

      {isOpen && (
        <p className="mt-4 text-[#6F6C90] text-[16px] leading-[26px]">
          {answer}
        </p>
      )}
    </div>
  );
}

export default ScaleUpFAQs;
