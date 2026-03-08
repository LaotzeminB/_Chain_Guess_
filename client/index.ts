import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { ChainGuess } from "../target/types/chain_guess";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.ChainGuess as anchor.Program<ChainGuess>;


// Exportamos lo esencial usando el objeto global de Playground
export const program = anchor.workspace.ChainGuess;
export const programId = program.programId;

console.log("📦 Index cargado. Program ID:", programId.toString());
console.log("✅ Index verificado.");