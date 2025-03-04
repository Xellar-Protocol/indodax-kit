"use client";

import React from "react";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IndodaxKitProvider, defaultConfig } from "@xellar-protocol/indodax-kit";

const config = defaultConfig({
  appName: "Xellar",
  walletConnectProjectId: "0164f6aefa91d65fe12adcfeebadf92b",
  ssr: true,
});

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <IndodaxKitProvider theme="dark">{children}</IndodaxKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
