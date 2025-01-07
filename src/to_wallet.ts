import bs58 from 'bs58'
import * as prompt from 'prompt-sync';

function base58ToWallet(base58String: string): Uint8Array {
    return bs58.decode(base58String);
}

// Test the conversion
const promptSync = prompt.default({ sigint: true });
const input = promptSync("Enter base58 string: ");
const wallet = base58ToWallet(input);
console.log("Wallet:", wallet);
