import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="fast" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
      <GuestCard name="John & Jane Doe" status="Confirmed" table="1" dietary="Vegetarian" />
      <GuestCard name="Mike Smith" status="Pending" table="2" dietary="None" />
      <GuestCard name="Emily Johnson" status="Confirmed" table="1" dietary="Gluten-free" />
      <GuestCard name="Alex & Sam Lee" status="Declined" table="-" dietary="-" />
      <GuestCard name="Sarah Brown" status="Confirmed" table="3" dietary="Vegan" />
    </div>
  );
};

const GuestCard = ({ name, status, table, dietary }: { name: string; status: string; table: string; dietary: string }) => {
  return (
    <span className="min-w-[200px] flex flex-col justify-center items-center bg-white dark:bg-neutral-900 px-4 py-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="font-semibold">{name}</div>
      <div className={cn("text-xs", {
        "text-green-500": status === "Confirmed",
        "text-yellow-500": status === "Pending",
        "text-red-500": status === "Declined"
      })}>{status}</div>
      <div className="text-xs">Table: {table}</div>
      <div className="text-xs">Dietary: {dietary}</div>
    </span>
  );
};
