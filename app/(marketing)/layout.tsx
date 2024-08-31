import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "AutomateHub",
  description:
    "AutomateHub is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={GeistSans.className}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
