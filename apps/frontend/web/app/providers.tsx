'use client'; //file jalan di client

import { useState, type ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected, walletConnect } from 'wagmi/connectors'; // 👈 Tambah walletConnect

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  //projectId reown
  const projectId = 'c5cc253404c056ba9b3b203ba1b096ed';

  //setup config wallet
  const [config] = useState(() => createConfig({
    chains: [avalancheFuji],
    connectors: [
       //connect reown
       walletConnect({ 
         projectId, 
         showQrModal: true //munculin QR code
       }),
       
       //injected wallet browser
       injected(),
    ],
    transports: {
      [avalancheFuji.id]: http(),
    },
    ssr: true, 
  }));

  //wrapping children page dengan provider
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}