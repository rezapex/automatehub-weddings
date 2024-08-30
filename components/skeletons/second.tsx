"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.5),
      }
    );
    setAnimating(false);
  };
  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-4 w-[90%] mx-auto"
          >
            <UserMessage>
              I need help writing my wedding vows. Can you give me some tips?
            </UserMessage>
            <AIMessage>
              Of course! Here are some tips for writing heartfelt wedding vows:
              1. Reflect on your relationship and memories
              2. Express your love and commitment
              3. Make promises for your future together
              4. Keep it personal and authentic
              5. Practice reading them aloud
              Would you like me to help you brainstorm some ideas?
            </AIMessage>
            {/* <UserMessage>
              Yes, please. I want to mention how we met and our shared love for hiking.
            </UserMessage>
            <AIMessage>
              That's a great start! Here's a sample structure you could use:

              "From the moment we met [describe the meeting], I knew you were special. Our shared love for hiking has taken us on countless adventures, each one strengthening our bond. [Mention a specific memorable hike]

              I promise to be your partner in all of life's journeys, to support your dreams, and to always be there to lend a hand when the trail gets steep. With you, every path leads home.

              I love you not only for who you are but for who I become when I'm with you. I can't wait to continue our greatest adventure - our life together."

              How does this sound as a starting point?
            </AIMessage>
            <UserMessage>
              That's beautiful! Can you help me expand on the promises part?
            </UserMessage>
            <AIMessage>
              Absolutely! Here are some more specific promises you could include:

              "I promise to:
              - Always pack your favorite trail mix for our hikes
              - Be your compass when you feel lost
              - Celebrate our summits and support you through the valleys
              - Keep our love as evergreen as the forests we explore
              - Be your shelter in life's storms and your sunshine on clear days
              - Continue discovering new paths with you, both on the trails and in life"

              Remember, the best vows are personal and reflect your unique relationship. Feel free to adjust these promises to better fit your experiences and aspirations together.
            </AIMessage> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
