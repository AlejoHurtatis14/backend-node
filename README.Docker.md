### Building and running your application

### Docs Descarga de Proyecto

  - Ejecutar `npm i`
  - Copiar archivo .env con el comando `cp original.env .env`

### Ejecutar Proyecto

  - Tener instalado docker para poder ejecutar
  - Ejecutar `docker-compose up -d --build db`
  - Ejecutar `docker-compose up -d --build server`
  - El contenedor se ejecutara, para validarlo abre en el navegador `http://localhost:4000/api/auth/list` y debe listar los usuarios
