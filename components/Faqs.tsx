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
        "The business conclave aims to provide a platform for entrepreneurs, investors, business enthusiasts, and studentsto share insights, learn from industry leaders, and network with like-minded professionals.",
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
    <section className="container mx-auto px-4 py-12 space-y-12" style={{fontFamily:"Plus Jakarta Sans"}}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 w-full">
        {/* Left Image (for desktop) */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col gap-4 md:items-start items-center">
          <img
            src={eventData.header.leftSvg}
            alt="About ScaleUp"
            className="w-full h-auto md:w-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full md:w-2/3 space-y-6">
          {/* --- MOBILE VIEW ORDER --- */}
          <div className="flex flex-col md:hidden items-center text-center space-y-4">
            {/* <img
              src={eventData.header.leftSvg}
              alt="About ScaleUp"
              className="w-full max-w-sm h-auto"
            /> */}
            <img
              src={eventData.header.leftIcon}
              alt="About Icons"
              className="w-35 h-auto"
            />
            <p
              className="font-normal font-plusJakartaSans text-[20px] leading-[30px] tracking-[0px] mt-2 px-4"
              style={{ color: "#202020" }}
            >
              ScaleUp Conclave hosted by ScaleUp Village, that brings together
              entrepreneurs, investors, aspiring business leaders
            </p>
          </div>

          {/* --- DESKTOP VIEW --- */}
          <div className="hidden md:flex flex-col space-y-6 mt-10">
            <p
              className="font-normal font-plusJakartaSans text-[28px] leading-[36px] tracking-[0px]"
              style={{ color: "#202020" }}
            >
              ScaleUp Conclave hosted by ScaleUp Village, that brings together
              entrepreneurs, investors, aspiring business leaders
            </p>
            <div className="flex justify-end items-center">
              <img
                src={eventData.header.leftIcon}
                alt="About Icons"
                className="w-20 md:w-30 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <FAQCard
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQCard({ question, answer, isOpen, onClick }: FAQCardProps) {
  return (
    <div
      className="rounded-3xl shadow-md p-4 border min-h-[100px] flex flex-col justify-center"
      style={{ borderColor: "#000000", backgroundColor: "#FFFFFF" }}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium" style={{ color: "#000000" }}>
          {question}
        </h3>
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full border"
          style={{
            borderColor: "#FFFFFF",
            backgroundColor: isOpen ? "#418CFF" : "#F7F7FF",
          }}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" style={{ color: "#FFFFFF" }} />
          ) : (
            <Plus className="w-4 h-4" style={{ color: "#6F6C90" }} />
          )}
        </div>
      </div>

      {isOpen && (
        <p className="mt-4" style={{ color: "#6F6C90" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default ScaleUpFAQs;
