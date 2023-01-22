# FESACLOUD, Tu Nube Institucional

_Es un proyecto estudiantil y de prueba. NO está optimizado para producción en un entorno real_

## Contenidos

- [¿Qué es FESACLOUD?](#FESACLOUD)
  - [Técnología Utilizadas](#Tecnologia)
- [Construir la App](#Construir)
  - [Instalar Dependencias y Apps](#InstalarDependencias)
    - [Git](#Git)
    - [NodeJS](#NodeJS)
  - [Cliente](#Cliente)
  - [Servidor](#Servidor)
  - [Docker](#Docker)

## ¿Qué es FESACLOUD? <a name="FESACLOUD"></a>

Es un servicio nube de código abierto, en el cual se puede almacenar archivos. Se puede almacenar archivos de tipo video, documentos e imágenes, ¡Desde cualquier dispositivo conectado a la red local!.

### Técnología Utilizadas <a name="Tecnologia"></a>

Las Tecnologías utiliza en FESACLOUD, son las tecnologías del desarrollo web moderno con HTML5, CSS3, JavaScript ES6 (ECMAScript 6), ReactJS, Firebase; gestión de paquetes con npm; gestores de controles de versiones con Git y GitHub; finalmente un contenedor con Docker de toda la aplicación.

## Construir la App <a name="Construir"></a>

### Instalar Dependencias y Apps<a name="InstalarDependencias"></a>

Para que funcione la aplicación es necesario instalar algunas dependencias para que la ejecución de "FESACLOUD" sea la más optima.

#### Git <a name="Git"></a>

Descargar Git para Windows desde página principal: [git.com/downloads](https://git-scm.com/downloads) (_para Linux y MacOS no es necesario instalar Git_). Una vez finalizado la instalación, abre Git Bash o en su defecto abre la terminal y ejecuta el comando:

```sh
git --version
```

#### NodeJS <a name="NodeJS"></a>

Descargar Node JS igual o posterior a la `versión 14.17.0` desde su página principal [nodejs.org](https://nodejs.org/en/download/), junto con npm igual o posterior a la `versión 6.14.13`. Una vez finalizado la instalación ejecuta los siguientes comandos:

```sh
node --version
npm --version
```

#### Clona el repositorio

```sh
> git clone https://github.com/CristianAgudelo63/Cloud.git
> cd Cloud/app
```

### Client <a name="Cliente"></a>

Leer la <a href="app/client/README.md">documentación del Cliente</a> para más información.

### Servidor <a name="Servidor"></a>

Leer la <a href="app/server/README.md">documentación del Servidor</a> para más información.

### Docker <a name="Docker"></a>

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

En la raíz del proyecto, crea un archivo "docker-compose" para conectar los dockerfiles y añadir la configuración necesaria.

```sh
cd app
touch docker-compose.yml
```

### Desarrollado por

[Cristian Agudelo](https://github.com/CristianAgudelo63), [Juan E. Molina](https://github.com/TheJm10), Emily Valeria, Jary David.
