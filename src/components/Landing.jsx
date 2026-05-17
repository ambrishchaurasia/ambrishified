import React from "react"
import { motion } from "framer-motion"
import profile from "../assets/profile.png"
import video from "../assets/EeSalaCupNamduu.mp4"

const Landing = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-24">
      {/* SCRIBBLE ELEMENT */}
<div className="absolute inset-0 pointer-events-none opacity-10">

  <svg
    className="absolute left-10 bottom-10 w-[260px]"
    viewBox="0 0 400 400"
    fill="none"
  >
    <path
      d="M20 260C120 120 180 320 300 180"
      stroke="#d94d62"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="10 14"
    />
  </svg>

</div>
      <div className="max-w-7xl mx-auto w-full px-6">

        {/* MOBILE */}
        <div
          className="flex flex-col items-center md:hidden"
          style={{ gap: "0", paddingTop: "24px" }}
        >

          <div className="text-center mb-10">
            <p
              className="text-lg font-normal tracking-tight"
              style={{ color: "var(--muted, #9a9490)" }}
            >
              Hello, my name is
            </p>

            <h1
              className="text-5xl font-medium italic leading-tight mt-1"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#d94d62",
              }}
            >
              Ambrish
            </h1>
          </div>

          {/* IMAGE */}
          <div
            className="flex flex-col items-center mb-10"
            style={{ gap: "16px" }}
          >
            <motion.img
              src={profile}
              alt="Ambrish"
className="w-60 h-60 object-cover rounded-full"
style={{
  border: "3px dashed #d94d62",
  padding: "6px",
}}              animate={{ y: [0, -5, -2, 0], rotate: [0, 2, -1.5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <a
              href={video}
              className="text-xs tracking-widest text-gray-500 hover:text-yellow-400 transition duration-300 px-5 py-2"
            >
A personal favorite edit ♡            </a>
          </div>

          <div className="text-center">
            <p
              className="text-lg font-normal tracking-tight"
              style={{ color: "var(--muted, #9a9490)" }}
            >
              Welcome to
            </p>

            <h2
              className="text-5xl font-medium italic leading-tight mt-1"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#d94d62",
              }}
            >
              my portfolio
            </h2>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-3 items-center gap-12">

          {/* LEFT */}
          <div className="space-y-4 -ml-4">
            <h2 className="text-5xl font-medium tracking-tight">
              Hello, my name is
            </h2>

            <h1
              className="text-5xl font-medium tracking-wide italic -ml-1"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#d94d62",
              }}
            >
              Ambrish
            </h1>
          </div>

          {/* CENTER */}
          <div className="flex flex-col justify-center items-center">
            <motion.img
              src={profile}
              alt="Ambrish"
className="w-80 h-80 object-cover rounded-full"
style={{
  border: "2px dashed rgba(217,77,98,0.45)",
  padding: "8px",
}}         animate={{ y: [0, -3, 0], rotate: [0, 3, -2, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <a
              href={video}
              className="text-sm text-gray-500 hover:text-yellow-400 transition duration-300 tracking-wide py-7 glow-animate"
            >
            A personal favorite edit ♡            </a>
          </div>

          {/* RIGHT */}
          <div className="text-right space-y-2">
            <h3 className="text-5xl font-medium tracking-wide">
              Welcome to
            </h3>

            <h3
              className="text-5xl font-medium tracking-wide italic"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#d94d62",
              }}
            >
              my portfolio
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Landing