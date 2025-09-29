import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";
import {
  Store,
  BriefcaseBusiness,
  Laptop,
  Database,
  GraduationCap,
  Award,
  CircleUserRound,
  FileUser,
} from "lucide-react";

function ChrisNav() {
  //The navbar will now redirect to the different sections

  //this will redirect to the About section
  const gotoAbout = () => {
    window.open("#about", "_self");
  };

  //This will redirect to the Expierence section
  const gotoExp = () => {
    window.open("#experience", "_self");
  };

  //This will go to the skills section
  const gotoSkills = () => {
    window.open("#skills", "_self");
  };

  //This will go to the projects section
  const gotoProjects = () => {
    window.open("#projects", "_self");
  };

  //This will go to the contact section
  const gotoContact = () => {
    window.open("#contact", "_self");
  };

  const gotoEducation = () => {
    window.open("#education", "_self");
  };

  const gotoCertifications = () => {
    window.open("#certifications", "_self");
  };

  //This function opens up the resume
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub",
      "_self"
    );
  };

  return (
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <NavigationMenu className={"flex space-x-2 md:space-x-4"}>
        <NavigationMenuList>
          <NavigationMenuItem id="about">
            <Link onClick={gotoAbout} className="mr-4">
              <Button variant={"hidden"}>
                <Store className="h-4 w-4" />
                <span className="hidden md:block">About</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="exp">
            <Link onClick={gotoExp} className="mr-4">
              <Button variant={"hidden"}>
                <BriefcaseBusiness className="h-4 w-4" />
                <span className="hidden md:block">Experience</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="projects">
            <Link onClick={gotoProjects} className="mr-4">
              <Button variant={"hidden"}>
                <Laptop className="h-4 w-4" />
                <span className="hidden md:block">Projects</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="skills">
            <Link onClick={gotoSkills} className="mr-4">
              <Button variant={"hidden"}>
                <Database className="h-4 w-4" />
                <span className="hidden md:block">Skills</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="education">
            <Link onClick={gotoEducation} className="mr-4">
              <Button variant={"hidden"}>
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:block">Education</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="certifications">
            <Link onClick={gotoCertifications} className="mr-4">
              <Button variant={"hidden"}>
                <Award className="h-4 w-4" />
                <span className="hidden md:block">Certfications</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="contact">
            <Link onClick={gotoContact} className="mr-4">
              <Button variant={"hidden"}>
                <CircleUserRound className="h-4 w-4" />
                <span className="hidden md:block">Contact</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="resume">
            <Link onClick={openResume} className="mr-4">
              <Button variant={"hidden"}>
                <FileUser className="h-4 w-4" />
                <span className="hidden md:block">Resume</span>
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default ChrisNav;
