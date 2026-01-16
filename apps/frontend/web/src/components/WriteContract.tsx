'use client'; //file jalan di client

import { useState, useEffect } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { ABI } from '../contracts/abi/simpleStorage';
import { CONTRACT_ADDRESS } from '../contracts/address';

export default function WriteContract() {
  const [inputValue, setInputValue] = useState('');

  //ambil fungsi write, hash, error, dan status loading
  const { 
    writeContract, 
    data: hash, 
    error: writeError,
    isPending: isWriting 
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ hash });

  //fungsi handle btn click
  const handleSetValue = async () => {
    if (!inputValue) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: 'setValue',
      args: [BigInt(inputValue)], 
    });
  };

  //kalau transaksi confirmed, reset form input otomatis
  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        setInputValue('');
      }, 0);
      
      return () => clearTimeout(timer);
    }
  }, [isConfirmed]);

  return (
    <div className="p-5 rounded-xl bg-[#e8e8e8] mt-4 space-y-4 border border-gray-300 shadow-inner">
      <h2 className="text-lg font-bold text-gray-800">Update Data:</h2>
      
      <input
        type="number"
        placeholder="Enter new value..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border rounded text-black bg-white"
      />

      <button
        onClick={handleSetValue}
        disabled={isWriting || isConfirming}
        className={`w-full py-3 rounded-xl font-bold text-white transition-all shadow-md ${
        isWriting || isConfirming 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-[#f82c2c] hover:bg-[#920000]'
        }`}
      >
        {isWriting ? 'Check Wallet...' : 
         isConfirming ? 'Confirming...' : 
         'Send Transaction'}
      </button>

      {/*error message: user reject atau gas abis*/}
      {writeError && (
        <p className="text-red-500 text-xs bg-red-100 p-2 rounded border border-red-200">
          Error: {writeError.message.split('\n')[0]}
        </p>
      )}

      {/*success message: pas transaksi udah masuk blok */}
      {isConfirmed && (
        <p className="text-green-600 text-sm font-bold bg-green-100 p-2 rounded border border-green-200">
          Success! Data saved to Blockchain.
        </p>
      )}
    </div>
  );
}