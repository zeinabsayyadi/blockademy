"use client";

import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "../utils/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className="h-screen flex flex-col text-center">
            <NavBar />
            <main className="h-page bg-gray-900 m-0">{children}</main>
          </body>
        </html>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
