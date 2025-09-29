import { React, useRef, useEffect } from "react";
import * as images from "../include/images";
import "../include/globals.css";
function Header() {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Adjust this value to control when the image starts moving up

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full pt-18 md:pt-24 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-6xl font-bold text-center mb-12">
            Christopher Ospina
          </h1>
          <p className="mx-auto max-w-[600px] md:text-xl text-gray-500 font-semibold">
            Websites, Unix based modifications, Unity applications and
            Cybersecurity
          </p>
          <div className="mt-3 md:mt-0 profile-image-wrapper">
            <div ref={imageRef} className="profile-image">
              <img
                src={images.profile}
                alt="profile"
                className="rounded-lg shadow-2xl border mx-auto"
                width={320}
                height={180}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
