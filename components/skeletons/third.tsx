"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconDots, IconPlus } from "@tabler/icons-react";
import { Switch } from "../switch";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800  shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-1 w-full h-full flex-col space-y-2 ">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Wedding Budget Categories
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <IconPlus className="h-4 w-4 text-muted dark:text-muted-dark" />{" "}
            <span>Add Category</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Row title="Venue" budget="$10,000" spent="$9,500" active />
          <Row title="Catering" budget="$5,000" spent="$4,800" active />
          <Row title="Attire" budget="$3,000" spent="$2,800" active />
          <Row title="Photography" budget="$2,500" spent="$2,000" active />
          <Row title="Decorations" budget="$1,500" spent="$1,200" active />
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  budget,
  spent,
  active = false,
}: {
  title: string;
  budget: string;
  spent: string;
  active?: boolean;
}) => {
  const [checked, setChecked] = useState(active);
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <p className="text-muted dark:text-muted-dark text-xs shadow-aceternity dark:bg-neutral-700 px-1 py-0.5 rounded-md">
          {title}
        </p>
        <p className="text-muted dark:text-muted-dark text-xs">Budget: {budget}</p>
        <p className="text-muted dark:text-muted-dark text-xs">Spent: {spent}</p>
      </div>
      <div className="flex items-center space-x-1">
        <Switch checked={checked} setChecked={setChecked} />
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark" />
      </div>
    </div>
  );
};
