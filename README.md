🦀 ChainGuess: Decentralized Guessing Game on Solana
ChainGuess es un Smart Contract de próxima generación construido sobre la red de Solana utilizando el framework Anchor. El proyecto demuestra cómo implementar una lógica de juego justa, segura y eficiente, eliminando la necesidad de intermediarios mediante el uso de la arquitectura de la blockchain.

🚀 Propuesta de Valor
En los juegos de azar tradicionales, la transparencia es una duda constante. ChainGuess resuelve esto mediante:

Custodia Descentralizada: El contrato actúa como un escrow seguro que retiene la apuesta.

Pagos Atómicos: El premio se transfiere al ganador en la misma milésima de segundo en que se valida el acierto.

Inmutabilidad: Una vez creada la partida, las reglas y el premio no pueden ser alterados.

🛠️ Stack Tecnológico
Lenguaje: Rust 🦀

Framework: Anchor v0.29.0

Client/Testing: TypeScript & Mocha

Blockchain: Solana (Devnet)

🧠 Implementación Técnica (Deep Dive)
1. Program Derived Addresses (PDAs)
Utilizamos PDAs para la gestión de estados. Cada partida es una cuenta única generada por una combinación de una seed_id dinámica y la PublicKey del usuario.

Rust
seeds = [seed_id.as_bytes(), user.key().as_ref()]
Esto permite que un mismo usuario pueda tener múltiples partidas activas simultáneamente sin colisiones de datos.

2. Gestión Eficiente de Fondos (CPI & Lamports)
Depósito: Utilizamos una Cross-Program Invocation (CPI) al system_program para transferir de forma segura el SOL del usuario al contrato durante la inicialización.

Retiro: Implementamos una lógica de transferencia directa de lamports modificando el balance de las cuentas en tiempo de ejecución, lo que reduce el consumo de unidades de cómputo (CU).

3. Suite de Pruebas Robusta
Nuestros tests no solo verifican la lógica, sino que gestionan la naturaleza asíncrona de Solana. Implementamos una sincronización forzada mediante confirmTransaction y getLatestBlockhash para garantizar que el estado de la blockchain sea consistente antes de realizar aserciones.

📋 Instrucciones de Ejecución (Solana Playground)
Build & Deploy:

ID del Programa: FydUWyryHSJWsofMMTz5kCNnuRUVEW2hMoDPX8iik8Xj

Compilar usando el icono del martillo y desplegar en Devnet.

Pruebas Automatizadas:

Ir a la pestaña de Tests y ejecutar.

Se validará la inicialización, la confirmación de la cuenta en el validador y el flujo de victoria.

Script de Cliente (app.ts):

Ejecutar run client/app.ts para observar una ejecución maestra con logs detallados y manejo de errores.

🎨 Interfaz de Usuario (UI/UX): Refactorización del frontend para una experiencia más intuitiva.

📊 Historial Global: Creación de un Leaderboard on-chain para registrar los mejores puntajes.

Desarrollado por Laotzemin Beatriz Sanchez Flores para la Certificación de Desarrollo en Solana. 🦀
