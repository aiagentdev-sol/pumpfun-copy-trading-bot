"use client";
import React, { ReactNode } from "react";
import { PageProvider } from "@/contexts/PageContext";
import { ShowSideBarProvider } from "@/contexts/showSideBarContext";
import { SolanaWalletProvider } from "@/contexts/SolanaWalletProvider";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SolanaWalletProvider>
      <QueryClientProvider client={queryClient}>
        <ShowSideBarProvider>
          <PageProvider>{children}</PageProvider>
        </ShowSideBarProvider>
      </QueryClientProvider>
    </SolanaWalletProvider>
  );
}
