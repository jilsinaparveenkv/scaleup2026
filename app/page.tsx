

"use client";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Date from "@/components/Date";
import EventRoaster from "@/components/EventRoaster";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Involved from "@/components/Involved";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Speakers from "@/components/Speakers";
import Theme from "@/components/Theme";
import Marque from "@/components/Marque";
import Timeline from "@/components/Timeline";
import { useState, useEffect, useRef } from "react";
// import { Whatsapp } from "@/components/Whatsapp";
import Modal from "@/components/RegistrationForm";
import { Whatsapp } from "@/components/Whatsapp";
// import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const hasShown = useRef(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (hasShown.current) return;

    const timer = setTimeout(() => {
      setOpen(true); // Open the WhatsApp modal
      hasShown.current = true;
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col overflow-hidden relative">
      {/* Modal with blurred background */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-end z-50">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Hero />
      <Date />
      <About />
      <Marque />
      <Involved />
      <Theme />
      <Timeline />
      <Speakers />
      <Banner />
      <EventRoaster />
      <Partners />
      <Faqs />
      <Footer />
      {/* WhatsApp Modal */}
      <Whatsapp open={open} setOpen={setOpen} />



    </main>
  );
}