use anchor_lang::prelude::*;

declare_id!("6ApCN7LLT3Zmq898SML76PG3RkVnTDVasAFxsiwmbeFT"); 

#[program]
pub mod chain_guess {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, number: u8) -> Result<()> {
        let game = &mut ctx.accounts.game;
        game.secret_number = number;
        game.authority = ctx.accounts.user.key();
        game.is_won = false;
        game.attempts = 0; // Requisito: Contador
        Ok(())
    }

    pub fn guess(ctx: Context<Guess>, number: u8) -> Result<()> {
        let game = &mut ctx.accounts.game;
        if game.is_won { return err!(GuessError::AlreadyWon); }

        game.attempts += 1; // MODIFICAR: El contador sube

        if number == game.secret_number {
            game.is_won = true;
            msg!("🎉 ¡Ganaste en {} intentos!", game.attempts);
        } else {
            msg!("❌ Intento fallido #{}", game.attempts);
        }
        Ok(())
    }

    pub fn delete_game(_ctx: Context<DeleteGame>) -> Result<()> {
        // ELIMINAR: Cerramos la cuenta
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 1 + 1 + 1)]
    pub game: Account<'info, Game>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Guess<'info> {
    #[account(mut)]
    pub game: Account<'info, Game>,
}

#[derive(Accounts)]
pub struct DeleteGame<'info> {
    #[account(mut, close = user, constraint = game.authority == user.key())]
    pub game: Account<'info, Game>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct Game {
    pub authority: Pubkey,
    pub secret_number: u8,
    pub is_won: bool,
    pub attempts: u8,
}

#[error_code]
pub enum GuessError {
    #[msg("Juego terminado.")]
    AlreadyWon,
}