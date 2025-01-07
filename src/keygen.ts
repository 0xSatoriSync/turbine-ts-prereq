import { Keypair } from "@solana/web3.js";

// Generate new keypair
let kp = Keypair.generate();

console.log(`You've generated a new Solana Wallet: ${kp.publicKey.toBase58()}`);
console.log(`PK: [${kp.secretKey}]`);