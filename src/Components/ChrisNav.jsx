import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";
import {
  House,
  BriefcaseBusiness,
  Laptop,
  Database,
  GraduationCap,
  Award,
  CircleUserRound,
  FileUser,
} from "lucide-react";

function ChrisNav() {
  //This function opens up the resume
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub",
      "_self"
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-500 shadow-md z-50 flex items-center justify-between px-4">
      <NavigationMenu
        className={
          "flex space-x-2 md:space-x-4 overflow-x-auto lg:overflow-visible items-center"
        }
      >
        <NavigationMenuList className={"flex items-center text-white"}>
          <NavigationMenuItem id="about">
            <Link href="/" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <House className="h-4 w-4" />
                <span className="hidden md:block">Home</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="exp">
            <Link href="/experience" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <BriefcaseBusiness className="h-4 w-4" />
                <span className="hidden md:block">Experience</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="projects">
            <Link href="/projects" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <Laptop className="h-4 w-4" />
                <span className="hidden md:block">Projects</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="skills">
            <Link href="/skills" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <Database className="h-4 w-4" />
                <span className="hidden md:block">Skills</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="education">
            <Link href="/education" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:block">Education</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="certifications">
            <Link href="/certifications" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <Award className="h-4 w-4" />
                <span className="hidden md:block">Certfications</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="contact">
            <Link href="/contact" className="mr-2 md:mr-4">
              <Button variant={"hidden"}>
                <CircleUserRound className="h-4 w-4" />
                <span className="hidden md:block">Contact</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem id="resume">
            <Link onClick={openResume} className="mr-2 md:mr-4">
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
