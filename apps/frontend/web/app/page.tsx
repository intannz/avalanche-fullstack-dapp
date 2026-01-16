'use client'; //file jalan di client

import { useState, useEffect } from 'react'; 
import ReadContract from '../src/components/ReadContract';
import WriteContract from '../src/components/WriteContract';
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';

export default function Home() {
  const { address, isConnected, chain } = useAccount();
  
  //ambil connector biar bisa milih wallet
  const { connect, connectors, isPending } = useConnect(); 
  const { disconnect } = useDisconnect();
  
  //ambil id network sama fungsi buat ganti network
  const chainId = useChainId(); 
  const { switchChain } = useSwitchChain(); 

  //state biar ngga error pas reload
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  //tampilkan loading sebelum komponen siap
  if (!mounted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center text-white">
           Loading...
        </div>
      </main>
    );
  }

  //cek user connect ke network yang salah atau ngga
  const isWrongNetwork = isConnected && chainId !== avalancheFuji.id;

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#fff5f5] text-[#171616] p-8 rounded-2xl space-y-6 w-full max-w-md shadow-2xl border-2 border-white/20">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Avalanche dApp</h1>
          <p className="text-gray-500 text-sm font-medium">Intan Maharani - 241011402542</p>
        </div>

        {!isConnected ? (
          <div className="space-y-3">
            {/*tampilkan btn connector */}
            {connectors
              .filter((connector) => connector.id === 'walletConnect' || connector.id === 'injected')
              .map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  disabled={isPending}
                  className="w-full px-4 py-4 bg-[#f82c2c] hover:bg-[#d00000] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
                >
                  {/*labelin btn*/}
                  Connect via {connector.name === 'WalletConnect' ? 'Reown (QR Code)' : 'Browser Wallet (Injected)'}
                </button>
              ))}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/*status network*/}
            <div className={`p-2 rounded-lg text-xs font-bold text-center border ${isWrongNetwork ? 'bg-red-100 text-red-600 border-red-200' : 'bg-green-100 text-green-700 border-green-200'}`}>
              {isWrongNetwork ? (
                <div className="flex flex-col gap-2">
                   <span>Wrong Network ({chain?.name || 'Unknown'})</span>
                   <button 
                     onClick={() => switchChain({ chainId: avalancheFuji.id })}
                     className="underline hover:text-red-800"
                   >
                     Switch to Fuji
                   </button>
                </div>
              ) : (
                <span>Connected to {chain?.name || 'Avalanche Fuji'}</span>
              )}
            </div>

            {/*info wallet address */}
            <div className="bg-[#e8e8e8] p-4 rounded-xl text-center border border-gray-300">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Connected Account</p>
                <p className="font-mono text-xl text-[#920000] font-bold">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
            </div>
          
            {/*fitur read & write hanya muncul jika network benar*/}
            {!isWrongNetwork && (
              <div>
                 <ReadContract />
                 <WriteContract />
              </div>
            )}

            <button
              onClick={() => disconnect()}
              className="w-full text-sm text-[#920000] hover:text-white hover:bg-[#920000] py-3 rounded-lg transition-all border border-[#920000]"
            >
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    </main>
  );
}