import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 w-full z-50 
      bg-white/70 backdrop-blur-xl border-b border-gray-100"
    >

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">

        {/* LOGO */}
        <h1
          className="text-xl italic tracking-wide"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            color: "#d94d62",
          }}
        >
          ambrishified
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-500">

          <a
            href="#home"
            className="hover:text-black transition"
          >
            Home
          </a>

          <a
            href="#experience"
            className="hover:text-black transition"
          >
            Experience
          </a>

          <a
            href="#edits"
            className="hover:text-black transition"
          >
            Edits
          </a>

          <a
            href="/veresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden px-1 py-1"
          >

            <span className="relative z-10 group-hover:text-white transition">
              Resume
            </span>

            <span
              className="absolute left-0 bottom-0 
              w-full h-[1px] bg-[#d94d62]
              transition-all duration-300
              group-hover:h-full -z-0"
            />

          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* MENU */}
          <div className="fixed top-24 left-4 right-4 z-50">

            <div
              className="relative overflow-hidden
              flex flex-col items-center gap-8 py-8
              bg-white/95 backdrop-blur-2xl
              border border-white/60
              rounded-3xl shadow-2xl"
            >

              {/* SCRIBBLE */}
              <svg
                className="absolute -right-10 -top-10 w-40 opacity-10"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M40 220C120 120 180 320 260 180C300 110 340 140 360 240"
                  stroke="#d94d62"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                />
              </svg>

              {/* HOME */}
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-black transition font-medium"
              >
                Home
              </a>

              {/* EXPERIENCE */}
              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-black transition font-medium"
              >
                Experience
              </a>

              {/* EDITS */}
              <a
                href="#edits"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-black transition font-medium"
              >
                Edits
              </a>

              {/* RESUME */}
              <a
                href="/Resume-AmbrishChaurasiya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-black transition font-medium"
              >
                Resume
              </a>

            </div>

          </div>
        </>
      )}

    </nav>
  )
}

export default Navbar