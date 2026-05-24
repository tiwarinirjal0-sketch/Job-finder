import { useContext, useState } from "react";
import { JobContext } from "../../../context/jobs";

export default function JobCards() {
  const {location, buttonClicked, jobs } = useContext(JobContext);
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (index) => {
    setBookmarked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (!buttonClicked) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      {jobs.map((item, index) => (

        (item.title.includes(location) || item.title.includes(location.toUpperCase()) && 
        <div
          key={index}
          className="flex flex-col gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-3">
            {/* Logo */}
            <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <span
                className="text-sm font-medium text-gray-400 hidden items-center justify-center w-full h-full"
              >
                {item.company?.slice(0, 2).toUpperCase()}
              </span>
            </div>

            {/* Title + Company */}
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900 leading-snug">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">{item.company}</p>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => toggleBookmark(index)}
              aria-label={bookmarked[index] ? "Remove bookmark" : "Bookmark job"}
              className={`p-1.5 rounded-lg transition-colors duration-150 ${
                bookmarked[index]
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              {bookmarked[index] ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3a2 2 0 0 0-2 2v16l9-4 9 4V5a2 2 0 0 0-2-2H5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 3a2 2 0 0 0-2 2v16l9-4 9 4V5a2 2 0 0 0-2-2H5z" />
                </svg>
              )}
            </button>
          </div>

          {/* Bottom row: tags + link */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {/* Tags from descriptions */}
            <div className="flex gap-2 flex-wrap">
              {item.descriptions?.map((des, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500"
                >
                  {des}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              View role
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>)

        
      ))}
    </div>
  );
}