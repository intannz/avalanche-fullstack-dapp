'use client'; //file jalan di client

import { useReadContract } from 'wagmi';
import { ABI } from '../contracts/abi/simpleStorage';
import { CONTRACT_ADDRESS } from '../contracts/address';

export default function ReadContract() {
    //baca data tanpa gas fee
    const { 
        data, 
        isError, 
        isLoading 
    } = useReadContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getValue',
    });

    return (
        //styling card output
    <div className="p-5 rounded-xl bg-[#e8e8e8] mt-4 border border-gray-300 shadow-inner">
        <h2 className="text-lg font-bold mb-2">Data from Blockchain:</h2>

        {/*kasih info loading biar user tau sistem lagi kerja */}
        {isLoading && <p className="text-yellow-600">Loading...</p>}

        {/*kasih info error kalau gagal fetch data */}
        {isError && <p className="text-red-500">Failed to retrieved data</p>}

        {/*kalau sukses, tampilkan datanya */}
        {data !== undefined && (
        <p className="text-4xl font-mono font-bold text-400">
            {data.toString()}
        </p>
        )}
    </div>
    );
}