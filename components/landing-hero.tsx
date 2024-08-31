import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SeatingChartCreator } from "./seating-chart-creator";

const LandingHero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-4xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
          >
            AI-powered Wedding Planning Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-lg backdrop-filter backdrop-blur-lg ${theme === "dark" ? "bg-neutral-800 bg-opacity-30" : "bg-white bg-opacity-70"} shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
              >
                Guest List Manager
              </h3>
              <p
                className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}`}
              >
                Easily manage and organize your wedding guest list.
              </p>
              <div
                className={`h-32 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"} rounded-md`}
              ></div>
            </div>
            <div
              className={`p-6 rounded-lg backdrop-filter backdrop-blur-lg ${theme === "dark" ? "bg-neutral-800 bg-opacity-30" : "bg-white bg-opacity-70"} shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
              >
                Budget Tracker
              </h3>
              <p
                className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}`}
              >
                Keep track of your wedding expenses and stay on budget.
              </p>
              <div
                className={`h-32 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"} rounded-md`}
              ></div>
            </div>
            <div
              className={`p-6 rounded-lg backdrop-filter backdrop-blur-lg ${theme === "dark" ? "bg-neutral-800 bg-opacity-30" : "bg-white bg-opacity-70"} shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
              >
                Venue Finder
              </h3>
              <p
                className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}`}
              >
                Discover and compare wedding venues in your area.
              </p>
              <div
                className={`h-32 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"} rounded-md`}
              ></div>
            </div>
            <div
              className={`p-6 rounded-lg backdrop-filter backdrop-blur-lg ${theme === "dark" ? "bg-neutral-800 bg-opacity-30" : "bg-white bg-opacity-70"} shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
              >
                Timeline Planner
              </h3>
              <p
                className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}`}
              >
                Create and manage your wedding day timeline.
              </p>
              <div
                className={`h-32 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"} rounded-md`}
              ></div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/assistant"
              className={`${theme === "dark" ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} text-white font-bold py-3 px-6 rounded-lg transition duration-300`}
            >
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
