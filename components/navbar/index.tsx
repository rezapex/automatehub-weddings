"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { Sidebar } from "@/components/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { Button } from "@/components/button";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

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
  const navItems =
    status === "authenticated" ? authenticatedNavItems : publicNavItems;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.05, 0.1, 0.9], duration: 0.8 }}
        className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
      >
        <div className="hidden lg:block w-full">
          <DesktopNavbar
            navItems={navItems}
            isAuthenticated={status === "authenticated"}
            onSignOut={() => signOut({ callbackUrl: "/" })}
            onThemeToggle={toggleTheme}
            onSidebarToggle={toggleSidebar}
          />
        </div>
        <div className="flex h-full w-full items-center lg:hidden">
          <MobileNavbar
            navItems={navItems}
            isAuthenticated={status === "authenticated"}
            onSignOut={() => signOut({ callbackUrl: "/" })}
            onThemeToggle={toggleTheme}
            onSidebarToggle={toggleSidebar}
          />
        </div>
      </motion.nav>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: windowWidth < 1024 ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: windowWidth < 1024 ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-64 sm:w-80 lg:w-96"
          >
            <Sidebar
              onClose={toggleSidebar}
              navItems={navItems}
              isAuthenticated={status === "authenticated"}
              onSignOut={() => signOut({ callbackUrl: "/" })}
              onThemeToggle={toggleTheme}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
