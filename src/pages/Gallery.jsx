import { useState } from "react";
import { X } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "Shengai PPM Chits Office",
    bg: "bg-blue-100",
    image: "/images/gallery/gallery3.jpeg",
  },
  {
    title: "Tamilnadu Chit Fund Certificate",
    bg: "bg-yellow-50",
    image: "/images/gallery/gallery1.jpeg",
  },
  {
    title: "Madurai Kamaraj Certificate",
    bg: "bg-blue-50",
    image: "/images/gallery/gallery2.jpeg",
  },
  {
    title: "Certificate of Incorporation",
    bg: "bg-blue-50",
    image: "/images/gallery/coi.jpg",
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <main>
      {/* Hero Banner */}
      {/* <div className="bg-[#163F88] py-10 text-center border-b-4 border-[#F7B500]">
        <h1 className="text-3xl font-bold text-white">Gallery</h1>
      </div> */}

      <div className="relative w-full bg-gradient-to-br from-[#163F88] via-[#1a4d9e] to-[#0f2b5c] py-16 md:py-20 flex flex-col items-center justify-center overflow-hidden border-t-4 border-[#F7B500]">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Glowing orbs */}
        <div className="absolute h-72 w-72 rounded-full bg-blue-400/20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl -bottom-20 -right-20"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-4">
            <span className="inline-block h-1 w-16 bg-[#F7B500] rounded-full"></span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Photo Gallery
          </h1>
          <div className="mt-6 flex justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"></span>
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></span>
            <span
              className="w-2.5 h-2.5 rounded-full bg-[#F7B500] animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 min-h-screen px-6 py-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#163F88] mb-1">Photo Gallery</h2>
        <div className="w-14 h-1 bg-[#F7B500] rounded mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map(({ title, bg, image }) => (
            <div
              key={title}
              alt={title}
              title={title}
              onClick={() => image && setSelected({ title, image })}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Image area — fixed height so all captions align */}
              <div
                className={`w-full h-56 ${bg} overflow-hidden flex items-center justify-center`}
              >
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-52 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="bg-white px-4 py-3">
                <p className="text-sm font-semibold text-[#163F88]">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-white rounded-full p-1 shadow z-10"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <div className="px-5 py-3 bg-white">
              <p className="text-sm font-semibold text-[#163F88]">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
