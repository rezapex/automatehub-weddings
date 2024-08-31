"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: "_blank";
};

export function NavBarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white text-black dark:text-white",
        (active || pathname?.includes(href)) &&
        "bg-white dark:bg-black text-black dark:text-white",
        className
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
