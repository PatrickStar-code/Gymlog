"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/app/Context/ThemeContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/CardLogin";
import Button from "@/components/ButtonLogin";
import MultiStepComponent from "@/components/MultiStepRegister";
import Link from "next/link";

const GymLogRegister = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-orange-500"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-red-500"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 rounded-full bg-orange-400"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 rounded-full bg-red-400"></div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleChangeTheme(theme as string)}
        className="absolute top-4 right-4 z-10"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-orange-200 dark:border-gray-700 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center"
            >
              <Dumbbell className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                GymLog
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Track your fitness journey with precision
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <MultiStepComponent />
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/"
                className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 p-0 h-auto font-semibold"
              >
                Sig in here
              </Link>
            </div>
          </CardFooter>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Manage workouts • Track diet plans • Achieve goals
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GymLogRegister;
