const fs = require("fs");
const path = require("path");
const { safeTerminal } = require("./backend/utilities/terminal");
const port = 3230;

const dockerLogo = `
     ##         .
   ## ## ##        ==
## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\____ O           __/
 \\    \\         __/
  \\____\\_______/
____[DOCKER MANAGER]_____
`;

async function app() {
  console.clear();

  console.log(dockerLogo);

  const BACKEND = path.resolve(__dirname + "/backend/");
  const NODE_MODULES = BACKEND + "/node_modules";

  if (!fs.existsSync(NODE_MODULES)) {
    console.log(
      "🚀 Veuillez patienter pendant que nous installons toutes les dépendances pour vous... ⏳🔧\n"
    );
    await safeTerminal.installModules(BACKEND);
    console.log("🎉  Toutes les dépendances ont été ajoutées avec succès ! 🎉👍");
  }

  setTimeout(() => {
    console.log(`✨  Visitez http://localhost:${port} ou http://127.0.0.1:${port} le port de l'interface Docker Manganger. ✨`);
  }, 1500);
  await safeTerminal.serve(BACKEND);
}

app();
