"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/button";
import { signOut } from "next-auth/react";
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900">

      <main className="flex-grow w-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Welcome, {session.user?.name || "User"}!</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">You're successfully logged in to your dashboard.</p>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Information:</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Email: {session.user?.email}</li>
                  {session.user?.image && (
                    <li className="mt-2">
                      Profile Picture:
                      <img src={session.user.image} alt="Profile" className="w-16 h-16 rounded-full mt-1" />
                    </li>
                  )}
                </ul>
              </div>
              <div className="mt-6">
                <Link href="/dashboard/new-project">
                  <Button>Create New Wedding Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}