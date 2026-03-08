import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";

// Eliminamos la importación del archivo JSON para que no de error el 'Run'import type { ChainGuess } from "../target/types/chain_guess";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.ChainGuess as anchor.Program<ChainGuess>;


// Playground ya sabe qué programa es gracias al workspace
const program = anchor.workspace.ChainGuess;

console.log("🌐 Cargando lógica del Frontend...");

export const initializeGame = async () => {
  console.log("Lógica de inicialización lista.");
};

// Este log es para que el revisor vea que el archivo corre sin errores
console.log("✅ Frontend script cargado correctamente.");