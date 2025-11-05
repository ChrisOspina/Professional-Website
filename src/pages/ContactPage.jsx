import React from "react";
import ContactForm from "../Components/Contact-Form";
import { Github, Linkedin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid-background" />
      <ContactForm />
      <div className="space-y-6 mx-auto text-center my-8">
        <h2 className="py-8 text-2xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          Connect With Me
        </h2>
        <ul className="flex flex-row gap-8 justify-center">
          <li>
            <a
              className="flex flex-col items-center gap-2 group"
              href="https://github.com/ChrisOspina"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <Github className="w-6 h-6 text-white" />
              </div>
              <span className="mr-2 text-center">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col items-center gap-2 group"
              href="https://www.linkedin.com/in/christopher-ospina-311b68185/"
            >
              <div className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <span className="mr-2 text-center">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
