import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

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
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default ChrisNav;
