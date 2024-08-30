import { Link } from "next-view-transitions";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold flex items-center text-lg mr-4 text-black dark:text-white px-2 py-1 relative z-20"
    >
      <span className="font-medium">Automate</span>
      <span className="font-extrabold">Hub.</span>
    </Link>
  );
};
