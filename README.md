# Docker Manager Dashboard

[![GitHub Stars](https://img.shields.io/github/stars/sony-level/dockerManager.svg)](https://github.com/sony-level/dockerManager/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/sony-level/dockerManager.svg)](https://github.com/sony-level/dockerManager/issues) [![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/sony-level/DockerManager) 

Une interface graphique simple pour gerer les conteneurs docker ![Docker: pulls (library)](http://flat.badgen.net/docker/pulls/library/library?params)

## Features
- Démarrer/arrêter, redémarrer, supprimer et voir les journaux d'un conteneur Docker instantanément.
- Filtrer les conteneurs par leur statut de fonctionnement.
- Créer des groupes de conteneurs Docker.
- PAction en masse sur les conteneurs basés sur le groupe.
- Statistiques de consommation du système en direct pour les conteneurs Docker actifs.
- Exécuter ou supprimer une image.
- Pas besoin d'utiliser le terminal pour les tâches courantes.

## Démarrer l'application

Avant de suivre les étapes ci-dessous pour démarrer l'application, assurez-vous d'avoir `node` et `npm` installés sur votre système.

- Cloner le dépôt
- 
  ```
  git clone git@github.com:sony-level/dockerManager.git
  ```
- Changer de répertoire
  ```
  cd ./dockerManager

  ```
  - Exécuter `app.js`, cela installera automatiquement tous les [modules node](https://github.com/sony-level/dockerManager/blob/master/backend/package.json) pour vous s'ils ne sont pas déjà installés.

  ```
  node app.js
  ```
- Maintenant, visitez http://localhost:3230/

## Utiliser Docker

Vous pouvez exécuter cette application via un conteneur Docker, mais cela fonctionne uniquement sous **MacOS**. Vous pouvez l'utiliser avec ou sans [**`docker compose`**](https://docs.docker.com/compose/). 
De plus, l'application sera exposée sur le port http://localhost:3230.

### Sans Docker Compose

Si vous n'avez pas de docker compose, alors vous pouvez utiliser les commandes suivantes :

- Pour construire l'image :

  ```
  docker build . -t docker-Manager
  ```
- Pour exécuter l'image :
  ```
  docker run -p 3230:3230 -v /usr/local/bin/docker:/usr/local/bin/docker -v /var/run/docker.sock:/var/run/docker.sock docke-Manager
  ```


### Avec Docker Compose

Si vous avez déjà installé Docker Compose, il vous suffit de faire ceci :

```
docker-compose build
docker-compose up
```

# Documentations

- [Backend API](https://github.com/sony-level/dockerManager/tree/master/backend)
- [Client](https://github.com/sony-level/dockerManager/tree/master/client)

