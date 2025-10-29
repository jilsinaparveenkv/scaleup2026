<div className="block md:hidden mt-10">
{/* SVG Image */}
<div className="flex justify-center mb-4">
  <img
    src="/assets/images/05speakers.svg"
    alt="About ScaleUp"
    className="w-[70%] sm:w-[55%] md:w-[50%] max-w-[240px] h-auto transition-all duration-300"
  />
</div>

{/* Description */}
<p
  className="text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-start mb-6 px-4"
  style={{ color: "#202020" }}
>
  ScaleUp 2026 brings diverse experts, leaders, innovators empowering entrepreneurs with global insights,
  collaboration, and unstoppable business growth.
</p>

{/* Search Bar */}
<div className="flex justify-center mb-6 px-4">
  <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
    <Input
      type="text"
      placeholder="Search our Speakers"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full px-4 py-2.5 sm:py-3 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
      style={{ borderColor: "#000000" }}
    />
    <button
      type="button"
      className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-500 rounded-2xl p-1.5 sm:p-2 flex items-center justify-center shadow-md transition"
      style={{ backgroundColor: "#2E96F5", color: "#FFFFFF" }}
    >
      <ChevronRight width={22} height={12} className="sm:w-[26px] sm:h-[14px]" />
    </button>
  </div>
</div>

{/* Speakers Grid - Mobile */}
<div className="grid grid-cols-1 gap-y-6 w-full px-4">
  {filteredSpeakers.map((speaker, index) => (
    <div
      key={speaker.id}
      className={`bg-white shadow-md overflow-hidden border flex flex-col rounded-3xl w-full h-[400px] sm:h-[420px]
      ${index % 4 === 0 || index % 4 === 2 ? "rounded-bl-none" : "rounded-br-none"}`}
      style={{ borderColor: "#000000" }}
    >
      <img
        src={speaker.image}
        alt={`${speaker.name}, ${speaker.company}`}
        className={`w-full h-72 sm:h-80 object-cover ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
      />
      <div className="p-3 text-center flex-1 flex flex-col justify-center">
        <h3
          className="text-sm sm:text-base font-bold mb-1"
          style={{
            color: "#151515",
            fontWeight: 400,
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          {speaker.name}
        </h3>
        <p className="text-xs sm:text-sm mb-1" style={{ color: "#151515", fontFamily: "Plus Jakarta Sans" }}>
          {speaker.title}, {speaker.company}
        </p>
      </div>
    </div>
  ))}

  {filteredSpeakers.length === 0 && searchQuery && (
    <div className="text-center mt-8" style={{ color: "#151515" }}>
      No speakers found matching your search.
    </div>
  )}
</div>
</div>