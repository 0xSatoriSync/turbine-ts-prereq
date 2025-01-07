import bs58 from 'bs58'
import * as prompt from 'prompt-sync';

function walletToBase58(input: string): string {
    // Convert string of numbers to Uint8Array
    const numbers = JSON.parse(input);
    const walletArray = new Uint8Array(numbers);
    return bs58.encode(walletArray);
}

// Test the conversion
const promptSync = prompt.default({ sigint: true });
const input = promptSync("Enter Wallet Array (e.g. [1,2,3]): ");
const base58 = walletToBase58(input);
console.log("Base58:", base58);