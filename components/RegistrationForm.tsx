


// "use client";
// import { X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { allCountries } from "country-telephone-data";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function Modal({ isOpen, onClose }: ModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     countryCode: "+91", // default country code
//     phone: "",
//     email: "",
//     designation: "",
//     organization: "",
//     district: "",
//     stall_type: "",
//     otherDistrict: "",
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [modalWidth, setModalWidth] = useState("50%");
//   const [showOtherDistrictInput, setShowOtherDistrictInput] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setModalWidth(`${window.innerWidth / 2}px`);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setShowOtherDistrictInput(formData.district === "Other State");
//   }, [formData.district]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     if (name === "otherDistrict" && !showOtherDistrictInput) return;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(null);
//     setLoading(true);

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("phone", `${formData.countryCode}${formData.phone}`);
//       data.append("email", formData.email);
//       data.append("designation", formData.designation);
//       data.append("organization", formData.organization);
//       data.append(
//         "district",
//         formData.district === "Other State" ? formData.otherDistrict : formData.district
//       );
//       data.append("stall_type", formData.stall_type);
//       data.append(
//         "__tickets[]",
//         JSON.stringify({
//           ticket_id: "5e99d061-6f38-4885-9bc5-d02eb4ceaef0",
//           count: 1,
//           my_ticket: true,
//         })
//       );

//       console.log(allCountries, 'sadasivanallCountries');
//       console.log("📦 Submitting payload:", Object.fromEntries(data.entries()));

//       const response = await fetch(
//         "https://api.makemypass.com/makemypass/public-form/0cf46b6e-50e5-4173-b483-96ee44120759/submit/",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const result = await response.json();
//       console.log("✅ API Response:", result);

//       if (response.ok && !result.hasError) {
//         setMessage({ type: "success", text: "Form submitted successfully!" });
//         setFormData({
//           name: "",
//           countryCode: "+91",
//           phone: "",
//           email: "",
//           designation: "",
//           organization: "",
//           district: "",
//           stall_type: "",
//           otherDistrict: "",
//         });
//         setShowSuccessModal(true);
//       } else {
//         setMessage({
//           type: "error",
//           text: "Submission failed: " + JSON.stringify(result.message),
//         });
//       }
//     } catch (error) {
//       console.error("❌ Network Error:", error);
//       setMessage({ type: "error", text: "An error occurred while submitting the form." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   const getBoxStyle = (fieldName: string) => ({
//     backgroundColor: "#F2F2F2",
//     borderColor: focusedField === fieldName ? "#418CFF" : "#F2F2F2",
//     color: "#586161",
//     outline: "none",
//   });

//   return (
//     <div className="fixed inset-0 flex items-center justify-end z-50">
//       <div
//         className="p-6 shadow-lg max-h-[100vh] overflow-y-auto transform transition-transform duration-300 ease-in-out"
//         style={{
//           backgroundColor: "#FFFFFF",
//           width: modalWidth,
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col">
//           <div className="flex justify-between items-center">
//             <X className="cursor-pointer" onClick={onClose} />
//             <img src="/assets/images/abouticons.svg" alt="About Icons" className="h-6" />
//           </div>

//           <h2 className="text-xl font-bold mt-2 text-black">Register Now!</h2>
//           <p className="text-sm mt-2 text-gray-700">
//             Fill the form details and get your entry to the much awaited event.
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
//           {[
//             { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
//             { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
//             { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
//             { label: "Designation", name: "designation", type: "text", placeholder: "Enter your designation" },
//             { label: "Organization", name: "organization", type: "text", placeholder: "Enter your organization's name" },
//           ].map((f) => (
//             <div key={f.name}>
//               <label className="block text-sm font-medium text-gray-700">
//                 {f.label} <span className="text-red-500">*</span>
//               </label>

//               {f.name === "phone" ? (
//                 <div className="mt-1 flex gap-2">
//                   <div className="relative w-[70px]">
//                     <select
//                       name="countryCode"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("countryCode")}
//                       onBlur={() => setFocusedField(null)}
//                       className="appearance-none p-2 border rounded w-full bg-transparent z-10 relative"
//                       style={getBoxStyle("countryCode")}
//                     >
//                       {allCountries.map((c) => {
//                         const dialCode = c.dialCode.startsWith("+") ? c.dialCode : `+${c.dialCode}`;
//                         return (
//                           <option key={c.iso2} value={dialCode}>
//                             {dialCode}
//                           </option>
//                         );
//                       })}
//                     </select>
//                     <div className="absolute top-0 left-0 p-2 pointer-events-none text-gray-700">
//                       {formData.countryCode}
//                     </div>
//                   </div>
//                   <input
//                     type={f.type}
//                     name={f.name}
//                     value={(formData as any)[f.name]}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField(f.name)}
//                     onBlur={() => setFocusedField(null)}
//                     className="flex-1 p-2 border rounded"
//                     style={getBoxStyle(f.name)}
//                     placeholder={f.placeholder}
//                     required
//                   />
//                 </div>
//               ) : (
//                 <input
//                   type={f.type}
//                   name={f.name}
//                   value={(formData as any)[f.name]}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField(f.name)}
//                   onBlur={() => setFocusedField(null)}
//                   className="mt-1 p-2 w-full border rounded"
//                   style={getBoxStyle(f.name)}
//                   placeholder={f.placeholder}
//                   required
//                 />
//               )}
//             </div>
//           ))}

//           {/* District */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               District <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("district")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("district")}
//               required
//             >
//               <option value="">Select your district</option>
//               {[
//                 "Thiruvananthapuram",
//                 "Kollam",
//                 "Pathanamthitta",
//                 "Alappuzha",
//                 "Kottayam",
//                 "Idukki",
//                 "Ernakulam",
//                 "Thrissur",
//                 "Palakkad",
//                 "Malappuram",
//                 "Kozhikode",
//                 "Wayanad",
//                 "Kannur",
//                 "Kasaragod",
//                 "Other State",
//               ].map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>

//             {showOtherDistrictInput && (
//               <input
//                 type="text"
//                 name="otherDistrict"
//                 value={formData.otherDistrict}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField("otherDistrict")}
//                 onBlur={() => setFocusedField(null)}
//                 className="mt-2 p-2 w-full border rounded"
//                 style={getBoxStyle("otherDistrict")}
//                 placeholder="Enter your district"
//               />
//             )}
//           </div>

//           {/* Stall Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Stall Type <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="stall_type"
//               value={formData.stall_type}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("stall_type")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("stall_type")}
//               required
//             >
//               <option value="">Select a stall</option>
//               <option value="Normal Stall">Normal Stall</option>
//             </select>
//           </div>

//           {/* Message */}
//           {message && (
//             <p className={`text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
//               {message.text}
//             </p>
//           )}

//           {/* Submit */}
//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-[135px] h-[45px] rounded-full text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//                 }`}
//             >
//               {loading ? "Submitting..." : "Register"}
//             </button>
//           </div>
//         </form>

//         {/* Success Modal */}
//         {showSuccessModal && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-all duration-300"
//           >
//             <div
//               className="bg-white p-6 shadow-2xl relative max-h-[100vh] overflow-y-auto w-full h-full flex items-center justify-center"
//               style={{ width: modalWidth }}
//             >
//               <button
//                 onClick={() => {
//                   setShowSuccessModal(false);
//                   onClose();
//                 }}
//                 className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition" style={{color:"red"}}
//               >
//                 <X size={24} />
//               </button>

//               <div className="text-center">
//                 <h2 className="text-4xl font-boldmt-8" style={{color:"#4028C8"}}>Thank You!</h2>
//                 <p className="text-lg mt-4" style={{color:"#3E3E3E"}}>
//                   Your details have been successfully submitted. <br /> Our team will
//                   contact you soon.
//                 </p>

//                 <div className="flex justify-center items-center mt-4">
//             <img
//               src="/assets/images/abouticons.svg"
//               alt="About Icons"
//               className="w-16 md:w-20 h-auto"
//             />
//           </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// "use client";
// import { X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { allCountries } from "country-telephone-data";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function Modal({ isOpen, onClose }: ModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     countryCode: "+91", // default country code
//     phone: "",
//     email: "",
//     designation: "",
//     organization: "",
//     district: "",
//     stall_type: "",
//     otherDistrict: "",
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [modalWidth, setModalWidth] = useState("50%");
//   const [showOtherDistrictInput, setShowOtherDistrictInput] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setModalWidth(`${window.innerWidth / 2}px`);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setShowOtherDistrictInput(formData.district === "Other State");
//   }, [formData.district]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     if (name === "otherDistrict" && !showOtherDistrictInput) return;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(null);
//     setLoading(true);

//     try {
//       // Validation: if "Other State" is selected, otherDistrict is mandatory
//       if (formData.district === "Other State" && !formData.otherDistrict.trim()) {
//         setMessage({ type: "error", text: "Please enter your state." });
//         setLoading(false);
//         return;
//       }

//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("phone", `${formData.countryCode}${formData.phone}`);
//       data.append("email", formData.email);
//       data.append("designation", formData.designation);
//       data.append("organization", formData.organization);

//       if (formData.district === "Other State") {
//         data.append("district", "no district"); // send district as null
//         data.append("state", formData.otherDistrict); // send typed state
//       } else {
//         data.append("district", formData.district);
//         data.append("state", "null");
//       }

//       data.append("stall_type", formData.stall_type);
//       data.append(
//         "__tickets[]",
//         JSON.stringify({
//           ticket_id: "5e99d061-6f38-4885-9bc5-d02eb4ceaef0",
//           count: 1,
//           my_ticket: true,
//         })
//       );

//       console.log(allCountries, 'sadasivanallCountries');
//       console.log("📦 Submitting payload:", Object.fromEntries(data.entries()));

//       const response = await fetch(
//         "https://api.makemypass.com/makemypass/public-form/0cf46b6e-50e5-4173-b483-96ee44120759/submit/",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const result = await response.json();
//       console.log("✅ API Response:", result);

//       if (response.ok && !result.hasError) {
//         setMessage({ type: "success", text: "Form submitted successfully!" });
//         setFormData({
//           name: "",
//           countryCode: "+91",
//           phone: "",
//           email: "",
//           designation: "",
//           organization: "",
//           district: "",
//           stall_type: "",
//           otherDistrict: "",
//         });
//         setShowSuccessModal(true);
//       } else {
//         setMessage({
//           type: "error",
//           text: "Submission failed: " + JSON.stringify(result.message),
//         });
//       }
//     } catch (error) {
//       console.error("❌ Network Error:", error);
//       setMessage({ type: "error", text: "An error occurred while submitting the form." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   const getBoxStyle = (fieldName: string) => ({
//     backgroundColor: "#F2F2F2",
//     borderColor: focusedField === fieldName ? "#418CFF" : "#F2F2F2",
//     color: "#586161",
//     outline: "none",
//   });

//   return (
//     <div className="fixed inset-0 flex items-center justify-end z-50">
//       <div
//         className="p-6 shadow-lg max-h-[100vh] overflow-y-auto transform transition-transform duration-300 ease-in-out"
//         style={{
//           backgroundColor: "#FFFFFF",
//           width: modalWidth,
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col">
//           <div className="flex justify-between items-center">
//             <X className="cursor-pointer" onClick={onClose} />
//             <img src="/assets/images/abouticons.svg" alt="About Icons" className="h-6" />
//           </div>

//           <h2 className="text-xl font-bold mt-2 text-black">Register Now!</h2>
//           <p className="text-sm mt-2 text-gray-700">
//             Fill the form details and get your entry to the much awaited event.
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
//           {[ 
//             { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
//             { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
//             { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
//             { label: "Designation", name: "designation", type: "text", placeholder: "Enter your designation" },
//             { label: "Organization", name: "organization", type: "text", placeholder: "Enter your organization's name" },
//           ].map((f) => (
//             <div key={f.name}>
//               <label className="block text-sm font-medium text-gray-700">
//                 {f.label} <span className="text-red-500">*</span>
//               </label>

//               {f.name === "phone" ? (
//                 <div className="mt-1 flex gap-2">
//                   <div className="relative w-[70px]">
//                     <select
//                       name="countryCode"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("countryCode")}
//                       onBlur={() => setFocusedField(null)}
//                       className="appearance-none p-2 border rounded w-full bg-transparent z-10 relative"
//                       style={getBoxStyle("countryCode")}
//                     >
//                       {allCountries.map((c) => {
//                         const dialCode = c.dialCode.startsWith("+") ? c.dialCode : `+${c.dialCode}`;
//                         return (
//                           <option key={c.iso2} value={dialCode}>
//                             {dialCode}
//                           </option>
//                         );
//                       })}
//                     </select>
//                     <div className="absolute top-0 left-0 p-2 pointer-events-none text-gray-700">
//                       {formData.countryCode}
//                     </div>
//                   </div>
//                   <input
//                     type={f.type}
//                     name={f.name}
//                     value={(formData as any)[f.name]}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField(f.name)}
//                     onBlur={() => setFocusedField(null)}
//                     className="flex-1 p-2 border rounded"
//                     style={getBoxStyle(f.name)}
//                     placeholder={f.placeholder}
//                     required
//                   />
//                 </div>
//               ) : (
//                 <input
//                   type={f.type}
//                   name={f.name}
//                   value={(formData as any)[f.name]}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField(f.name)}
//                   onBlur={() => setFocusedField(null)}
//                   className="mt-1 p-2 w-full border rounded"
//                   style={getBoxStyle(f.name)}
//                   placeholder={f.placeholder}
//                   required
//                 />
//               )}
//             </div>
//           ))}

//           {/* District */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               District <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("district")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("district")}
//               required
//             >
//               <option value="">Select your district</option>
//               {[
//                 "Thiruvananthapuram",
//                 "Kollam",
//                 "Pathanamthitta",
//                 "Alappuzha",
//                 "Kottayam",
//                 "Idukki",
//                 "Ernakulam",
//                 "Thrissur",
//                 "Palakkad",
//                 "Malappuram",
//                 "Kozhikode",
//                 "Wayanad",
//                 "Kannur",
//                 "Kasaragod",
//                 "Other State",
//               ].map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>

//             {showOtherDistrictInput && (
//               <input
//                 type="text"
//                 name="otherDistrict"
//                 value={formData.otherDistrict}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField("otherDistrict")}
//                 onBlur={() => setFocusedField(null)}
//                 className="mt-2 p-2 w-full border rounded"
//                 style={getBoxStyle("otherDistrict")}
//                 placeholder="Enter your district"
//               />
//             )}
//           </div>

//           {/* Stall Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Stall Type <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="stall_type"
//               value={formData.stall_type}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("stall_type")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("stall_type")}
//               required
//             >
//               <option value="">Select a stall</option>
//               <option value="Normal Stall">Normal Stall</option>
//             </select>
//           </div>

//           {/* Message */}
//           {message && (
//             <p className={`text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
//               {message.text}
//             </p>
//           )}

//           {/* Submit */}
//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-[135px] h-[45px] rounded-full text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//                 }`}
//             >
//               {loading ? "Submitting..." : "Register"}
//             </button>
//           </div>
//         </form>

//         {/* Success Modal */}
//         {showSuccessModal && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-all duration-300"
//           >
//             <div
//               className="bg-white p-6 shadow-2xl relative max-h-[100vh] overflow-y-auto w-full h-full flex items-center justify-center"
//               style={{ width: modalWidth }}
//             >
//               <button
//                 onClick={() => {
//                   setShowSuccessModal(false);
//                   onClose();
//                 }}
//                 className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition" style={{color:"red"}}
//               >
//                 <X size={24} />
//               </button>

//               <div className="text-center">
//                 <h2 className="text-4xl font-boldmt-8" style={{color:"#4028C8"}}>Thank You!</h2>
//                 <p className="text-lg mt-4" style={{color:"#3E3E3E"}}>
//                   Your details have been successfully submitted. <br /> Our team will
//                   contact you soon.
//                 </p>

//                 <div className="flex justify-center items-center mt-4">
//                   <img
//                     src="/assets/images/abouticons.svg"
//                     alt="About Icons"
//                     className="w-16 md:w-20 h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// without vercal

// "use client";
// import { X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { allCountries } from "country-telephone-data";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function Modal({ isOpen, onClose }: ModalProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     countryCode: "+91", // default country code
//     phone: "",
//     email: "",
//     designation: "",
//     organization: "",
//     district: "",
//     stall_type: "",
//     otherDistrict: "",
//   });

//   const [focusedField, setFocusedField] = useState<string | null>(null);
//   const [modalWidth, setModalWidth] = useState("50%");
//   const [showOtherDistrictInput, setShowOtherDistrictInput] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setModalWidth(`${window.innerWidth / 2}px`);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setShowOtherDistrictInput(formData.district === "Other State");
//   }, [formData.district]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     if (name === "otherDistrict" && !showOtherDistrictInput) return;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(null);
//     setLoading(true);

//     try {
//       // Validation: if "Other State" is selected, otherDistrict is mandatory
//       if (formData.district === "Other State" && !formData.otherDistrict.trim()) {
//         setMessage({ type: "error", text: "Please enter your state." });
//         setLoading(false);
//         return;
//       }

//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("phone", `${formData.countryCode}${formData.phone}`);
//       data.append("email", formData.email);
//       data.append("designation", formData.designation);
//       data.append("organization", formData.organization);

//       if (formData.district === "Other State") {
//         data.append("district", "no district"); // send district as null
//         data.append("state", formData.otherDistrict); // send typed state
//       } else {
//         data.append("district", formData.district);
//         data.append("state", "null");
//       }

//       data.append("stall_type", formData.stall_type);
//       data.append(
//         "__tickets[]",
//         JSON.stringify({
//           ticket_id: "5e99d061-6f38-4885-9bc5-d02eb4ceaef0",
//           count: 1,
//           my_ticket: true,
//         })
//       );

//       console.log(allCountries, 'sadasivanallCountries');
//       console.log("📦 Submitting payload:", Object.fromEntries(data.entries()));

//       const response = await fetch(
//         "https://api.makemypass.com/makemypass/public-form/0cf46b6e-50e5-4173-b483-96ee44120759/submit/",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const result = await response.json();
//       console.log(" API Response:", result);

//       if (response.ok && !result.hasError) {
//         setMessage({ type: "success", text: "Form submitted successfully!" });
//         setFormData({
//           name: "",
//           countryCode: "+91",
//           phone: "",
//           email: "",
//           designation: "",
//           organization: "",
//           district: "",
//           stall_type: "",
//           otherDistrict: "",
//         });
//         setShowSuccessModal(true);
//       } else {
//         setMessage({
//           type: "error",
//           text: "Submission failed: " + JSON.stringify(result.message),
//         });
//       }
//     } catch (error) {
//       console.error("❌ Network Error:", error);
//       setMessage({ type: "error", text: "An error occurred while submitting the form." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   const getBoxStyle = (fieldName: string) => ({
//     backgroundColor: "#F2F2F2",
//     borderColor: focusedField === fieldName ? "#418CFF" : "#F2F2F2",
//     color: "#586161",
//     outline: "none",
//   });

//   return (
//     <div className="fixed inset-0 flex items-center justify-end z-50">
//       <div
//         className="p-6 shadow-lg max-h-[100vh] overflow-y-auto transform transition-transform duration-300 ease-in-out"
//         style={{
//           backgroundColor: "#FFFFFF",
//           width: modalWidth,
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col">
//           <div className="flex justify-between items-center">
//             <X className="cursor-pointer" onClick={onClose} />
//             <img src="/assets/images/abouticons.svg" alt="About Icons" className="h-6" />
//           </div>

//           <h2 className="text-xl font-bold mt-2 text-black">Register Now!</h2>
//           <p className="text-sm mt-2 text-gray-700">
//             Fill the form details and get your entry to the much awaited event.
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
//           {[ 
//             { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
//             { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
//             { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
//             { label: "Designation", name: "designation", type: "text", placeholder: "Enter your designation" },
//             { label: "Organization", name: "organization", type: "text", placeholder: "Enter your organization's name" },
//           ].map((f) => (
//             <div key={f.name}>
//               <label className="block text-sm font-medium text-gray-700">
//                 {f.label} <span className="text-red-500">*</span>
//               </label>

//               {f.name === "phone" ? (
//                 <div className="mt-1 flex gap-2">
//                   <div className="relative w-[70px]">
//                     <select
//                       name="countryCode"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField("countryCode")}
//                       onBlur={() => setFocusedField(null)}
//                       className="appearance-none p-2 border rounded w-full bg-transparent z-10 relative"
//                       style={getBoxStyle("countryCode")}
//                     >
//                       {allCountries.map((c) => {
//                         const dialCode = c.dialCode.startsWith("+") ? c.dialCode : `+${c.dialCode}`;
//                         return (
//                           <option key={c.iso2} value={dialCode}>
//                             {dialCode}
//                           </option>
//                         );
//                       })}
//                     </select>
//                     <div className="absolute top-0 left-0 p-2 pointer-events-none text-gray-700">
//                       {formData.countryCode}
//                     </div>
//                   </div>
//                   <input
//                     type={f.type}
//                     name={f.name}
//                     value={(formData as any)[f.name]}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField(f.name)}
//                     onBlur={() => setFocusedField(null)}
//                     className="flex-1 p-2 border rounded"
//                     style={getBoxStyle(f.name)}
//                     placeholder={f.placeholder}
//                     required
//                   />
//                 </div>
//               ) : (
//                 <input
//                   type={f.type}
//                   name={f.name}
//                   value={(formData as any)[f.name]}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField(f.name)}
//                   onBlur={() => setFocusedField(null)}
//                   className="mt-1 p-2 w-full border rounded"
//                   style={getBoxStyle(f.name)}
//                   placeholder={f.placeholder}
//                   required
//                 />
//               )}
//             </div>
//           ))}

//           {/* District */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               District <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("district")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("district")}
//               required
//             >
//               <option value="">Select your district</option>
//               {[
//                 "Thiruvananthapuram",
//                 "Kollam",
//                 "Pathanamthitta",
//                 "Alappuzha",
//                 "Kottayam",
//                 "Idukki",
//                 "Ernakulam",
//                 "Thrissur",
//                 "Palakkad",
//                 "Malappuram",
//                 "Kozhikode",
//                 "Wayanad",
//                 "Kannur",
//                 "Kasaragod",
//                 "Other State",
//               ].map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>

//             {showOtherDistrictInput && (
//               <input
//                 type="text"
//                 name="otherDistrict"
//                 value={formData.otherDistrict}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField("otherDistrict")}
//                 onBlur={() => setFocusedField(null)}
//                 className="mt-2 p-2 w-full border rounded"
//                 style={getBoxStyle("otherDistrict")}
//                 placeholder="Enter your district"
//               />
//             )}
//           </div>

//           {/* Stall Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Stall Type <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="stall_type"
//               value={formData.stall_type}
//               onChange={handleChange}
//               onFocus={() => setFocusedField("stall_type")}
//               onBlur={() => setFocusedField(null)}
//               className="mt-1 p-2 w-full border rounded"
//               style={getBoxStyle("stall_type")}
//               required
//             >
//               <option value="">Select a stall</option>
//               <option value="Normal Stall">Normal Stall</option>
//             </select>
//           </div>

//           {/* Message */}
//           {message && (
//             <p className={`text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
//               {message.text}
//             </p>
//           )}

//           {/* Submit */}
//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-[135px] h-[45px] rounded-full text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//                 }`}
//             >
//               {loading ? "Submitting..." : "Register"}
//             </button>
//           </div>
//         </form>

//         {/* Success Modal */}
//         {showSuccessModal && (
//           <div
//             className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-all duration-300"
//           >
//             <div
//               className="bg-white p-6 shadow-2xl relative max-h-[100vh] overflow-y-auto w-full h-full flex items-center justify-center"
//               style={{ width: modalWidth }}
//             >
//               <button
//                 onClick={() => {
//                   setShowSuccessModal(false);
//                   onClose();
//                 }}
//                 className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition" style={{color:"red"}}
//               >
//                 <X size={24} />
//               </button>

//               <div className="text-center">
//                 <h2 className="text-4xl font-boldmt-8" style={{color:"#4028C8"}}>Thank You!</h2>
//                 <p className="text-lg mt-4" style={{color:"#3E3E3E"}}>
//                   Your details have been successfully submitted. <br /> Our team will
//                   contact you soon.
//                 </p>

//                 <div className="flex justify-center items-center mt-4">
//                   <img
//                     src="/assets/images/abouticons.svg"
//                     alt="About Icons"
//                     className="w-16 md:w-20 h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// vercal

"use client";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { allCountries } from "country-telephone-data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormFields = {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  designation: string;
  organization: string;
  district: string;
  stall_type: string;
  otherDistrict: string;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    countryCode: "+91", // default country code
    phone: "",
    email: "",
    designation: "",
    organization: "",
    district: "",
    stall_type: "",
    otherDistrict: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [modalWidth, setModalWidth] = useState("50%");
  const [showOtherDistrictInput, setShowOtherDistrictInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setModalWidth(`${window.innerWidth / 2}px`);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setShowOtherDistrictInput(formData.district === "Other State");
  }, [formData.district]);

  // ✅ FIXED: Properly typed handleChange (no any, no lint errors)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    if (name === "otherDistrict" && !showOtherDistrictInput) return;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      // Validation: if "Other State" is selected, otherDistrict is mandatory
      if (formData.district === "Other State" && !formData.otherDistrict.trim()) {
        setMessage({ type: "error", text: "Please enter your state." });
        setLoading(false);
        return;
      }

      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", `${formData.countryCode}${formData.phone}`);
      data.append("email", formData.email);
      data.append("designation", formData.designation);
      data.append("organization", formData.organization);

      if (formData.district === "Other State") {
        data.append("district", "no district"); // send district as null
        data.append("state", formData.otherDistrict); // send typed state
      } else {
        data.append("district", formData.district);
        data.append("state", "null");
      }

      data.append("stall_type", formData.stall_type);
      data.append(
        "__tickets[]",
        JSON.stringify({
          ticket_id: "5e99d061-6f38-4885-9bc5-d02eb4ceaef0",
          count: 1,
          my_ticket: true,
        })
      );

      console.log(allCountries, "sadasivanallCountries");
      console.log("📦 Submitting payload:", Object.fromEntries(data.entries()));

      const response = await fetch(
        "https://api.makemypass.com/makemypass/public-form/0cf46b6e-50e5-4173-b483-96ee44120759/submit/",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      console.log(" API Response:", result);

      if (response.ok && !result.hasError) {
        setMessage({ type: "success", text: "Form submitted successfully!" });
        setFormData({
          name: "",
          countryCode: "+91",
          phone: "",
          email: "",
          designation: "",
          organization: "",
          district: "",
          stall_type: "",
          otherDistrict: "",
        });
        setShowSuccessModal(true);
      } else {
        setMessage({
          type: "error",
          text: "Submission failed: " + JSON.stringify(result.message),
        });
      }
    } catch (error) {
      console.error("❌ Network Error:", error);
      setMessage({ type: "error", text: "An error occurred while submitting the form." });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const getBoxStyle = (fieldName: string) => ({
    backgroundColor: "#F2F2F2",
    borderColor: focusedField === fieldName ? "#418CFF" : "#F2F2F2",
    color: "#586161",
    outline: "none",
  });

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50">
      <div
        className="p-6 shadow-lg max-h-[100vh] overflow-y-auto transform transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: "#FFFFFF",
          width: modalWidth,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <X className="cursor-pointer" onClick={onClose} />
            <img src="/assets/images/abouticons.svg" alt="About Icons" className="h-6" />
          </div>

          <h2 className="text-xl font-bold mt-2 text-black">Register Now!</h2>
          <p className="text-sm mt-2 text-gray-700">
            Fill the form details and get your entry to the much awaited event.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
            { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
            { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
            { label: "Designation", name: "designation", type: "text", placeholder: "Enter your designation" },
            { label: "Organization", name: "organization", type: "text", placeholder: "Enter your organization's name" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-gray-700">
                {f.label} <span className="text-red-500">*</span>
              </label>

              {f.name === "phone" ? (
                <div className="mt-1 flex gap-2">
                  <div className="relative w-[70px]">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("countryCode")}
                      onBlur={() => setFocusedField(null)}
                      className="appearance-none p-2 border rounded w-full bg-transparent z-10 relative"
                      style={getBoxStyle("countryCode")}
                    >
                      {allCountries.map((c) => {
                        const dialCode = c.dialCode.startsWith("+") ? c.dialCode : `+${c.dialCode}`;
                        return (
                          <option key={c.iso2} value={dialCode}>
                            {dialCode}
                          </option>
                        );
                      })}
                    </select>
                    <div className="absolute top-0 left-0 p-2 pointer-events-none text-gray-700">
                      {formData.countryCode}
                    </div>
                  </div>
                  <input
                    type={f.type}
                    name={f.name}
                    value={formData[f.name as keyof FormFields]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(f.name)}
                    onBlur={() => setFocusedField(null)}
                    className="flex-1 p-2 border rounded"
                    style={getBoxStyle(f.name)}
                    placeholder={f.placeholder}
                    required
                  />
                </div>
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name as keyof FormFields]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(f.name)}
                  onBlur={() => setFocusedField(null)}
                  className="mt-1 p-2 w-full border rounded"
                  style={getBoxStyle(f.name)}
                  placeholder={f.placeholder}
                  required
                />
              )}
            </div>
          ))}

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              District <span className="text-red-500">*</span>
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              onFocus={() => setFocusedField("district")}
              onBlur={() => setFocusedField(null)}
              className="mt-1 p-2 w-full border rounded"
              style={getBoxStyle("district")}
              required
            >
              <option value="">Select your district</option>
              {[
                "Thiruvananthapuram",
                "Kollam",
                "Pathanamthitta",
                "Alappuzha",
                "Kottayam",
                "Idukki",
                "Ernakulam",
                "Thrissur",
                "Palakkad",
                "Malappuram",
                "Kozhikode",
                "Wayanad",
                "Kannur",
                "Kasaragod",
                "Other State",
              ].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {showOtherDistrictInput && (
              <input
                type="text"
                name="otherDistrict"
                value={formData.otherDistrict}
                onChange={handleChange}
                onFocus={() => setFocusedField("otherDistrict")}
                onBlur={() => setFocusedField(null)}
                className="mt-2 p-2 w-full border rounded"
                style={getBoxStyle("otherDistrict")}
                placeholder="Enter your district"
              />
            )}
          </div>

          {/* Stall Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stall Type <span className="text-red-500">*</span>
            </label>
            <select
              name="stall_type"
              value={formData.stall_type}
              onChange={handleChange}
              onFocus={() => setFocusedField("stall_type")}
              onBlur={() => setFocusedField(null)}
              className="mt-1 p-2 w-full border rounded"
              style={getBoxStyle("stall_type")}
              required
            >
              <option value="">Select a stall</option>
              <option value="Normal Stall">Normal Stall</option>
            </select>
          </div>

          {/* Message */}
          {message && (
            <p className={`text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {message.text}
            </p>
          )}

          {/* Submit */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-[135px] h-[45px] rounded-full text-white ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-all duration-300">
            <div
              className="bg-white p-6 shadow-2xl relative max-h-[100vh] overflow-y-auto w-full h-full flex items-center justify-center"
              style={{ width: modalWidth }}
            >
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  onClose();
                }}
                className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition"
                style={{ color: "red" }}
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h2 className="text-4xl font-bold mt-8" style={{ color: "#4028C8" }}>
                  Thank You!
                </h2>
                <p className="text-lg mt-4" style={{ color: "#3E3E3E" }}>
                  Your details have been successfully submitted. <br /> Our team will contact you soon.
                </p>

                <div className="flex justify-center items-center mt-4">
                  <img
                    src="/assets/images/abouticons.svg"
                    alt="About Icons"
                    className="w-16 md:w-20 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
