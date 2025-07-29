import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { SunIcon, MoonIcon } from "lucide-react";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <nav className="h-16 bg-background border-b sticky top-0">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Sign Up</Button>

          <Button
            size="icon"
            onClick={() => handleChangeTheme(theme as string)}
            variant="outline"
            className="cursor-pointer"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
