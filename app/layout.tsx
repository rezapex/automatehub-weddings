import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { NextAuthProvider } from "@/components/session-provider";

export const metadata: Metadata = {
  title: "BridalBliss",
  description:
    "BridalBliss is a platform that provides a wide range of AI tools and services to help you stay on top of your wedding planning. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mkk7vhy.css" />
      </head>
      <body
        className={cn(
          GeistSans.className,
          "bg-white dark:bg-black antialiased h-full w-full font-neighbor"
        )}
      >
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            <ViewTransitions>
              {children}
            </ViewTransitions>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
