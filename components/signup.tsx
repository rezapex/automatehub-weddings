"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { ClientSafeProvider } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Password from "./password";
import { Button } from "./button";
import { Logo } from "./Logo";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter password",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  password: z
    .string({
      required_error: "Please enter password",
    })
    .min(1, "Please enter password"),
});

export type LoginUser = z.infer<typeof formSchema>;

interface SignupFormProps {
  providers: Record<string, ClientSafeProvider> | null;
}

export function SignupForm({ providers }: SignupFormProps) {
  const router = useRouter();
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginUser) {
    try {
      console.log("submitted form", values);
      // TODO: Implement your signup logic here
      // After successful signup, redirect to dashboard
      router.push('/dashboard');
    } catch (e) {
      console.error("Error during signup:", e);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/dashboard' });
      if (result?.error) {
        console.error("Error during Google sign-in:", result.error);
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const result = await signIn('github', { callbackUrl: '/dashboard' });
      if (result?.error) {
        console.error("Error during GitHub sign-in:", result.error);
      }
    } catch (error) {
      console.error("Error during GitHub sign-in:", error);
    }
  };

  return (
    <Form {...form}>
      <div className="flex items-center w-full justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <div className="flex">
              <Logo />
            </div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Sign up for an account
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                        >
                          Full name
                        </label>
                        <FormControl>
                          <div className="mt-2">
                            <input
                              id="name"
                              type="name"
                              placeholder="Manu Arora"
                              className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                        >
                          Email address
                        </label>
                        <FormControl>
                          <div className="mt-2">
                            <input
                              id="email"
                              type="email"
                              autoComplete="username"
                              placeholder="hello@johndoe.com"
                              className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                        >
                          Password
                        </label>
                        <FormControl>
                          <div className="mt-2">
                            <Password
                              id="password"
                              type="password"
                              placeholder="••••••••"
                              className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <Button className="w-full">Sign Up</Button>
                  <p
                    className={cn(
                      "text-sm text-neutral-800 text-center mt-4 text-muted-800 dark:text-muted-dark"
                    )}
                  >
                    Already have an account?{" "}
                    <Link href="/login" className="text-black dark:text-white underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-neutral-400 dark:text-neutral-500 dark:bg-black">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button onClick={handleGoogleSignIn} className="w-full py-1.5">
                  <IconBrandGoogle className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold leading-6 text-white dark:text-neutral-200">
                    Google
                  </span>
                </Button>
                <Button onClick={handleGithubSignIn} className="w-full py-1.5">
                  <IconBrandGithub className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold leading-6 text-white dark:text-neutral-200">
                    Github
                  </span>
                </Button>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center mt-8">
                By clicking on sign up, you agree to our{" "}
                <Link
                  href="#"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
