//#region IMPORTS
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";
import {
  MenuIcon,
  House,
  BriefcaseBusiness,
  Laptop,
  GraduationCap,
  Award,
  CircleUserRound,
  FileUser,
} from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
//#endregion

function ChrisNav() {
  //TODO: call the useMedia hook to determine if is desktop
  const isDesktop = useMediaQuery("(min-width: 768px)");

  //This function opens up the resume
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub",
      "_self"
    );
  };

  return isDesktop ? (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-500 shadow-md z-50 flex justify-between ">
      <NavigationMenu className={"w-full"}>
        <NavigationMenuList
          className={
            "flex flex-row text-white w-full justify-between items-center ml-20 px-4"
          }
        >
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
  ) : (
    <div>
      <Drawer direction="right">
        <DrawerTrigger className="absolute top-4 left-4 z-50 p-2 rounded-md text-white">
          <div className="relative">
            <MenuIcon className="text-gray-800" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center text-white font-bold">
              Menu
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 flex flex-col">
            <NavigationMenu
              className={
                "flex space-x-2 md:space-x-4 overflow-x-auto lg:overflow-visible items-center"
              }
            >
              <NavigationMenuList
                className={
                  "flex flex-col space-y-2 divide-y-2 items-center text-white"
                }
              >
                <NavigationMenuItem id="home">
                  <Link href="/" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <House className="h-4 w-4 mr-2" />
                      <span>Home</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="exp">
                  <Link href="/experience" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <BriefcaseBusiness className="h-4 w-4 mr-2" />
                      <span>Experience</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="projects">
                  <Link href="/projects" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <Laptop className="h-4 w-4 mr-2" />
                      <span>Projects</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="education">
                  <Link href="/education" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>Education</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="certifications">
                  <Link href="/certifications" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <Award className="h-4 w-4 mr-2" />
                      <span>Certfications</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="contact">
                  <Link href="/contact" className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <CircleUserRound className="h-4 w-4 mr-2" />
                      <span>Contact</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id="resume">
                  <Link onClick={openResume} className="w-full">
                    <Button
                      variant={"ghost"}
                      className="flex w-full items-center justify-start"
                    >
                      <FileUser className="h-4 w-4 mr-2" />
                      <span>Resume</span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ChrisNav;
