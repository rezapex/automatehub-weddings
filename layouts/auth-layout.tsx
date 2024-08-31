import { cn } from "@/lib/utils";
import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { FeaturedTestimonials } from "@/components/featured-testimonials";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        {/* Add your sidebar content here */}
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        {/* Add navigation links or other sidebar elements */}
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
