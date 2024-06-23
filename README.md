






# 

## Une interface graphique simple pour les conteneurs Docker



## Fonctionnalités

- Instantly start/stop, restart, delete and see the logs of a docker container.
- Filter containers by their running status.
- Create groups of docker container.
- Bulk action on container based on group.
- Live system consumption stat for active docker containers.
- Run or delete an image.
- Prune Docker images.
- Prune Docker containers.
- Prune Docker volumes.
- Prune Docker systems.
- No need to use the terminal for common tasks.

## Start the app

Before you follow below steps to start the app, make sure you have `node` and `npm` installed in your system.

- Clone the repository
  ```
  git clone git@github.com:rakibtg/docker-web-gui.git
  ```
- Change directory
  ```
  cd ./docker-web-gui
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
  docker build . -t docker-web-gui
  ```
- To run the image:
  ```
  docker run -p 3230:3230 -v /usr/local/bin/docker:/usr/local/bin/docker -v /var/run/docker.sock:/var/run/docker.sock docker-web-gui
  ```

### With Docker Compose

If you already docker compose installed, then simply do this:

```
docker-compose build
docker-compose up
```

### Docker Based Commands

A `Makefile` has been included with this repo. It has following commands:

1. `make up` to build the image and starting `docker-web-gui` container.
2. `make build` to build the image.
3. `make start` to start containers if application has been up already.
4. `make stop` to stop application.
5. `make restart` to restart application.
6. `make build-without-compose` to build the application without _docker compose_.
7. `make run-without-compose` to run the application without _docker compose_.

# Documentations

- [Backend API](https://github.com/rakibtg/docker-web-gui/tree/master/backend)
- [Client](https://github.com/rakibtg/docker-web-gui/tree/master/client)

Developed by [Hasan](https://twitter.com/rakibtg) and [contributors](https://github.com/rakibtg/docker-web-gui/graphs/contributors).




# Docker Manager Dashboard
============
[![GitHub Stars](https://img.shields.io/github/stars/sony-level/dockerManager.svg)](https://github.com/sony-level/dockerManager/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/sony-level/dockerManager.svg)](https://github.com/sony-level/dockerManager/issues) [![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/sony-level/DockerManager) 

This is a node.js chat application powered by SockJS and Express that provides the main functions you'd expect from a chat, such as emojis, private messages, an admin system, etc.

![Chat Preview](http://i.imgur.com/lgRe8z4.png)



## Features
- Démarrer/arrêter, redémarrer, supprimer et voir les journaux d'un conteneur Docker instantanément.
- Filtrer les conteneurs par leur statut de fonctionnement.
- Créer des groupes de conteneurs Docker.
- PAction en masse sur les conteneurs basés sur le groupe.
- Statistiques de consommation du système en direct pour les conteneurs Docker actifs.
- Exécuter ou supprimer une image.
- Pas besoin d'utiliser le terminal pour les tâches courantes.

![User Features](http://i.imgur.com/WbF1fi2.png)

![Admin Features](http://i.imgur.com/xQFaadt.png)


#### There are 3 admin levels:
- **Helper:** Can delete chat messages
- **Moderator:** The above plus the ability to kick and ban users
- **Administrator:** All the above plus send global alerts and promote/demote users

---

## Démarrer l'application

**Alerte :** Avant de suivre les étapes ci-dessous pour démarrer l'application, assurez-vous d'avoir node et npm installés sur votre système.



---

## Usage
After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run  `npm start` to start the application. You will then be able to access it at localhost:3000

To give yourself administrator permissions on the chat, you will have to type `/role [your-name]` in the app console.

---

## License
>You can check out the full license [here](https://github.com/IgorAntun/node-chat/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
