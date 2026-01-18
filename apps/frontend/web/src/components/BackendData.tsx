'use client'; //file jalan di client

import { useState, useEffect } from 'react';
//path untuk mengambil data dari backend
import { getBlockchainValue, getBlockchainEvents } from '../services/blockchain.service';

type BlockchainEvent = Record<string, unknown>;

export default function BackendData() {
  const [value, setValue] = useState<string>('Loading...');
  const [events, setEvents] = useState<BlockchainEvent[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        //ambil value terbaru (GET)
        const valData = await getBlockchainValue();
        setValue(valData ? valData.toString() : '0');

        //ambil history events (POST)
        const fromBlock = 50613000; 
        const toBlock = 50613400; 
        
        const eventsData = await getBlockchainEvents(fromBlock, toBlock);
        setEvents(eventsData as BlockchainEvent[]);

      } catch (err) {
        console.error("Failed to fetch backend data:", err);
        setError("Failed to connect to NestJS Backend. Ensure server is running.");
        setValue("Error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, []); 

  return (
    <div className="w-full mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/*header section*/}
      <div className="border-t border-gray-300 pt-6 text-center">
        <h2 className="text-xl font-bold text-[#171616]">
          Integration Day 5
        </h2>
        <p className="text-xs text-gray-500">Data fetched from NestJS Backend API</p>
      </div>

      {/*error message*/}
      {error && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-700 text-xs rounded-lg text-center">
          {error}
        </div>
      )}
      
      {/*box value*/}
      <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">
          Latest Value (via API GET)
        </h3>
        <div className="mt-2 flex items-center justify-between">
            <p className="text-3xl font-mono font-bold text-blue-900">
                {loading ? (
                    <span className="animate-pulse">...</span>
                ) : value}
            </p>
            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                on-chain
            </span>
        </div>
      </div>

      {/*box events*/}
      <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-green-800 text-sm uppercase tracking-wide">
            Events History (via API POST)
            </h3>
            <span className="text-[10px] text-green-600 bg-green-200 px-2 py-0.5 rounded-full">
                Last 400 Blocks
            </span>
        </div>
        
        {/*scrollable JSON */}
        <div className="bg-white p-3 rounded-lg border border-gray-200 h-40 overflow-y-auto text-[10px] font-mono shadow-inner">
          {loading ? (
             <p className="text-gray-400 text-center mt-10 animate-pulse">Fetching logs from blockchain...</p>
          ) : events.length > 0 ? (
             <pre>{JSON.stringify(events, null, 2)}</pre>
          ) : (
             <p className="text-gray-400 text-center mt-10">No events found in this block range.</p>
          )}
        </div>
      </div>

    </div>
  );
}