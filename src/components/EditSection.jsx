import React, { useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Youtube,
} from "lucide-react"

const EditSection = ({ title, edits, icon = "instagram" }) => {
  const scrollRef = useRef(null)
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

  return (
    <>
      <section className="min-h-screen border-t border-gray-200 flex items-center">

        <div className="max-w-6xl mx-auto w-full px-6 py-24">

          {/* TITLE */}
          <h2
            className="text-4xl md:text-6xl font-medium tracking-tight mb-16"
            style={{ color: "#d94d62" }}
          >
            {title}
          </h2>

          <div className="hidden md:block relative">

            {/* LEFT BUTTON */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* SLIDER */}
            <div
  ref={desktopScrollRef}
  className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
>

              {edits.map((edit, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (edit.video) {
                      setSelectedVideo(edit.video)
                    } else {
                      window.open(edit.link, "_blank")
                    }
                  }}
                  className="min-w-[320px] border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
                >

                  {/* IMAGE */}
                  <img
                    src={edit.thumbnail}
                    alt={edit.title}
                    className="h-[220px] w-full object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5">

                    <h3 className="text-xl font-medium mb-2">
                      {edit.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {edit.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      {icon === "youtube" ? (
                        <Youtube size={16} />
                      ) : (
                        <Instagram size={16} />
                      )}

                      Watch
                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 z-10"
            >
              <ChevronRight size={20} />
            </button>

          </div>
          {/* MOBILE SLIDER */}
<div
  ref={scrollRef}
  className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4"
>

  {edits.map((edit, index) => (
    <div
      key={index}
      onClick={() => {
        if (edit.video) {
          setSelectedVideo(edit.video)
        } else {
          window.open(edit.link, "_blank")
        }
      }}
      className="min-w-full snap-center border border-gray-200 rounded-2xl overflow-hidden cursor-pointer"
    >

      {/* IMAGE */}
      <img
        src={edit.thumbnail}
        alt={edit.title}
        className="h-[220px] w-full object-cover"
      />

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-xl font-medium mb-2">
          {edit.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {edit.desc}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500">

          {icon === "youtube" ? (
            <Youtube size={16} />
          ) : (
            <Instagram size={16} />
          )}

          Watch
        </div>

      </div>

    </div>
  ))}

</div>
        </div>
      </section>

      {/* VIDEO MODAL */}
{selectedVideo && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedVideo(null)}
  >

    {/* MODAL */}
    <div
      className="relative max-w-5xl max-h-[90vh] bg-black rounded-3xl overflow-hidden flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-4 right-4 z-50 
        bg-black/60 text-white w-10 h-10 rounded-full 
        flex items-center justify-center text-2xl"
      >
        ×
      </button>

      {/* VIDEO */}
      <video
        src={selectedVideo}
        controls
        autoPlay
        className="max-w-full max-h-[90vh] object-contain"
      />

    </div>

  </div>
)}
    </>
  )
}

export default EditSection