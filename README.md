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

## Start the app

Before you follow below steps to start the app, make sure you have `node` and `npm` installed in your system.

- Clone the repository
  ```
  git clone git@github.com:rsony-level/dockerManager.git
  ```
- Change directory
  ```
  cd ./dockerManager

  ```
- Run `app.js`, it will automatically install all the [node modules](https://github.com/rakibtg/docker-web-gui/blob/master/backend/package.json) for you if not installed already.
  ```
  node app.js
  ```
- Now visit http://localhost:3230/

## Using Docker

You can run this application through a docker container, but it only works in **MacOS**. You can use that with/without [**`docker compose`**](https://docs.docker.com/compose/).
Also, the application will be exposed at port http://localhost:3230.

### Without Docker Compose

If you don't have a docker compose, then you can use the following commands:

- To build the image:
  ```
  docker build . -t docker-Manager
  ```
- To run the image:
  ```
  docker run -p 3230:3230 -v /usr/local/bin/docker:/usr/local/bin/docker -v /var/run/docker.sock:/var/run/docker.sock docke-Manager
  ```

### With Docker Compose

If you already docker compose installed, then simply do this:

```
docker-compose build
docker-compose up
```

# Documentations

- [Backend API](https://github.com/sony-level/dockerManager/tree/master/backend)
- [Client](https://github.com/sony-level/dockerManager/tree/master/client)

