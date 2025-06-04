"use client";
import BurgerMenu from "@/public/svg/burgerMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // анхны theme-г localStorage-с шалгах
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <div>
                <div className="text-green-500 font-bold text-xl">EASY</div>
                <div className="text-gray-700 dark:text-gray-200 font-bold text-xl -mt-1">
                  PARKING
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8 justify-center items-center">
            <Link
              href="#hero"
              className="text-gray-700 dark:text-gray-200 hover:text-green-500 font-medium"
            >
              НҮҮР
            </Link>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-green-500 font-medium"
            >
              БИДНИЙ ТУХАЙ
            </Link>
            <Link
              href="#locations"
              className="text-gray-700 dark:text-gray-200 hover:text-green-500 font-medium"
            >
              БАЙРШИЛУУД
            </Link>
            <Link
              href="./contact"
              className="text-gray-700 dark:text-gray-200 hover:text-green-500 font-medium"
            >
              ХОЛБОО БАРИХ
            </Link>
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-200 hover:text-green-500">
              <BurgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
