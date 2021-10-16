# FESACLOUD, Tu Nube Institucional

![](https://img.shields.io/badge/%C3%9Altima%20Versi%C3%B3n%20-1.0-gre)

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
  - [Cliente](#Cliente)
  - [Servidor](#Servidor)
  - [Docker](#DockerEntornoDeDesarrollo)

## ¿Qué es FESACLOUD? <a name="FESACLOUD"></a>

Es un servicio nube de código abierto, en el cual se puede almacenar archivos. Se puede almacenar archivos de tipo video, documentos e imágenes, ¡Desde cualquier dispositivo conectado a la red local!.

### Técnología Utilizadas <a name="Tecnologia"></a>

Las Tecnologías utiliza en FESACLOUD, son las tecnologías del desarrollo web moderno con HTML5, CSS3, JavaScript ES6 (ECMAScript 6), React JS, FireBase; gestión de paquetes con npm; gestores de controles de versiones con Git y GitHub; finalmente un contenedor con Docker de toda la aplicación.

## Entorno de Producción <a name="EntornoDeProduccion"></a>
Este entorno está orientado para uso de usuario final de la plataforma.

_Clona el repositorio con el comando:_

```sh
$ git clone https://github.com/CristianAgudelo63/Cloud.git
$ cd Cloud/app
$ npm run start
```

### Novedades <a name="Novedades"></a>

![](https://img.shields.io/badge/versi%C3%B3n-1.0-orange)

Primera VERSIÓN ALPHA de la plataforma, incluye en la plataforma un cliente en ReactJS, un servidor con Node y Express y bases de datos en Firebase. La versión aún está en desarrollo.

### Docker Entorno de Producción <a name="DockerEntornoDeProduccion"></a>

Para facilitar el proceso de instalación de la plataforma, ejecuta el siguiente comando utilizando Docker.

```sh
$ docker buil
```

## Entorno de Desarrollo <a name="EntornoDeDesarrollo"></a>
Este entorno está orientado para desarrolladores.

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
### Client <a name="Cliente"></a>
Front-End de la plataforma, se realizará con las siguientes tecnologías:

_La descarga puede tardar unos minutos_

```sh
# Cliente (Front-End)

$ npx create-react-app cloud/app/client
$ cd cloud/app/client   #Ingresar a la carpeta
$ npm i react-router-dom
$ npm i firebase
$ npm i sass
$ npm i --save styled-components
$ npm i formik --save
$ npm i --save @fortawesome/fontawesome-svg-core
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/react-fontawesome
$ npm start   #Ejecutar una vez descargado todo ReactJS
```
Leer la <a href="app/client/README.md">documentación del Cliente</a> para más información.

### Servidor <a name="Servidor"></a>
Back-End de la plataforma, se utilizará las siguientes tecnologías:

```sh
# Servidor (BackEnd)

# Volvemos a la base del proyecto y creamos una carpeta "server"
$ mkdir server
$ cd server
$ npm init --yes
$ npm i express
```
Leer la <a href="app/server/README.md">documentación del Servidor</a> para más información.

### Docker Entorno de Desarrollo <a name="DockerEntornoDeDesarrollo"></a>

Descargar Docker desde su página principal [docker.com](https://www.docker.com/get-started) para empaquetar la aplicación y sus dependencias.

Ingresar a las carpetas "client" y "server", crea un archivo "dockerfile" en cada uno.

```sh
# Cliente
$ cd client
$ touch dockerfile

# Servidor
$ cd server
$ touch dockerfile

# En cada dockerfile se agrega las imágenes necesarias para cada tecnología utilizada.
```
En la raíz del proyecto, crea un archivo "docker-compose" para conectar los dokerfiles y añadir la configuración necesaria.

```sh
$ cd app
$ touch docker-compose.yml
```

### Desarrollado por:

[Cristian Agudelo](https://github.com/CristianAgudelo63), [Juan E. Molina](https://github.com/TheJm10), Emily Valeria, Jary David.
