// components/RegistrationSuccessfully.tsx
"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationSuccessfully({ isOpen, onClose }: ModalProps) {
  const [modalWidth, setModalWidth] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      setModalWidth(`${window.innerWidth / 2}px`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 flex items-center justify-center
        backdrop-blur-md bg-white/20
        z-50 transition-all duration-300
      "
      style={{fontFamily:"Plus Jakarta Sans"}}
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto"
        style={{ width: modalWidth }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-600 mt-8">Thank You!</h2>
          <p className="text-lg text-gray-700 mt-4">
            Your details have been successfully submitted. <br /> Our team will
            contact you soon.
          </p>

          <div className="flex justify-center gap-4 mt-6 text-2xl">
            <span className="text-pink-500">✨</span>
            <span className="text-purple-500">⭐</span>
            <span className="text-green-500">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
}
