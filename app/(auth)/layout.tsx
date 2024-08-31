'use client';

import { AuthLayout } from "@/layouts/auth-layout";
import { NavBar } from "@/components/navbar";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function AuthXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { theme } = useTheme();

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (status === "loading") {
    return <div>Loading...</div>; // Or a proper loading component
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <NavBar />
      <AuthLayout>
        <main className="flex h-full min-h-screen w-full pt-16">
          {children}
        </main>
      </AuthLayout>
    </div>
  );
}
