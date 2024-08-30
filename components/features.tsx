import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "Venue Booking Agent",
      description:
        "Discover and book your perfect wedding venue with our AI-powered Venue Booking Agent. Compare prices, availability, and features effortlessly.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 xl:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "Vow Generation Agent",
      description:
        "Craft heartfelt and personalized wedding vows with our Vow Generation Agent. Get inspiration and polish your words to perfection.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-3 xl:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Budgeting Wizard",
      description:
        "Stay on top of your wedding expenses with our intelligent Budgeting Wizard. Track costs, set limits, and receive smart suggestions to save money.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Guest List Manager",
      description:
        "Effortlessly manage your guest list, RSVPs, and seating arrangements with our smart Guest List Manager. Streamline communication and organization.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 md:py-20 lg:py-32">
      <Heading as="h2" className="text-center">Your AI Wedding Planning Assistant</Heading>
      <Subheading className="text-center max-w-3xl mx-auto mb-12">
        From venue booking to vow writing, our AI-powered tools make wedding planning a breeze. Let us handle the details while you focus on your special day.
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full mt-4">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-5%",
            width: "110%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-5%",
            width: "110%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-5%",
            right: 0,
            height: "110%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-5%",
            left: 0,
            height: "110%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-6 relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left mb-2">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 text-sm lg:text-base mb-4">
      {children}
    </Subheading>
  );
};
