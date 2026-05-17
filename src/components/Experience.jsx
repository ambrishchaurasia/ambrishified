import React from "react"

const Experience = () => {
  const timeline = [
    {
      year: "2020 - 2022",
      title: "YouTube Video Editing",
      desc: "Started editing personal YouTube videos and learning storytelling, pacing, and transitions.",
    },
    {
      year: "2023",
      title: "Cricket Reel Editing",
      desc: "Created cinematic cricket edits with motion cuts, highlights, and beat sync transitions.",
    },
    {
      year: "2024 - 2026",
      title: "Brands, College & Clubs",
      desc: "Worked on professional reels for brands, college events and UPES' Official page, student clubs, and promotional content.",
    },
  ]

  return (
    <section className="min-h-screen flex items-center border-t border-gray-200">
      <div className="max-w-5xl mx-auto w-full px-6 py-24">

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-20" style={{ color: "#d94d62" }}>
          Experience
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-300 ml-4">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="mb-16 ml-10 relative"
            >

              {/* DOT */}
              <div className="absolute -left-[46px] top-2 w-4 h-4 rounded-full bg-black" />

              {/* YEAR */}
              <p className="text-sm tracking-wide text-gray-500 mb-2">
                {item.year}
              </p>

              {/* TITLE */}
              <h3
                className="text-2xl italic mb-3"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-20 text-center text-sm text-gray-600 tracking-wide">
          Premiere Pro · Davinci Resolve · Canva · Lightroom
        </div>

      </div>
    </section>
  )
}

export default Experience