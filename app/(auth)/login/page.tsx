import { LoginForm } from "@/components/login";
import { Metadata } from "next";
import { getProviders } from "next-auth/react";

export const metadata: Metadata = {
  title: "Login - Bridalbliss",
  description:
    "Bridalbliss is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default async function LoginPage() {
  const providers = await getProviders();
  return <LoginForm providers={providers} />;
}
