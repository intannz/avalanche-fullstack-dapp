import {
  Injectable,
  InternalServerErrorException,
  ServiceUnavailableException,
  BadRequestException,
} from '@nestjs/common';
import { createPublicClient, http, PublicClient } from 'viem';
import { avalancheFuji } from 'viem/chains';
import SIMPLE_STORAGE from './simple-storage.json';

@Injectable()
export class BlockchainService {
  private client: PublicClient;
  private contractAddress: `0x${string}`;

  constructor() {
    //setup connect ke avalanche fuji testnet
    this.client = createPublicClient({
      chain: avalancheFuji,
      transport: http('https://api.avax-test.network/ext/bc/C/rpc', {
        //timeout 10 detik
        timeout: 10_000,
      }),
    });

    //address smart contract yang udah di deploy di Day 2
    this.contractAddress = '0xAD8891B74c5Bb669e67B33b8A6Eb714e2f64e9c6';
  }

  //read data akhir
  async getLatestValue() {
    try {
      const value = (await this.client.readContract({
        address: this.contractAddress,
        abi: SIMPLE_STORAGE.abi,
        functionName: 'getValue',
      })) as bigint;

      //convert bigInt ke string
      return {
        value: value.toString(),
      };
    } catch (error) {
      //jika error, dikasih ke handler agar rapi
      this.handleRpcError(error);
    }
  }

  //read events
  async getValueUpdatedEvents(fromBlock: number, toBlock: number) {
    //cek apakah data kosong
    if (!fromBlock || !toBlock) {
      throw new BadRequestException('fromBlock and toBlock are required!');
    }
    //convert ke number (agar yang dikirim bukan string)
    const start = Number(fromBlock);
    const end = Number(toBlock);
    //cek apakah input beneran angka
    if (isNaN(start) || isNaN(end)) {
      throw new BadRequestException('Block must be a valid number!!');
    }
    //block awal tidak boleh lebih besar dari akhir
    if (start > end) {
      throw new BadRequestException('fromBlock cannot be greater than end');
    }

    try {
      //fetch data event ValueUpdated sesuai range block
      const events = await this.client.getLogs({
        address: this.contractAddress,
        event: {
          type: 'event',
          name: 'ValueUpdated',
          inputs: [
            {
              name: 'newValue',
              type: 'uint256',
              indexed: false,
            },
          ],
        },
        fromBlock: BigInt(fromBlock),
        toBlock: BigInt(toBlock),
      });

      return events.map((event) => {
        const args = event.args as { newValue: bigint };

        return {
          blockNumber: event.blockNumber?.toString(),
          value: args.newValue.toString(),
          txHash: event.transactionHash,
        };
      });
    } catch (error) {
      this.handleRpcError(error);
    }
  }

  //handle error RPC
  private handleRpcError(error: unknown): never {
    let message = '';

    //cek apakah error beneran object error
    if (error instanceof Error) {
      message = error.message.toLowerCase();
    } else {
      message = String(error).toLowerCase();
    }

    //jika RPC timeout
    if (message.includes('timeout')) {
      throw new ServiceUnavailableException(
        'RPC timeout. Silakan coba beberapa saat lagi.',
      );
    }

    //jika koneksi internet putus
    if (
      message.includes('network') ||
      message.includes('fetch') ||
      message.includes('failed')
    ) {
      throw new ServiceUnavailableException(
        'Tidak dapat terhubung ke blockchain RPC.',
      );
    }
    //error lain
    console.error(error);
    throw new InternalServerErrorException(
      'Terjadi kesalahan saat membaca data blockchain.',
    );
  }
}
