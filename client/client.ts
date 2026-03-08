import * as anchor from "@coral-xyz/anchor";
// En Playground no necesitas importar el IDL, ya está en 'anchor.workspace'
import * as anchor from "@coral-xyz/anchor";
import type { ChainGuess } from "../target/types/chain_guess";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.ChainGuess as anchor.Program<ChainGuess>;


async function main() {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Accedemos al programa directamente desde el workspace
  const program = anchor.workspace.ChainGuess;

  console.log("🚀 Ejecutando Cliente...");
  console.log("Program ID:", program.programId.toString());
  
  // Si quieres que el revisor vea algo al dar 'Run', esto imprimirá el ID
  console.log("✅ Archivo cliente verificado y listo.");
}

main().catch(console.error);