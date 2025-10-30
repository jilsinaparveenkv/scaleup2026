// "use client";

// import React from "react";
// import Link from "next/link";
// function Navbar() {
//   return (
//     <div>
//       <nav
//         className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
//                    border-t border-gray-200 
//                    shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
//                    bg-[var(--color-bg)]"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">

//           {/* Left Logo */}
//           <div className="flex items-center">
//             <img
//               src="/assets/images/icon.svg"
//               alt="ScaleUp 2025"
//               className="h-6 sm:h-8 md:h-10"
//             />
//           </div>

//           {/* Center Text */}
//           <div
//             className="text-[6px] sm:text-[8px] md:text-base text-center flex flex-wrap justify-center gap-1 md:gap-2 "
//             style={{ color: "#060832" }}
//           >
          
//                 {/* <Link href="/#about" className="hover:text-red-500 transition"> */}
//                 <span><Link href="/#about">About US  </Link>| <Link href="/#theme">2025 Themes</Link> | <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:</span>
//                 {/* className="hover:text-gray-500 transition" */}
//             <a
//               href="https://2024.scaleupconclave.com/"
//               className="underline font-bold"
//             >
//               2024
//             </a>
//             <span>|</span>
//             <a
//               href="https://scaleup2025.netlify.app/"
//               className="underline font-bold"
//             >
//               2025
//             </a>
//             <span>|</span>
//             <a
//               href="https://dubai.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
            
//             >
//               Dubai
//             </a>
//           </div>

//           {/* Right buttons */}
//           <div className="flex flex-row sm:flex-row items-center gap-2">
//             <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
//               Book Stall
//             </button>
//             <a
//               href="https://makemypass.com/event/scaleup-conclave-2026"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base">
//                 Register
//               </button>
//             </a>
//           </div>

//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


// mobile
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <nav
//         className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
//                    border-t border-gray-200 
//                    shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
//                    bg-[var(--color-bg)]"
//       >
//         <div className="flex justify-between items-center">
          
//           {/* Left Logo */}
//           <div className="flex items-center">
//             <img
//               src="/assets/images/icon.svg"
//               alt="ScaleUp 2026"
//               className="h-6 sm:h-8 md:h-10"
//             />
//           </div>

//           {/* Desktop Center Links */}
//           <div
//             className="hidden md:flex text-[6px] sm:text-[8px] md:text-base text-center flex-wrap justify-center gap-2"
//             style={{ color: "#060832" }}
//           >
//             <span>
//               <Link href="/#about">About Us</Link> |{" "}
//               <Link href="/#theme">2025 Themes</Link> |{" "}
//               <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:
//             </span>
//             <a
//               href="https://2024.scaleupconclave.com/"
//               className="underline font-bold"
//             >
//               2024
//             </a>
//             <span>|</span>
//             <a
//               href="https://scaleup2025.netlify.app/"
//               className="underline font-bold"
//             >
//               2025
//             </a>
//             <span>|</span>
//             <a
//               href="https://dubai.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Dubai
//             </a>
//           </div>

//           {/* Right Buttons (Desktop) */}
//           <div className="hidden md:flex items-center gap-2">
//             <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
//               Book Stall
//             </button>
//             <a
//               href="https://makemypass.com/event/scaleup-conclave-2026"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base">
//                 Register
//               </button>
//             </a>
//           </div>

//           {/* Mobile Right Section */}
//           <div className="flex md:hidden items-center gap-3">
//             <a
//               href="https://makemypass.com/event/scaleup-conclave-2026"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition">
//                 Register
//               </button>
//             </a>
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
//               <Menu size={24} color="#333" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-3 flex flex-col items-center gap-2 text-sm text-gray-800">
//             <Link href="/#about" onClick={() => setIsOpen(false)}>
//               About Us
//             </Link>
//             <Link href="/#theme" onClick={() => setIsOpen(false)}>
//               2025 Themes
//             </Link>
//             <Link href="/#speakers" onClick={() => setIsOpen(false)}>
//               ScaleUp Speakers
//             </Link>
//             <span className="font-semibold mt-1">Previous Editions</span>
//             <div className="flex gap-2">
//               <a href="https://2024.scaleupconclave.com/" className="underline">
//                 2024
//               </a>
//               <a href="https://scaleup2025.netlify.app/" className="underline">
//                 2025
//               </a>
//               <a
//                 href="https://dubai.scaleupconclave.com/"
//                 className="underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Dubai
//               </a>
//             </div>
//             <button className="mt-2 px-3 py-1 border border-gray-300 rounded-3xl text-sm hover:bg-blue-50">
//               Book Stall
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


// ------------------------------------------------------------------------------------------------------------

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import Modal from "./RegistrationForm"; // Import the Modal component

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

//   return (
//     <div>
//       <nav
//         className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
//                    border-t border-gray-200 
//                    shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
//                    bg-[var(--color-bg)]"
//       >
//         <div className="flex justify-between items-center">
          
//           {/* Left Logo */}
//           <div className="flex items-center">
//             <img
//               src="/assets/images/icon.svg"
//               alt="ScaleUp 2026"
//               className="h-6 sm:h-8 md:h-10"
//             />
//           </div>

//           {/* Desktop Center Links */}
//           <div
//             className="hidden md:flex text-[6px] sm:text-[8px] md:text-base text-center flex-wrap justify-center gap-2"
//             style={{ color: "#060832" }}
//           >
//             <span>
//               <Link href="/#about">About Us</Link> |{" "}
//               <Link href="/#theme">2025 Themes</Link> |{" "}
//               <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:
//             </span>
//             <a
//               href="https://2024.scaleupconclave.com/"
//               className="underline font-bold"
//             >
//               2024
//             </a>
//             <span>|</span>
//             <a
//               href="https://scaleup2025.netlify.app/"
//               className="underline font-bold"
//             >
//               2025
//             </a>
//             <span>|</span>
//             <a
//               href="https://dubai.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Dubai
//             </a>
//           </div>

//           {/* Right Buttons (Desktop) */}
//           <div className="hidden md:flex items-center gap-2">
//             <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
//               Book Stall
//             </button>
//             <button
//               onClick={() => setIsModalOpen(true)} // Open modal instead of link
//               className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base"
//             >
//               Register
//             </button>
//           </div>

//           {/* Mobile Right Section */}
//           <div className="flex md:hidden items-center gap-3">
//             <button
//               onClick={() => setIsModalOpen(true)} // Open modal instead of link
//               className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
//               <Menu size={24} color="#333" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-3 flex flex-col items-center gap-2 text-sm text-gray-800">
//             <Link href="/#about" onClick={() => setIsOpen(false)}>
//               About Us
//             </Link>
//             <Link href="/#theme" onClick={() => setIsOpen(false)}>
//               2025 Themes
//             </Link>
//             <Link href="/#speakers" onClick={() => setIsOpen(false)}>
//               ScaleUp Speakers
//             </Link>
//             <span className="font-semibold mt-1">Previous Editions</span>
//             <div className="flex gap-2">
//               <a href="https://2024.scaleupconclave.com/" className="underline">
//                 2024
//               </a>
//               <a href="https://scaleup2025.netlify.app/" className="underline">
//                 2025
//               </a>
//               <a
//                 href="https://dubai.scaleupconclave.com/"
//                 className="underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Dubai
//               </a>
//             </div>
//             <button className="mt-2 px-3 py-1 border border-gray-300 rounded-3xl text-sm hover:bg-blue-50">
//               Book Stall
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Render the Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }

// export default Navbar;



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import Modal from "./RegistrationForm"; // Import the Modal component

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

//   return (
//     <div>
//       <nav
//         className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
//                    border-t border-gray-200 
//                    shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
//                    bg-[var(--color-bg)]"
//       >
//         <div className="flex justify-between items-center">
          
//           {/* Left Logo */}
//           <div className="flex items-center">
//             <img
//               src="/assets/images/icon.svg"
//               alt="ScaleUp 2026"
//               className="h-6 sm:h-8 md:h-10"
//             />
//           </div>

//           {/* Desktop Center Links */}
//           <div
//             className="hidden md:flex text-[6px] sm:text-[8px] md:text-base text-center flex-wrap justify-center gap-2"
//             style={{ color: "#060832" }}
//           >
//             <span>
//               <Link href="/#about">About Us</Link> |{" "}
//               <Link href="/#theme">2025 Themes</Link> |{" "}
//               <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:
//             </span>
//             <a
//               href="https://2024.scaleupconclave.com/"
//               className="underline font-bold"
//             >
//               2024
//             </a>
//             <span>|</span>
//             <a
//               href="https://scaleup2025.netlify.app/"
//               className="underline font-bold"
//             >
//               2025
//             </a>
//             <span>|</span>
//             <a
//               href="https://dubai.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Dubai
//             </a>
//           </div>

//           {/* Right Buttons (Desktop) */}
//           <div className="hidden md:flex items-center gap-2">
//             <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
//               Book Stall
//             </button>
//             <button
//               onClick={() => setIsModalOpen(true)} // Open modal instead of link
//               className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base"
//             >
//               Register
//             </button>
//           </div>

//           {/* Mobile Right Section */}
//           <div className="flex md:hidden items-center gap-3">
//             <button
//               onClick={() => setIsModalOpen(true)} // Open modal instead of link
//               className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
//               <Menu size={24} color="#333" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-3 flex flex-col items-center gap-2 text-sm text-gray-800">
//             <Link href="/#about" onClick={() => setIsOpen(false)}>
//               About Us
//             </Link>
//             <Link href="/#theme" onClick={() => setIsOpen(false)}>
//               2025 Themes
//             </Link>
//             <Link href="/#speakers" onClick={() => setIsOpen(false)}>
//               ScaleUp Speakers
//             </Link>
//             <span className="font-semibold mt-1">Previous Editions</span>
//             <div className="flex gap-2">
//               <a href="https://2024.scaleupconclave.com/" className="underline">
//                 2024
//               </a>
//               <a href="https://scaleup2025.netlify.app/" className="underline">
//                 2025
//               </a>
//               <a
//                 href="https://dubai.scaleupconclave.com/"
//                 className="underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Dubai
//               </a>
//             </div>
//             <button className="mt-2 px-3 py-1 border border-gray-300 rounded-3xl text-sm hover:bg-blue-50">
//               Book Stall
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Render the Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }

// export default Navbar;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// interface NavbarProps {
//   isModalOpen: boolean;
//   setIsModalOpen: (open: boolean) => void;
// }

// function Navbar({ isModalOpen, setIsModalOpen }: NavbarProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="" style={{fontFamily:"Plus Jakarta Sans"}}>
//       <nav
//         className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
//                    border-t border-gray-200 
//                    shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
//                    bg-[var(--color-bg)]"
//       >
//         <div className="flex justify-between items-center">
//           {/* Left Logo */}
//           <div className="flex items-center">
//             <img
//               src="/assets/images/icon.svg"
//               alt="ScaleUp 2026"
//               className="h-6 sm:h-8 md:h-10"
//             />
//           </div>

//           {/* Desktop Center Links */}
//           <div
//             className="hidden md:flex text-[6px] sm:text-[8px] md:text-base text-center flex-wrap justify-center gap-2"
//             style={{ color: "#060832" }}
//           >
//             <span>
//               <Link href="/#about">About Us</Link> |{" "}
//               <Link href="/#theme">2025 Themes</Link> |{" "}
//               <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:
//             </span>
//             <a
//               href="https://2024.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               2024
//             </a>
//             <span>|</span>
//             <a
//               href="https://scaleup2025.netlify.app/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               2025
//             </a>
//             <span>|</span>
//             <a
//               href="https://dubai.scaleupconclave.com/"
//               className="underline font-bold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Dubai
//             </a>
//           </div>

//           {/* Right Buttons (Desktop) */}
//           <div className="hidden md:flex items-center gap-2">
//             <button
//             onClick={() => setIsModalOpen(true)}
//              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
//               Book Stall
//             </button>
//             <button
           
              
//               className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base"
//             >
//               Register
//             </button>
//           </div>

//           {/* Mobile Right Section */}
//           <div className="flex md:hidden items-center gap-3">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
//               <Menu size={24} color="#333" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-3 flex flex-col items-center gap-2 text-sm text-gray-800">
//             <Link href="/#about" onClick={() => setIsOpen(false)}>
//               About Us
//             </Link>
//             <Link href="/#theme" onClick={() => setIsOpen(false)}>
//               2025 Themes
//             </Link>
//             <Link href="/#speakers" onClick={() => setIsOpen(false)}>
//               ScaleUp Speakers
//             </Link>
//             <span className="font-semibold mt-1">Previous Editions</span>
//             <div className="flex gap-2">
//               <a href="https://2024.scaleupconclave.com/" className="underline"
//               target="_blank"
//               rel="noopener noreferrer">
//                 2024
//               </a>
//               <a href="https://scaleup2025.netlify.app/" className="underline"
//               target="_blank"
//               rel="noopener noreferrer">
//                 2025
//               </a>
//               <a
//                 href="https://dubai.scaleupconclave.com/"
//                 className="underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Dubai
//               </a>
//             </div>
//             <button className="mt-2 px-3 py-1 border border-gray-300 rounded-3xl text-sm hover:bg-blue-50">
//               Book Stall
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import RealRegistrations from "./Realregistration";


interface NavbarProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

function Navbar({ isModalOpen, setIsModalOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="" style={{fontFamily:"Plus Jakarta Sans"}}>
      <nav
        className="w-full rounded-4xl px-4 sm:px-7 py-3 my-3 
                   border-t border-gray-200 
                   shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.08)] 
                   bg-[var(--color-bg)]"
      >
        <div className="flex justify-between items-center">
          {/* Left Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/icon.svg"
              alt="ScaleUp 2026"
              className="h-6 sm:h-8 md:h-10"
            />
          </div>

          {/* Desktop Center Links */}
          <div
            className="hidden md:flex text-[6px] sm:text-[8px] md:text-base text-center flex-wrap justify-center gap-2"
            style={{ color: "#060832" }}
          >
            <span>
              <Link href="/#about">About Us</Link> |{" "}
              <Link href="/#theme">2025 Themes</Link> |{" "}
              <Link href="/#speakers">ScaleUp Speakers</Link> | Previous editions:
            </span>
            <a
              href="https://2024.scaleupconclave.com/"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              2024
            </a>
            <span>|</span>
            <a
              href="https://scaleup2025.netlify.app/"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              2025
            </a>
            <span>|</span>
            <a
              href="https://dubai.scaleupconclave.com/"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dubai
            </a>
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <button
            onClick={() => setIsModalOpen(true)}
             className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-400 text-gray-800 rounded-4xl hover:bg-blue-50 transition max-w-[120px] text-sm sm:text-base">
              Book Stall
            </button>
            <button
        onClick={() => setIsRegisterModalOpen(true)}
        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 transition max-w-[120px] text-sm sm:text-base"
      >
        Register
      </button>

      {/* Registration Modal */}
      {/* <RealRegistrations
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      /> */}
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-3">
          <button
  onClick={() => setIsRegisterModalOpen(true)}
  className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
>
  Register
</button>

            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              <Menu size={24} color="#333" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 flex flex-col items-center gap-2 text-sm text-gray-800">
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/#theme" onClick={() => setIsOpen(false)}>
              2025 Themes
            </Link>
            <Link href="/#speakers" onClick={() => setIsOpen(false)}>
              ScaleUp Speakers
            </Link>
            <span className="font-semibold mt-1">Previous Editions</span>
            <div className="flex gap-2">
              <a href="https://2024.scaleupconclave.com/" className="underline"
              target="_blank"
              rel="noopener noreferrer">
                2024
              </a>
              <a href="https://scaleup2025.netlify.app/" className="underline"
              target="_blank"
              rel="noopener noreferrer">
                2025
              </a>
              <a
                href="https://dubai.scaleupconclave.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dubai
              </a>
            </div>
            <button 
  onClick={() => setIsModalOpen(true)}
  className="mt-2 px-3 py-1 border border-gray-300 rounded-3xl text-sm hover:bg-blue-50"
>
  Book Stall
</button>

          </div>
        )}

   {/* Registration Modal */}
   <RealRegistrations
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      </nav>
    </div>
  );
}

export default Navbar;