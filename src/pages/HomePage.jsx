import { React, useRef, useEffect } from "react";
import "../include/globals.css";
import * as images from "../include/images";

const HomePage = () => {
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
    <div className="grid-background">
      <section id="home" className="w-full pt-18 md:pt-24 pb-10">
        <div className="space-y-6 text-center">
          <div className="space-y-6 mx-auto">
            <h1 className="text-6xl font-bold text-center mb-12 text-gray-600">
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
      <section id="about" className="space-y-6 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          About Me
        </h2>
        <div className="border-box">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="mx-auto max-w-[650px] md:text-lg text-gray-800 pb-4">
              I am a Junior Software Developer with 4+ years of hands‑on
              experience designing, building, and maintaining scalable web
              applications. Strong foundation in C, C++, JavaScript, SQL, and
              modern development workflows, including AI‑assisted coding tools
              (Claude, Copilot) and Agile methodologies. Adept at architecting
              clean, maintainable systems, troubleshooting complex issues, and
              collaborating with cross‑functional teams. Experienced across
              cloud environments with a growing focus on rapid iteration and
              vibe‑coding development practices.
            </p>
          </div>
          <div className="flex flex-row justify-between space-y-0 pb-2">
            <p className="mx-auto max-w-[650px] md:text-lg text-gray-800 pb-4">
              Looking for an opportunity to work in a challenging position
              combining my skills in Software Engineering, which provides
              professional development, interesting experiences and personal
              growth.
            </p>
          </div>
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-500 sm:underline-offset-8">
            Skills
          </h2>
          <div className="mb-8">
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">Languages</span>
                C, C++, Python, SQL, HTML, CSS, Java, JavaScript, PHP, C#, Bash,
              </li>
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">Software</span>{" "}
                Microsoft Office, VS Code, Visual Studio, Apache Kafka, Node.js,
                Git, Docker, Kubernetes, Claude
              </li>
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">
                  Operating Systems
                </span>{" "}
                Linux, Microsoft Windows, MacOS
              </li>
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">Cloud & DevOps</span>{" "}
                AWS, Microsoft Azure, Google Cloud, CI/CD pipelines,
                containerization, distributed systems, Git
              </li>
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">
                  Libraries & Frameworks
                </span>{" "}
                React/Native/Angular, Tailwind, Build Tools, Telerik, Blazor,
                .NET Core, Relational Databases
              </li>
              <li className="flex flex-col mb-4">
                <span className="inline-block font-bold">Soft Skills</span>{" "}
                Problem-Solving, Teamwork, Written and Oral communication,
                Adaptability, Time Management, Attention to Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
