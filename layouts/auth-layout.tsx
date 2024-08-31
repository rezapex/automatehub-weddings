import { cn } from "@/lib/utils";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
