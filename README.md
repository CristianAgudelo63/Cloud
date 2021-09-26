# FESACLOUD, Tu Nube Institucional

![](https://img.shields.io/badge/%C3%9Altima%20Versi%C3%B3n%20-1.0-orange)

[Switch to Documentation in English](#English)

## Contenidos:

- [¿Qué es FESACLOUD?](#FESACLOUD)
  - [Técnología Utilizadas](#Tecnologia)
- [Entorno de Producción](#EntornoDeProduccion)
  - [Novedades](#Novedades)
  - [Docker](#DockerEntornoDeProduccion)
- [Entorno de Desarrollo](#EntornoDeDesarrollo)
  - [Instalar Dependencias](#InstalarDependencias)
    - [Git](#Git)
    - [Node JS](#NodeJS)
    - [React JS](#ReactJS)
  - [Docker](#DockerEntornoDeDesarrollo)

## ¿Qué es FESACLOUD? <a name="FESACLOUD"></a>

Es un servicio nube de código abierto, en el cual se puede almacenar archivos. Se puede almacenar archivos de tipo video, documentos e imágenes, ¡Desde cualquier dispositivo conectado a la red local!.

### Técnología Utilizadas <a name="Tecnologia"></a>

Las Tecnologías utiliza en FESACLOUD, son las tecnologías del desarrollo web moderno con HTML5, CSS3, JavaScript ES6 (ECMAScript 6), React JS, FireBase; gestión de paquetes con npm; gestores de controles de versiones con Git y GitHub; finalmente un contenedor con Docker de toda la aplicación.

## Entorno de Producción <a name="EntornoDeProduccion"></a>

Este entorno es para instituciones. Para usuarios poco avanzados.

_Clona el repositorio con el comando:_

```sh
$ git clone https://github.com/CristianAgudelo63/Cloud.git
$ cd Cloud/app
$ npm run start
```

### Novedades <a name="Novedades"></a>

![](https://img.shields.io/badge/versi%C3%B3n-1.0-orange)

Primera versión de la plataforma estable, se incluye en la plataforma un cliente, un servidor y bases de datos.

### Docker Entorno de Producción <a name="DockerEntornoDeProduccion"></a>

Para facilitar el proceso de instalación de la plataforma, ejecuta el siguiente comando utilizando Docker.

```sh
$ docker buil
```

## Entorno de Desarrollo <a name="EntornoDeDesarrollo"></a>

Este entorno es solo para desarrolladores. Para usuarios más avanzados.

### Instalar Dependencias <a name="InstalarDependencias"></a>

Para que funcione la aplicación es necesario instalar algunas dependencias para que la ejecución de "FESACLOUD" sea la más optima.

#### Git <a name="Git"></a>

Descargar Git para Windows desde página principal: [git.com/downloads](https://git-scm.com/downloads) (_para Linux y MacOS no es necesario instalar Git_). Una vez finalizado la instalación, abre Git Bash o en su defecto abre la terminal y ejecuta el comando:

```sh
$ git --version
```

#### Node JS <a name="NodeJS"></a>

Descargar Node JS igual o posterior a la `versión 14.17.0` desde su página principal [nodejs.org](https://nodejs.org/en/download/), junto con npm igual o posterior a la `versión 6.14.13`. Una vez finalizado la instalación ejecuta los siguientes comandos:

```sh
$ node --version
$ npm --version
```

#### React JS <a name="ReactJS"></a>

Descargar React JS con la herramienta Create React App y algunas dependencias con los siguientes comandos:

_La descarga puede tardar unos minutos_

```sh
$ npx create-react-app fesacloud/app
$ cd fesacloud/app   #Ingresar a la carpeta
$ npm i react-router-dom
$ npm i firebase
$ npm i sass
$ npm i formik --save
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
$ npm start   #Ejecutar una vez descargado todo ReactJS
```

### Docker Entorno de Desarrollo <a name="DockerEntornoDeDesarrollo"></a>

Descargar Docker desde su página principal [docker.com](https://www.docker.com/get-started) para empaquetar la aplicación y sus dependencias. Si conocer de docker, puedes decargar una imágen de NodeJS y Ubuntu.

```sh
$ docker pull node:14.17-alpine
$ docker pull ubuntu
```

### Desarrollado por:

[Cristian Agudelo](https://github.com/CristianAgudelo63), [Juan E. Molina](https://github.com/TheJm10), Emily Valeria, Jary David.

---

# FESACLOUD, Your Institutional Cloud <a name="English"></a>

![](https://img.shields.io/badge/Latest%20Version-1.0-orange)

## Contents:

- [What's FESACLOUD?](#What)
  - [Technology Used](#Technology)
- [Production Environment](#ProductionEnvironment)
  - [News](#News)
  - [Docker](#DockerProductionEnvironment)
- [Development Environment](#DevelopmentEnvironment)
  - [Install Dependencies](#InstallDependencies)
    - [Git](#GitEnglish)
    - [Node JS](#NodeEnglish)
    - [React JS](#ReactEnglish)
  - [Docker](#DockerDevelopmentEnvironment)

## What's FESACLOUD? <a name="What"></a>

It's an open source cloud service, in which you can store files. You can store video-type files, documents and images, from any device connected to the local network!.

### Technology Used <a name="Technology"></a>

The Technologies used in FESACLOUD, are the technologies of modern web development with HTML5, CSS3, JavaScript, React JS, Sass and JSX; package management with npm and apt; server-side connections to Node JS, Express, MySQL, and Linux; version control managers with Git and GitHub; finally a container with Docker of the whole application.

## Production Environment <a name="ProductionEnvironment"></a>

This environment is for institutions. For low-advanced users.

_Clone the repository with the command:_

```sh
git clone https://github.com/CristianAgudelo63/Cloud.git
cd Cloud/client
npm run start
```

### News <a name="News"></a>

![](https://img.shields.io/badge/version-1.0-orange)

First version of the stable platform, a client, a server, and databases are included in the platform.

### Docker Production Environment <a name="DockerProductionEnvironment"></a>

To facilitate the platform installation process, run the following command using Docker.

```sh
docker buil
```

## Development Environment <a name="DevelopmentEnvironment"></a>

This environment is for developers only. For more advanced users.

### Install Dependencies <a name="InstallDependencies"></a>

For the application to work it is necessary to install some dependencies so that the execution of "FESACLOUD" is the most optimal.

#### Git <a name="GitEnglish"></a>

Download Git for Windows from home page: [git.com/downloads](https://git-scm.com/downloads) (_for Linux and MacOS you don't need to install Git_). Once the installation is complete, open Git Bash or otherwise open the terminal and run the command:

```sh
git --version
```

#### Node JS <a name="NodeEnglish"></a>

Download Node JS equal to or later than 'version 14.17.0' from its home page [nodejs.org](https://nodejs.org/en/download/), along with npm equal to or later than 'version 6.14.13'. After the installation is complete, run the following commands:

```sh
node --version
nmp --version
```

#### React JS <a name="ReactEnglish"></a>

Download React JS with the Create React App tool with the following commands:

_Download may take a few minutes_

```sh
npx create-react-app fesacloud
cd fesacloud   #Enter the folder
npm start   #Run after downloading all ReactJS
```

### Docker Development Environment <a name="DockerDevelopmentEnvironment"></a>

Download Docker from its [docker.com](https://www.docker.com/get-started) home page to package the application and its dependencies. If you know of docker, you can download an image of NodeJS, MySQL and Ubuntu.

```sh
docker pull node:14.17-alpine
docker pull mysql
docker pull ubuntu
```

### Developed by:

[Cristian Agudelo](https://github.com/CristianAgudelo63), [Juan E. Molina](https://github.com/TheJm10), Emily Valeria, Jary David.
