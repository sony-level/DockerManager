const child_process = require("child_process");
const readline = require("readline");
const tf = require("@tensorflow/tfjs-node")

const isValidId = (id) => /^[0-9a-zA-Z]+$/.test(id.trim());
const isValidString = (id) => /^[a-zA-Z]+$/.test(id.trim());

const r1 = readline.createInterface({
  input: procces.stdin,
  output: process.stdout
});

// Fonction pour exécuter une commande dans le terminal
const Terminal = (command) =>
  new Promise((resolve, reject) => {
    child_process.exec(
      command,
      { maxBuffer: 1500 * 1024 },
      function (error, stdout, stderr) {
        if (!!error) reject(error);
        else resolve(stdout || stderr);
      }
    );
  });

  const addToDockerGroup = async () => {
    try {
      const username = await Terminal('whoami');
      await Terminal(`sudo usermod -aG docker ${username.trim()}`);
      console.log(`L'utilisateur ${username.trim()} a été ajouté au groupe docker.`);
      console.log('Vous devez vous déconnecter et vous reconnecter pour que les modifications prennent effet.');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur au groupe docker :', error);
    }
  };
  addToDockerGroup();


  const checkDocker = async () => {
    try {
      await Terminal('docker -v');
      console.log('Genial,  Docker est installé sur votre machine');
    } catch (error) {
      console.log('Docker n\'est pas installé sur votre machine');
      r1.question('Voulez-vous installer Docker maintenant ? (y/n)', async (answer) => {
        if (answer.toLowerCase() === 'y') {
          await Terminal('sudo apt-get update');
          await Terminal('sudo apt-get install docker.io');
          await Terminal('sudo systemctl start docker');
          await Terminal('sudo systemctl enable docker');
          console.log('Docker est installé avec succès');
        } else {
          console.log('Vous devez installer Docker pour continuer');
          process.exit(1);
        }
        r1.close();
      });
    }
  };

exports.safeTerminal = {

  // Installer les modules npm dans le chemin spécifié
  installModules: async (backendPath) => {
    await Terminal(`cd ${backendPath} && npm install`);
  },
  // Lancer l'application Node.js dans le chemin spécifié
  serve: async (backendPath) => {
    await Terminal(`cd ${backendPath} && node index.js`);
  },
   // Récupérer tous les conteneurs Docker
  allContainers:  async () => { 
    await checkDocker();
    return Terminal(`docker ps -q -a`);
  },
  // Récupérer les conteneurs en cours d'exécution
  inspectContainer: async (id) => {
    if (isValidId(id)) {
      return Terminal(`docker container inspect ${id}`);
    } else {
      throw new Error("L'ID du conteneur est invalide");
    }
  },
   // Exécuter une tâche générique sur un conteneur Docker
  generic: async (task, id) => {
    if (!isValidString(task)) {
      throw new Error("La commande de tâche est invalide.");
    }
    if (!isValidId(id)) {
      throw new Error("L'ID du conteneur est invalide");
    }
    return Terminal(`docker container ${task} ${id}`);
  },
  logs: async (id) => {
    if (!isValidId(id)) {
      throw new Error("L'ID du conteneur est invalide");
    }
    return Terminal(`docker container logs ${id} --tail 1500`);
  },
  stats: () =>
    Terminal(
      `docker container stats --no-stream --format '{"id": "{{.ID}}", "cpu_percentage": "{{.CPUPerc}}", "memory_usage": "{{.MemUsage}}", "network_io": "{{.NetIO}}"}'
`
    ),
  prune: (pruneType) => {
    if (!isValidString(pruneType)) {
      throw new Error("TLe type d'entité n'est pas valide");
    }
    return Terminal(`docker ${pruneType} prune -f`);
  },
  containerLs: () => Terminal(`docker container ls --format '{{json .}}'`),
  formattedImages: () =>
    Terminal(
      `docker images --format '{"ID": "{{.ID}}", "Tag": "{{.Tag}}", "CreatedSince": "{{.CreatedSince}}", "Size": "{{.Size}}", "VirtualSize": "{{.VirtualSize}}", "Repository": "{{.Repository}}"}'`
    ),
  singleImage: (task, id) => {
    if (!isValidString(task)) {
      throw new Error("La commande de tâche est invalide.");
    }
    if (!isValidId(id)) {
      throw new Error("L'ID de l'image est invalide.");
    }
    if (task == "run") {
      return Terminal(`docker ${task} ${id}`);
    } else {
      return Terminal(`docker image ${task} ${id}`);
    }
  },
};

// Vérifier si Docker est installé au démarrage du script
checkDocker().then(() => {
  rl.close();
}).catch((error) => {
  console.error('Une erreur s\'est produite :', error);
  rl.close();
});

// Fonction pour recuperer les logs d'un conteneur
const getDockerLogs = async (id) => {
if (!/^[0-9a-zA-Z]+$/.test(id.trim())) {
  throw new Error("L'ID du conteneur est invalide");
}
  return await Terminal(`docker container logs ${id} --tail 1500`);
}
