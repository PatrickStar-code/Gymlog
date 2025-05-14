"use client";

import { createContext, useEffect, useState } from "react";

type ThemeType = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  handleChangeTheme: (theme: string) => void;
};

export const ThemeContext = createContext({} as ThemeType);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTheme(isDarkMode);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
