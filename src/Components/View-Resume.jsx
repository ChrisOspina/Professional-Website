import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const ViewResume = ({ url }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <div className=" w-full max-w-5xl mx-auto p-4">
      <div className="relative w-full" style={{ paddingTop: "130%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-lg shadow-lg"
          src={url}
          title="Resume Viewer"
        />
      </div>
    </div>
  ) : (
    <div className="block text-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">View Resume</h2>
      <p className="mb-4 text-gray-600">
        For the best experience, please view my resume on a desktop device.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Open Resume
      </a>
    </div>
  );
};

export default ViewResume;
