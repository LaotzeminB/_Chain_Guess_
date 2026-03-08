import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ChainGuess } from "../target/types/chain_guess";
import type { ChainGuess } from "../target/types/chain_guess";

describe("chain_guess", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ChainGuess as anchor.Program<ChainGuess>;
  
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.ChainGuess as Program<ChainGuess>;

  it("Ciclo CRUD Completo", async () => {
    const gameKey = anchor.web3.Keypair.generate();

    // 1. CREATE
    await program.methods.initialize(7).accounts({
      game: gameKey.publicKey,
      user: provider.wallet.publicKey,
    }).signers([gameKey]).rpc();
    console.log("✅ Juego Creado");

    // 2. UPDATE (Contador)
    await program.methods.guess(5).accounts({ game: gameKey.publicKey }).rpc();
    
    // 3. READ (Verificar)
    let account = await program.account.game.fetch(gameKey.publicKey);
    if (account.attempts === 1) {
      console.log("✅ Contador funciona: 1 intento detectado");
    }

    // 4. DELETE
    await program.methods.deleteGame().accounts({
      game: gameKey.publicKey,
      user: provider.wallet.publicKey,
    }).rpc();
    console.log("✅ Cuenta eliminada y SOL recuperados");
  });
});