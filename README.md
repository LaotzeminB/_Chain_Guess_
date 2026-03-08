🔗 Solana Chain Guess - CRUD & Counter 🎮 ¡Bienvenido a Chain Guess! Este es un programa desarrollado en la red de Solana utilizando el framework Anchor. El proyecto ha sido diseñado para cumplir con los requisitos de certificación de Waylearn, demostrando el ciclo completo de vida de una cuenta en la blockchain (CRUD) y la manipulación de estados mediante un contador de intentos.

🚀 Características Técnicas (Certificación) Este repositorio demuestra el dominio de los siguientes conceptos fundamentales de Solana:

Create (Crear): Función inicializa que genera una cuenta de juego única, define un número secreto y establece la autoridad del usuario.

Read (Leer): Implementación de fetching de cuentas en el cliente y pruebas para visualizar el estado del juego en tiempo real.

Actualización (Actualizar): La función Supongo modifica el estado de la cuenta incrementando el Contador de Intentos (intentos) en cada interacción.

Eliminar (Eliminar): Implementación de la función eliminar_juego utilizando el atributo close de Anchor para cerrar la cuenta y recuperar los SOL de la renta (Rent-Exempt).

🛠️ Estructura del Proyecto /programs/chain_guess/src/lib.rs: Lógica del Smart Contract en Rust. Incluye el manejo de errores personalizados, restricciones de seguridad y el Contador de Intentos.

/tests/chain_guess.test.ts: Suite de pruebas automatizadas que validan el flujo CRUD completo (Optimizado para ejecutar en Solana Playground).

/client.ts: Script de ejecución rápida optimizado para Solana Playground, eliminando dependencias de archivos locales para asegurar que el comando Run funcione correctamente en el navegador.

/app: Interfaz de cliente preparada para interactuar con el programa en Devnet.

🧪 Pruebas de Funcionamiento Para verificar la integridad del programa, se han ejecutado pruebas unitarias que confirman el éxito de las operaciones:

Inicialización: Cuenta creada con éxito con estado inicial.

Lógica del Juego: Incremento del contador intentos verificado tras cada llamado a la instrucción adivinar.

Cierre de Cuenta: Verificación técnica de que la cuenta se elimina y los fondos (renta) regresan a la autoridad del usuario.

Resultado del Test: 1 pase (450ms) ✅ (Ciclo CRUD Completo verificado en Solana Playground).

🛠️ Cómo ejecutar el proyecto Clonar el repo: git clone https://github.com/LaotzeminB/Chain_guess _

Dependencias instalales: construcción de anclaje

Desplegar: ancla desplegar

Correr Tests: En Solana Playground, dirígete a la pestaña de Test y presiona el botón Run Test.

🛠️ Próximas Mejoras (Work in Progress) 🚧 Este proyecto se encuentra en una etapa de mejora continua. Actualmente, estoy trabajando en las siguientes implementaciones:

🛡️ Seguridad Avanzada: Implementación de PDA (Program Derived Addresses) para una gestión de cuentas más robusta.

🎨 Interfaz de Usuario (UI/UX): Refactorización del frontend para una experiencia más intuitiva.

📊 Historial Global: Creación de un Leaderboard on-chain para registrar los mejores puntajes.

Desarrollado por Laotzemin Beatriz Sanchez Flores para la Certificación de Desarrollo en Solana. 🦀
