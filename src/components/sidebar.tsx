"use client";
import React, { useContext, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Apple,
  ArrowLeft,
  Dumbbell,
  House,
  Moon,
  NotepadText,
  Sun,
} from "lucide-react";
import { ThemeContext } from "@/app/Context/ThemeContext";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/Context/UserContext";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const Router = useRouter();
  const { User } = useContext(UserContext);

  const links = [
    {
      label: "Inicio",
      href: "#",
      icon: (
        <House className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Treinos",
      href: "/Treinos",
      icon: (
        <Dumbbell className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Dieta",
      href: "/dieta",
      icon: (
        <Apple className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Progresso",
      href: "/progresso",
      icon: (
        <NotepadText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden   border-neutral-200  md:flex-row",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <div onClick={() => handleChangeTheme(theme as string)}>
              <SidebarLink
                className="pl-1 mb-4"
                link={{
                  label: "Trocar Tema",
                  href: "#",
                  icon: (
                    <>
                      {theme === "dark" ? (
                        <div className="flex">
                          <Moon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                        </div>
                      ) : (
                        <Sun className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                      )}
                    </>
                  ),
                }}
              ></SidebarLink>
            </div>

            <div
              onClick={() => (
                deleteCookie("refresh-token"), Router.replace("/")
              )}
            >
              <SidebarLink
                className="pl-1 mb-4"
                link={{
                  label: "Sair",
                  href: "#",
                  icon: (
                    <ArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                  ),
                }}
              ></SidebarLink>
            </div>
            <SidebarLink
              link={{
                label: User.username,
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        GymLog
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <div>
      <a
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
      >
        <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      </a>
    </div>
  );
};
