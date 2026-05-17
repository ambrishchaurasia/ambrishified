import React from "react"
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 relative overflow-hidden">

      {/* SCRIBBLE */}
      <div className="absolute inset-0 pointer-events-none opacity-10">

        <svg
          className="absolute left-10 bottom-0 w-[260px]"
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

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">

          {/* LEFT */}
          <div>

            <p className="text-sm tracking-[0.25em] text-gray-400 mb-4">
              VIDEO EDITOR
            </p>

            <h2
              className="text-4xl md:text-5xl italic"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#d94d62",
              }}
            >
              Ambrish Chaurasiya
            </h2>

            <p className="text-gray-500 mt-6 max-w-md leading-relaxed">
             I like editing videos with intention : keeping things clean,
  cinematic, and meaningful. I enjoy creating edits where every
  cut, transition, and frame adds something to the story instead
  of just filling the timeline.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-sm">

            <a
              href="mailto:ambrishchaurasiya.work@gmail.com"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition"
            >
              <Mail size={16} />
              ambrishchaurasiya.work@gmail.com
            </a>

            <a
              href="https://www.instagram.com/ambrishified/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition"
            >
              <Instagram size={16} />
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@ambrishified"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition"
            >
              <Youtube size={16} />
              YouTube
            </a>

            

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">

          <p>
            © {new Date().getFullYear()} Ambrish Chaurasiya
          </p>

          <p className="tracking-[0.2em] uppercase">
           Davinci Resolve · Premiere Pro  · CapCut
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer