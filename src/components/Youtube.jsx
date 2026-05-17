import React, { useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Youtube,
  X,
} from "lucide-react"

const YouTube = () => {
  const desktopScrollRef = useRef(null)
  const mobileScrollRef = useRef(null)

  const [selectedVideo, setSelectedVideo] = useState(null)

  const scroll = (direction) => {
    const current = desktopScrollRef.current

    if (!current) return

    const scrollAmount = 380

if (direction === "right") {

  // IF END REACHED → GO BACK TO START
  if (
    current.scrollLeft + current.clientWidth >=
    current.scrollWidth - 10
  ) {
    current.scrollTo({
      left: 0,
      behavior: "smooth",
    })
  } else {
    current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

} else {

  // IF AT START → GO TO END
  if (current.scrollLeft <= 0) {
    current.scrollTo({
      left: current.scrollWidth,
      behavior: "smooth",
    })
  } else {
    current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    })
  }

}
  }

  const videos = [
    {
      id: "vIKluPRex_k",
      title: "Travel Vlog",
      desc: "Cinematic storytelling vlog.",
    },

    {
      id: "UjB5Ea3TRlY",
      title: "Unfiltered Experiences",
      desc: "Montage-style personal edit.",
    },

    {
      id: "OE0FfhLmID0",
      title: "Gaming Montages",
      desc: "Stumble Guys gameplay montage.",
    },

    {
      id: "SZOYTxIpUFg",
      title: "BGMI Highlights",
      desc: "BGMI commentary video.",
    },
  ]

  return (
    <>
      <section className="min-h-screen border-t border-gray-200 flex items-center">

        <div className="max-w-6xl mx-auto w-full px-6 py-24">

          {/* TITLE */}
          <h2
            className="text-4xl md:text-6xl font-medium tracking-tight mb-16"
            style={{ color: "#d94d62" }}
          >
            YouTube
          </h2>

          {/* DESKTOP */}
          <div className="hidden md:block relative">

            {/* LEFT BUTTON */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 
              bg-white border border-gray-200 rounded-full p-2 z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* SLIDER */}
            <div
              ref={desktopScrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
            >

              {videos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedVideo(video.id)}
                  className="min-w-[340px] border border-gray-200 rounded-2xl 
                  overflow-hidden cursor-pointer hover:shadow-lg 
                  hover:-translate-y-1 transition"
                >

                  {/* THUMBNAIL */}
                  <div className="relative">

                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="h-[220px] w-full object-cover"
                    />

                    {/* PLAY ICON */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="bg-white/90 rounded-full p-4 shadow-lg">
                        <Youtube
                          size={32}
                          className="text-red-600"
                          fill="currentColor"
                        />
                      </div>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <h3 className="text-xl font-medium mb-2">
                      {video.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {video.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Youtube size={16} />
                      Watch Video
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 
              bg-white border border-gray-200 rounded-full p-2 z-10"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* MOBILE */}
          <div
            ref={mobileScrollRef}
            className="flex md:hidden overflow-x-auto snap-x 
            snap-mandatory scroll-smooth no-scrollbar gap-4"
          >

            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video.id)}
                className="min-w-full snap-center border border-gray-200 
                rounded-2xl overflow-hidden cursor-pointer"
              >

                {/* THUMBNAIL */}
                <div className="relative">

                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="h-[220px] w-full object-cover"
                  />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Youtube
                        size={32}
                        className="text-red-600"
                        fill="currentColor"
                      />
                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-xl font-medium mb-2">
                    {video.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {video.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Youtube size={16} />
                    Watch Video
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 
              bg-white rounded-full p-2"
            >
              <X size={18} />
            </button>

            {/* VIDEO */}
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />

          </div>

        </div>
      )}
    </>
  )
}

export default YouTube