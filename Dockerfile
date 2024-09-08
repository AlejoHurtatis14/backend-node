# Usa una imagen base oficial de Node.js
FROM node:18.19.1

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Expone el puerto que usará la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]