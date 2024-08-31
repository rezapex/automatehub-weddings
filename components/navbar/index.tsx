"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { Button } from "@/components/button";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const publicNavItems = [
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const authenticatedNavItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Settings",
    link: "/settings",
  },
];

export function NavBar() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const isAuthenticated = status === "authenticated";
  const navItems = isAuthenticated ? authenticatedNavItems : publicNavItems;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.05, 0.1, 0.9], duration: 0.8 }}
      className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
    >
      <div className="hidden lg:block w-full">
        <DesktopNavbar
          navItems={navItems}
          isAuthenticated={isAuthenticated}
          onSignOut={() => signOut({ callbackUrl: "/" })}
          onThemeToggle={toggleTheme}
        />
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <MobileNavbar
          navItems={navItems}
          isAuthenticated={isAuthenticated}
          onSignOut={() => signOut({ callbackUrl: "/" })}
          onThemeToggle={toggleTheme}
        />
      </div>
    </motion.nav>
  );
}
